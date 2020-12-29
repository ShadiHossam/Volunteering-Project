﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace last.Models
{
    public class JobApplyViewModel
    {
		public int Id { get; set; }
		public int JobId { get; set; }
		public int UserId { get; set; }
		public int CorporateId { get; set; }
		public int JobFormId { get; set; }
		public int UserAnswerId { get; set; }
		public int JobApplyStatusId { get; set; }
		public string JobName { get; set; }
		public string UserName { get; set; }
		public string CorporateName { get; set; }
		public string JobFormName { get; set; }
		public string UserAnswerName { get; set; }
		public string JobApplyStatusName { get; set; }



	}
}