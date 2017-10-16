using ProfProPartage.Model;
using ProfProPartage.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProfProPartage.ViewModel
{
    public class ViewModelFicheCoursList
    {
        private List<ViewModelFicheCours> _ListFic = new List<ViewModelFicheCours>();

        public List<ViewModelFicheCours> ListFic
        {
            get { return _ListFic; }
        }

        public ViewModelFicheCoursList(IEnumerable<FicheCours> p_listfic)
        {
            foreach (FicheCours fic in p_listfic)
            {
                ViewModelFicheCours VMbkm = new ViewModelFicheCours(fic);
                _ListFic.Add(VMbkm);
            }

        }

        //on pourra rajouter des choses ici par la suite

    }
}