using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using last.Models;

namespace last.Models
{
    public class Response
    {
        public string Status
        {
            set;
            get;
        }
        public string Message
        {
            set;
            get;
        }

    }
    public class Registration : User { }
    public class JobPosting : JobListing { }


}