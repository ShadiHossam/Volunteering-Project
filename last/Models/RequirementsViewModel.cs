using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace last.Models
{
    public class RequirementsViewModel
    {

        public int Id { get; set; }
        public int JobId { get; set; }
        public string Requirements { get; set; }
        public string JobName { get; set; }

    }
}