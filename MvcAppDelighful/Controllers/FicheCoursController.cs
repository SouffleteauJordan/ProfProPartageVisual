using ProfProPartage.Bll;
using ProfProPartage.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.SignalR;
using AppProfProPartage.Controllers;
using ProfProPartage.ViewModel;
using System.IO;
using System.Data.SqlClient;
using System.Drawing;
using System.Drawing.Imaging;
using Spire.Pdf;
using AppProfProPartage.ViewModel;
using Microsoft.AspNet.Identity.Owin;
using ProfProPartage.ViewModel.Model;

namespace AppProfProPartage.Controllers
{
    public class FicheCoursController : Controller
    {
        private BusinessLocator _businessLocator;

        public FicheCoursController()
        {
            _businessLocator = ((BusinessLocator)System.Web.HttpContext.Current.Items["BusinessLocator"]);
        }
        
        public async Task<ActionResult> Index()
        {

            FicheCoursBll FicheCoursBll = _businessLocator.FicheCoursBll;
            List<FicheCours> listBkms = await FicheCoursBll.GetAllFicheCoursAsync();
            
            ViewModelFicheCoursList vm = new ViewModelFicheCoursList(listBkms);
            
            return View(vm);
        }

        [HttpPost]
        public async Task<ActionResult> SearchBookmarksByKeywords(FormCollection collection)
        {

            string[] list_selected_Keywords = collection["hf_Keywords_selected"].Split('|');
            
            return PartialView("PVListBookmarks", new ViewModelFicheCoursList(await _businessLocator.FicheCoursBll.GetFicheCoursByKeywordsAsync(list_selected_Keywords)).ListFic);
        }
        
        public ActionResult Details(int id)
        {
            return View();
        }
        
        [System.Web.Mvc.Authorize]
        public async Task<ActionResult> MesFiches()
        {
            List<FicheCours> listFiche = new List<FicheCours>();

            FicheCoursBll FicheCoursBll = _businessLocator.FicheCoursBll;
            listFiche = FicheCoursBll.GetMesFicheCours(User.Identity.GetUserId());
            

            ViewModelFicheCoursList vm = new ViewModelFicheCoursList(listFiche);
            
            return View(vm);
        }

        //
        // GET: /Bookmark/Create
        [System.Web.Mvc.Authorize(Roles="admin")]
        public ActionResult Create()
        {
            return View();
        }
        public ActionResult Import()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Upload()
        {
            var files = HttpContext.Request.Files;

            List<Files> fileList = new List<Files>();
            Files doc = null;
            foreach (string upload in Request.Files)
            {
                if (Request.Files[upload].ContentLength == 0) continue;
                string filename = Path.GetFileName(Request.Files[upload].FileName);
                string pathToSave = Server.MapPath("~/Files/");
                Request.Files[upload].SaveAs(Path.Combine(pathToSave, filename.Replace(" ", "_").Replace("-", "_")));

                string niveau = HttpContext.Request.Form["niveau"];
                string matiere = HttpContext.Request.Form["matiere"];
                string theme = HttpContext.Request.Form["theme"];
                string description = HttpContext.Request.Form["description"];
                doc = new Files("/Files/" + filename.Replace(".pdf", "").Replace(" ", "_").Replace("-", "_"), "/Files/" + filename.Replace(".pdf", "").Replace(" ", "_").Replace("-", "_") + ".jpg", filename, Request.Files[upload].ContentLength, "/Files/" + filename.Replace(".pdf", "").Replace(" ", "_").Replace("-", "_"), "/Files/" + filename.Replace(".pdf", "").Replace(" ", "_").Replace("-", "_"), niveau, matiere, theme, description);

                PdfDocument pdf_doc = new PdfDocument();
                pdf_doc.LoadFromStream(Request.Files[upload].InputStream);
                Image img = pdf_doc.SaveAsImage(0);
                img.Save(Path.Combine(pathToSave, filename.Replace(" ", "_").Replace("-", "_").Replace(".pdf", "")) + ".jpg", ImageFormat.Jpeg);
                fileList.Add(doc);

                FicheCoursInvalideBll FicheCoursInvalideBll = _businessLocator.FicheCoursInvalideBll;
                FicheCoursInvalideBll.AddFicheCoursInvalideAsync(new FicheCoursInvalide() {Description = description, Titre = doc.name, Niveau = doc.niveau, Matiere = doc.matiere, Theme = doc.theme, UrlPDF = "/Files/" + filename.Replace(" ", "_").Replace("-", "_"), UrlJPG = "/Files/"+ filename.Replace(" ", "_").Replace("-", "_").Replace(".pdf", "") + ".jpg", Temperature = 0, UserId=User.Identity.GetUserId(), DateAjout = DateTime.Now, NombreTelechargement = 0});
            }
            listFiles list = new listFiles(fileList);
            JsonResult res = Json(list);
            return res;
        }



