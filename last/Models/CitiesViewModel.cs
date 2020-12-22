using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace last.Models
{
    public class CitiesViewModel
    {
        public int Id { get; set; }
        public string CityName { get; set; }
        public int CountryId { get; set; }
    }
}