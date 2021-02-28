using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace last.Models
{
    public class FilterViewModel
    {

        public int StartRecord { get; set; }
        public int RecordPerpage { get; set; }
        public Nullable<int> CountryId { get; set; }
        public Nullable<int> CityId { get; set; }
        public Nullable<int> AreaOfExpertiseId { get; set; } 
        public Nullable<int> UserAreaOfExpertise { get; set; } 
        public Nullable<int> YearsOFExpertiseId { get; set; }
        public string CreationDateSTR { get; set; }
        public Nullable<DateTime> FromDate { get; set; }
        public Nullable<DateTime> ToDate { get; set; }
    }
}