using System.Web.Mvc;

namespace Blog.Users.Areas.Blog
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
               name: "Blog_Users",
               url: "Blog/Users/{action}/{id}",
               defaults: new { controller = "Users", action = "Users", id = UrlParameter.Optional },
               namespaces: new[] { "Blog.Users.Areas.Blog.Controllers" }
            );
        }
    }
}