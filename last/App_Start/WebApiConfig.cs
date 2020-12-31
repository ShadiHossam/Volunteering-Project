using last.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Web.Http;
using System.Web.Http.Cors;

namespace last
{
    public static class WebApiConfig
    {
        //public static string UrlPrefixRelative { get; internal set; }
        public static string UrlPrefixRelative { get { return "~/api"; }  }
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            config.Formatters.JsonFormatter.SupportedMediaTypes
            .Add(new MediaTypeHeaderValue("text/html"));
            // Web API routes
            config.MessageHandlers.Add(new TokenValidationHandler());

            config.MapHttpAttributeRoutes();
            EnableCorsAttribute cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            //config.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling 
            //    = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
        }
    }
}
