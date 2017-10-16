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
    public class AdminController : Controller
    {
        private BusinessLocator _businessLocator;

        public AdminController()
        {
            _businessLocator = ((BusinessLocator)System.Web.HttpContext.Current.Items["BusinessLocator"]);
        }


        [System.Web.Mvc.Authorize(Roles = "admin")]
        public ActionResult AdminPanel()
        {
            List<FicheCoursInvalide> listFicheInvalide = new List<FicheCoursInvalide>();

            FicheCoursInvalideBll FicheCoursInvalideBll = _businessLocator.FicheCoursInvalideBll;
            listFicheInvalide = FicheCoursInvalideBll.GetAllFicheCoursInvalide();
            ViewModelFicheCoursInvalideList vm = new ViewModelFicheCoursInvalideList(listFicheInvalide);

            return View(vm);
        }

        [HttpPost]
        public int ValiderFicheInvalide()
        {
            int id = int.Parse(HttpContext.Request.Form.Get("id"));

            FicheCoursInvalideBll FicheCoursInvalideBll = _businessLocator.FicheCoursInvalideBll;
            FicheCoursInvalideBll.ValiderFiche(id);
            return id;
        }

        [HttpPost]
        public int RefuserFicheInvalide()
        {
            int id = int.Parse(HttpContext.Request.Form.Get("id"));

            FicheCoursInvalideBll FicheCoursInvalideBll = _businessLocator.FicheCoursInvalideBll;
            FicheCoursInvalideBll.RefuserFiche(id);
            return id;
        }
    }
}