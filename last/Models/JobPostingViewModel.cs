using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace last.Models
{
    public class JobPostingViewModel
    {

        public int Id { get; set; }
        public string JobTitle { get; set; } 
        public string Description { get; set; }
        public int? City { get; set; }
        public int? Country { get; set; }
        public int? JobTypeId { get; set; }
        public string Location { get; set; }
        public string Duration { get; set; }
        public string ContactPhoneNumber { get; set; }
        public string ContactEmail { get; set; }
        public string Language { get; set; }



        public string CityName { get; set; }
        public string JobType { get; set; }
        public string CountryName { get; set; }


    }
}