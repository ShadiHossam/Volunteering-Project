using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace last.Models
{
    public class UserViewModel
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PhoneNumber { get; set; }
        public Nullable<int> CitiesId { get; set; }
        public Nullable<int> JobId { get; set; }
        public string CityName { get; set; }
        public string JobName { get; set; }
        public string Message { get; set; }
    }
}