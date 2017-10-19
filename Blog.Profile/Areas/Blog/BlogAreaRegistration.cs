using System.Web.Mvc;

namespace Blog.Profile.Areas.Blog
{
    public class BlogAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Blog";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
               name: "Blog_Profile",
               url: "Blog/Profile/{action}/{id}",
               defaults: new { controller = "Profile", action = "ProfileAuth", id = UrlParameter.Optional },
               namespaces: new[] { "Blog.Profile.Areas.Blog.Controllers" }
            );
        }
    }
}