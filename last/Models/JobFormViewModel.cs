using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace last.Models
{
    public class JobFormViewModel
    {
        public int Id { get; set; }
        public int JobId { get; set; }
        public string QuestionHeader { get; set; }
        public string Type { get; set; }
        public string JobName { get; set; }
        public List<QuestionsChoicesViewModel> QuestionsChoicesViewModelList { get; set; }

    }
}