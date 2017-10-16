using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using ProfProPartage.Model;
using ProfProPartage.Validations;

namespace ProfProPartage.ViewModel
{

    public class ViewModelFicheCoursInvalide : IValidatableObject
    {
        private FicheCoursInvalide _fiche;
        
        
        public FicheCoursInvalide FicheCours_inside
        {
            get { return _fiche; }
        }

        public ViewModelFicheCoursInvalide(FicheCoursInvalide fic)
        {
            _fiche = fic;
        }

        public ViewModelFicheCoursInvalide()
        {
            _fiche = new FicheCoursInvalide();
        }

        public int Id
        {
            get { return _fiche.Id; }
            set { _fiche.Id = value; }
        }

        [Required(ErrorMessageResourceType = typeof(ProfProPartage.Res.ErrorsMessages), ErrorMessageResourceName = "RequiredField")]
        public string Titre
        {
            get { return _fiche.Titre; }
            set { _fiche.Titre = value; }
        }

        [Required(ErrorMessageResourceType = typeof(ProfProPartage.Res.ErrorsMessages), ErrorMessageResourceName = "RequiredField")]
        public string Niveau
        {
            get { return _fiche.Niveau; }
            set { _fiche.Niveau = value; }
        }
        [Required(ErrorMessageResourceType = typeof(ProfProPartage.Res.ErrorsMessages), ErrorMessageResourceName = "RequiredField")]
        public string Matiere
        {
            get { return _fiche.Matiere; }
            set { _fiche.Matiere = value; }
        }
        [Required(ErrorMessageResourceType = typeof(ProfProPartage.Res.ErrorsMessages), ErrorMessageResourceName = "RequiredField")]
        public string Theme
        {
            get { return _fiche.Theme; }
            set { _fiche.Theme = value; }
        }

        public long Temperature
        {
            get { return _fiche.Temperature; }
            set { _fiche.Temperature = value; }
        }
        //[Required]
        [Required(ErrorMessageResourceType = typeof(ProfProPartage.Res.ErrorsMessages), ErrorMessageResourceName = "RequiredField")]
        //[Remote("VerifUniqueUrl", "Validation")]
        public string UrlPDF
        {
            get { return _fiche.UrlPDF; }
            set { _fiche.UrlPDF = value; }
        }
        public string UrlJPG
        {
            get { return _fiche.UrlJPG; }
            set { _fiche.UrlJPG = value; }
        }
        public string UserId
        {
            get { return _fiche.UserId; }
            set { _fiche.UserId = value; }
        }
        public Model.ApplicationUser User
        {
            get { return _fiche.User; }
            set { _fiche.User = value; }
        }

        [MaxWordsAttribute(5, ErrorMessageResourceName = "TooManyWordsField", ErrorMessageResourceType = typeof(ProfProPartage.Res.ErrorsMessages))]
        [StringLength(maximumLength: 50, ErrorMessageResourceType = typeof(ProfProPartage.Res.ErrorsMessages), ErrorMessageResourceName = "TooLongField")]

        public string Description
        {
            get { return _fiche.Description; }
            set { _fiche.Description = value; }
        }


        public List<Keyword> Keywords
        {
            get { return _fiche.Keywords.ToList(); }
            set { _fiche.Keywords = value; }
        }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            //Vérif :mot clef en double
            if (Keywords.Select(x => x.Word).Distinct().Count() != Keywords.Count)
            {
                yield return new ValidationResult("At least two keywords are the same ones");
            }

        }
    }

}