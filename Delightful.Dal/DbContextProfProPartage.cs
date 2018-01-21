using ProfProPartage.ViewModel.Model;
using ProfProPartage.Model;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProfProPartage.Dal
{
    public class DbContextProfProPartage : IdentityDbContext<ApplicationUser>
    {

        public DbContextProfProPartage()
            : base("ProfProPartageAzure")
        {
        }


        public DbSet<FicheCours> Fiches { get; set; }
        public DbSet<FicheCoursInvalide> FichesInvalide { get; set; }
        public DbSet<Keyword> Keywords { get; set; }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }

        public static DbContextProfProPartage Create()
        {
            return new DbContextProfProPartage();
        }
        
    }
}



