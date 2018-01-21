
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using ProfProPartage.Function;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace ProfProPartage.ViewModel.Model
{
  
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
        public string Nom { get; set; } 
        public string Prenom { get; set; }
        public DateTime DateNaissance { get; set; }
        public DateTime DateInscription { get; set; }
        public int NombreFicheUpload { get; set; }
        public int Experience { get; set; }
        public int Level { get; set; }
        public string Titre { get; set; }
        public int NombreTelechargement { get; set; }

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
