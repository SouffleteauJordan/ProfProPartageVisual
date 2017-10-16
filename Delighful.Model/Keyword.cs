using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProfProPartage.Model
{
    
    public class Keyword
    {
        public virtual int Id { get; set; }
        public virtual string Word { get; set; }
        //clé étrangère
        public virtual int FicheId { get; set; }
        //propriété de navigation
        public virtual FicheCours Fiche { get; set; }

    }
}