using ProfProPartage.Model;
using ProfProPartage.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProfProPartage.ViewModel
{
    public class ViewModelFicheCoursInvalideList
    {
        private List<ViewModelFicheCoursInvalide> _ListFic = new List<ViewModelFicheCoursInvalide>();

        public List<ViewModelFicheCoursInvalide> ListFic
        {
            get { return _ListFic; }
        }

        public ViewModelFicheCoursInvalideList(IEnumerable<FicheCoursInvalide> p_listfic)
        {
            if (p_listfic != null) { 
                foreach (FicheCoursInvalide fic in p_listfic)
                {
                    ViewModelFicheCoursInvalide VMbkm = new ViewModelFicheCoursInvalide(fic);
                    _ListFic.Add(VMbkm);
                }
            }

        }

        //on pourra rajouter des choses ici par la suite

    }
}