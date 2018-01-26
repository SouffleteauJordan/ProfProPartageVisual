using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace ProfProPartage.Helper
{
    public static class MyHelpers
    {
        public static MvcHtmlString CustomTruncate(this HtmlHelper x, MvcHtmlString s, int nbr)
        {
            var chaine = WebUtility.HtmlDecode(s.ToString());
            if (chaine.Length > nbr)
            {
                return MvcHtmlString.Create(String.Format("{0}...", chaine.Substring(0, nbr)));
            }
            else
            {
                return s;
            }


        }
        public static MvcHtmlString Replace(this HtmlHelper x, String s, string olds, string news)
        {
            return MvcHtmlString.Create(s.Replace(olds, news));
        }

        public static MvcHtmlString FormatDataView(string data)
        {
            return MvcHtmlString.Create(data.Replace(" ", "_").Replace("_:_", "_").Replace("_/_", "_").Replace("(", "_").Replace(")", "_"));
        }

        
    }
}