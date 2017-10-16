using System.Web.Mvc;
using Microsoft.Practices.Unity;
using Unity.Mvc5;
using System.Data.Entity;
using ProfProPartage.Dal;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity.Infrastructure;
using ProfProPartage.ViewModel.Model;

namespace AppProfProPartage
{
    public static class UnityConfig
    {
        public static UnityContainer UnityContainer { get; set; }

        public static void RegisterComponents()
        {
            var container = new UnityContainer();
            UnityContainer = container;

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();

            container.RegisterType<DbContextProfProPartage>(new PerRequestLifetimeManager());
            //container.RegisterInstance<Bidon>(new Bidon());
            //container.RegisterType<Bidon>();

            //container.RegisterType<IBookmarkRepository, BookmarkRepository>();
            //container.RegisterType<IKeywordRepository, KeywordRepository>();


            container.RegisterType<Microsoft.AspNet.Identity.IUserStore<ProfProPartage.ViewModel.Model.ApplicationUser>,
                                            UserStore<ApplicationUser>>();

            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }
    }
}