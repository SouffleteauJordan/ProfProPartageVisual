using ProfProPartage.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace ProfProPartage.Dto
{
    [DataContract]
    public class FicheCoursDto
    {
        private FicheCours _fic;

        public FicheCoursDto()
        {
            _fic = new FicheCours();
        }

        public FicheCoursDto(FicheCours fic)
        {
            _fic = fic;
        }

        [DataMember]
        public int Id
        {
            get { return _fic.Id; }
            set { _fic.Id = value; }
        }

        [DataMember]
        public string Title
        {
            get { return _fic.Titre; }
            set { _fic.Titre = value; }
        }

        [DataMember]
        public string UrlPDF
        {
            get { return _fic.UrlPDF; }
            set { _fic.UrlPDF = value; }
        }


        [DataMember]
        public string UrlJPG
        {
            get { return _fic.UrlJPG; }
            set { _fic.UrlJPG = value; }
        }

        [DataMember]
        public string Description
        {
            get { return _fic.Description; }
            set { _fic.Description = value; }
        }

        [DataMember]
        public DateTime DateAjout
        {
            get { return _fic.DateAjout; }
            set { _fic.DateAjout = value; }
        }

        [DataMember]
        public int NombreTelechargement
        {
            get { return _fic.NombreTelechargement; }
            set { _fic.NombreTelechargement = value; }
        }


        public List<Keyword> Keywords
        {
            get { return _fic.Keywords.ToList(); }
            set { _fic.Keywords = value; }
        }

        
    }
}