        //
        // POST: /Bookmark/Create
        [HttpPost]
            [System.Web.Mvc.Authorize(Roles = "admin")]
            public async Task<ActionResult> Create(ViewModelFicheCours vmBookmark)
            {
                try
                {
                    if (ModelState.IsValid)
                    {
                        vmBookmark.FicheCours_inside.UserId = User.Identity.GetUserId();
                        await _businessLocator.FicheCoursBll.AddFicheCoursAsync(vmBookmark.FicheCours_inside);
                    
                        var context = GlobalHost.ConnectionManager.GetHubContext<MyHub>();

                        context.Clients.All.refreshJS();
                    
                        return RedirectToAction("Index");
                    }
                    else
                    {
                        return View(vmBookmark);
                    }
                }
                catch
                {
                    return View(vmBookmark);
                }
            }

            public async Task<ActionResult> Obtain5LastBookmarks()
            {
                Thread.Sleep(1000); //permet de ralentir l'execution de la méthode afin de voir l'appel asynchrone et l'image du chargement s'afficher
                return PartialView("PVListBookmarks",
                    new ViewModelFicheCoursList(await _businessLocator.FicheCoursBll.GetAllFicheCoursAsync()).ListFic.OrderByDescending(x => x.Id).Take(5));
            }

   
            //
            // GET: /Bookmark/Edit/5
            public ActionResult Edit(int id)
            {
                return View();
            }

            //
            // POST: /Bookmark/Edit/5
            [HttpPost]
            public ActionResult Edit(int id, FormCollection collection)
            {
                try
                {
                    // TODO: Add update logic here

                    return RedirectToAction("Index");
                }
                catch
                {
                    return View();
                }
            }

            //
            // GET: /Bookmark/Delete/5
            public ActionResult Delete(int id)
            {
                return View();
            }

            //
            // POST: /Bookmark/Delete/5
            [HttpPost]
            public ActionResult Delete(int id, FormCollection collection)
            {
                try
                {
                    // TODO: Add delete logic here

                    return RedirectToAction("Index");
                }
                catch
                {
                    return View();
                }
            }
        }
    
    class listFiles
    {
        public List<Files> files { get; set; }

        public listFiles(List<Files> list)
        {
            files = list;
        }
    }
    class Files
    {
        public String url { get; set; }
        public String thumbnailUrl { get; set; }
        public String name { get; set; }
        public long size { get; set; }
        public String deleteUrl { get; set; }
        public String deleteType { get; set; }
        public String niveau { get; set; }
        public String matiere { get; set; }
        public String theme { get; set; }
        public String description { get; set; }

    public Files(String url, String thumbnail, String name, long size, String delUrl, String delType, String niveau, String matiere, String theme, String description)
        {
            this.url = url;
            this.thumbnailUrl = thumbnail;
            this.name = name;
            this.size = size;
            this.deleteUrl = delUrl;
            this.deleteType = delType;
            this.niveau = niveau;
            this.matiere = matiere;
            this.theme = theme;
            this.description = description;
        }
    }
}
