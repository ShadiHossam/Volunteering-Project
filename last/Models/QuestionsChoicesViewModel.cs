using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace last.Models
{
    public class QuestionsChoicesViewModel
    {
        public int Id { get; set; }
        public int QuestionsId { get; set; }
        public string Choices { get; set; }
        public string QuestionsName { get; set; }

    }
}