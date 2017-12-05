using ProfProPartage.Bll;
using ProfProPartage.Model;
using ProfProPartage.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AppProfProPartage.Controllers
{
    public class HomeController : Controller
    {
        private BusinessLocator _businessLocator;

        public HomeController()
        {
            _businessLocator = ((BusinessLocator)System.Web.HttpContext.Current.Items["BusinessLocator"]);
        }

        public ActionResult Index()
        {
            ViewBag.Message = "Les fiches de cours sont classé par niveau, matière puis thème";

            List<FicheCours> listFiche = new List<FicheCours>();

            FicheCoursBll FicheCoursBll = _businessLocator.FicheCoursBll;
            listFiche = FicheCoursBll.GetAllFicheCours();
            ViewModelFicheCoursList vm = new ViewModelFicheCoursList(listFiche);

            return View(vm);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

    }
}