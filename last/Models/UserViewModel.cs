using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace last.Models
{
    public class UserViewModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string UserName { get; set; }
        public string Password { get; set; }

        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime Birthdate { get; set; }
        public string Address { get; set; }
        public string HomeNumber { get; set; }
        public string UserImage { get; set; }
        
        public Nullable<int> CitiesId { get; set; }
        public Nullable<int> CountriesId { get; set; }

        public Nullable<int> AreaOfExpertiseId { get; set; }
        public string CityName { get; set; }
        public string CountryName { get; set; }

        public string AreaOfExpertiseName { get; set; }
    }
}