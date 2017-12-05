using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;
using ProfProPartage.Bll;
using ProfProPartage.Model;
using ProfProPartage.ViewModel;
using System.IO;

namespace AppProfProPartage.Controllers
{
    public class CatalogueController : Controller
    {

        private BusinessLocator _businessLocator;

        public CatalogueController()
        {
            _businessLocator = ((BusinessLocator)System.Web.HttpContext.Current.Items["BusinessLocator"]);
        }
        
        public ActionResult Catalogue()
        {
            ViewBag.Message = "Les fiches de cours sont classé par niveau, matière puis thème";

            List<FicheCours> listFiche = new List<FicheCours>();

            FicheCoursBll FicheCoursBll = _businessLocator.FicheCoursBll;
            listFiche = FicheCoursBll.GetAllFicheCours();
            ViewModelFicheCoursList vm = new ViewModelFicheCoursList(listFiche);

            return View(vm);
        }


        [System.Web.Mvc.Authorize(Roles = "admin")]
        public ActionResult ListeFicheInvalide()
        {
            ViewBag.Message = "Les fiches de cours sont classé par niveau, matière puis thème";

            List<FicheCoursInvalide> listFicheInvalide = new List<FicheCoursInvalide>();

            FicheCoursInvalideBll FicheCoursInvalideBll = _businessLocator.FicheCoursInvalideBll;
            listFicheInvalide = FicheCoursInvalideBll.GetAllFicheCoursInvalide();
            ViewModelFicheCoursInvalideList vm = new ViewModelFicheCoursInvalideList(listFicheInvalide);

            return View(vm);
        }

        public FileStreamResult GetPDF(string url)
        {
            FileStream fs = new FileStream(url, FileMode.Open, FileAccess.Read);
            return File(fs, "application/pdf");
        }
        
    }
}