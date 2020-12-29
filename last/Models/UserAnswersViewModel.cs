using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace last.Models
{
    public class UserAnswersViewModel
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int QuestionId { get; set; }
        public string Answer { get; set; }
        public string UserName { get; set; }
        public string QuestionName { get; set; }



    }
}