using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AppProfProPartage.ViewModel.Startup))]
namespace AppProfProPartage.ViewModel
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
            ConfigureAuth(app);

        }
    }
}
