using ProfProPartage.Model;
using ProfProPartage.ViewModel.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ProfProPartage.Model
{
    public class FicheCours
    {
        public virtual int Id { get; set; }
        public virtual string Titre { get; set; }
        public virtual string Niveau { get; set; }
        public virtual string Matiere { get; set; }
        public virtual string Theme { get; set; }
        public virtual long Temperature { get; set; }
        public virtual string UrlPDF { get; set; }
        public virtual string UrlJPG { get; set; }
        public virtual string Description { get; set; }

        public string UserId { get; set; }

        [ForeignKey("UserId")]
        public ApplicationUser User { get; set; }

        //propriété de navigation
        public virtual List<Keyword> Keywords { get; set; }

        public FicheCours()
        {
            Keywords = new List<Keyword>();
        }
    }
}