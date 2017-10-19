using System.Web.Mvc;

namespace Blog.Category.Areas.Blog
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
               name: "Blog_Category",
               url: "Blog/Category/{action}/{id}",
               defaults: new { controller = "Category", action = "Category", id = UrlParameter.Optional },
               namespaces: new[] { "Blog.Category.Areas.Blog.Controllers" }
            );
        }
    }
}