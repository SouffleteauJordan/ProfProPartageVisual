using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProfProPartage.Model.ViewModels.Fiches
{
    public class FicheModel
    {
        public string Title { get; set; }
        public string Niveau { get; set; }
        public string Matiere { get; set; }
        public string Theme { get; set; }
        public string Auteur { get; set; }
        public double Note { get; set; }
    }
}
