
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using ProfProPartage.Libs;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace ProfProPartage.Model
{
  
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
        public string Nom { get; set; } 
        public string Prenom { get; set; }

        [Display(Name = "Date de naissance")]
        public DateTime DateNaissance { get; set; }

        [Display(Name = "Date d'inscription")]
        public DateTime DateInscription { get; set; }

        [Display(Name = "Date de début de carrière")]
        public DateTime DateDebutCarriere { get; set; }

        [Display(Name = "Nombre de fiche déposées")]
        public int NombreFicheUpload { get; set; }

        [Display(Name = "Expérience")]
        public int Experience { get; set; }

        [Display(Name = "Level")]
        public int Level { get; set; }

        [Display(Name = "Titre")]
        public string Titre { get; set; }

        [Display(Name = "Nombre de téléchargment total de vos fiches")]
        public int NombreTelechargement { get; set; }

        [Display(Name = "Pseudo")]
        [Required]
        public string Pseudo { get; set; }

        [Display(Name = "Département")]
        public int Departement { get; set; }

        [Display(Name = "Classe")]
        public ClassePref Classe { get; set; }
        
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
            {
                // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
                //var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
                var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
                // Add custom user claims here
                userIdentity.AddClaim(new Claim("int", "idMesInfosUser"));
                return userIdentity;
            }
        }


}
