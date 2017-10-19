using System.Web.Mvc;

namespace Blog.Post.Areas.Blog
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
                name: "Blog_Post",
                url: "Blog/Post/{action}/{id}",
                defaults: new { controller = "Post", action = "Post", id = UrlParameter.Optional },
                namespaces: new[] { "Blog.Post.Areas.Blog.Controllers" }
            );
        }
    }
}