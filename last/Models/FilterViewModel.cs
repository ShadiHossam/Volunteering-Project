using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace last.Models
{
    public class FilterViewModel
    {

        public Nullable<int> CountryId { get; set; }
        public Nullable<int> CityId { get; set; }
        public Nullable<int> AreaOfExpertiseId { get; set; } 
        public Nullable<int> YearsOFExpertiseId { get; set; }
        public string CreationDateSTR { get; set; }
    }
}