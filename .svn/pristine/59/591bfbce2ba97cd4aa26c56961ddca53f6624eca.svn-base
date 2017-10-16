using ProfProPartage.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace ProfProPartage.Dto
{
    [DataContract]
    public class FicheCoursDtoUpdate
    {
        private FicheCours _fic;

        public FicheCoursDtoUpdate()
        {
            _fic = new FicheCours();
        }

        public FicheCoursDtoUpdate(FicheCours fic)
        {
            _fic = fic;
        }

        [DataMember]
        [Required]
        public int Id
        {
            get { return _fic.Id; }
            set { _fic.Id = value; }
        }

        [DataMember]
        [Required]
        public string Title
        {
            get { return _fic.Titre; }
            set { _fic.Titre = value; }
        }

        [DataMember]
        [Required]
        public string UrlPDF
        {
            get { return _fic.UrlPDF; }
            set { _fic.UrlPDF = value; }
        }

        [DataMember]
        [Required]
        public string UrlJPG
        {
            get { return _fic.UrlJPG; }
            set { _fic.UrlJPG = value; }
        }

        [DataMember]
        [Required]
        [StringLength(100)] //validation : la longueur du champ ne doit pas dépasser 100
        public string Description
        {
            get { return _fic.Description; }
            set { _fic.Description = value; }
        }

        [DataMember]
        public List<Keyword> Keywords
        {
            get { return _fic.Keywords ; }
            set { _fic.Keywords = value; }
        }

        
    }
}
