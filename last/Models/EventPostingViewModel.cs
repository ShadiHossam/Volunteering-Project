using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace last.Models
{
    public class EventPostingViewModel
    {
        public int Id { get; set; }
        public string EventName { get; set; }
        public string EventDate { get; set; }
        public string EventHeadline { get; set; }
        public string EventDescription { get; set; }
        public string TicketLink { get; set; }
        public int? JobTypeId { get; set; }
        public int? CitiesId { get; set; }
        public int? CountryId { get; set; }
        //public Nullable<int> CitiesId { get; set; }
        //public Nullable<int> CountryId { get; set; }
        //public Nullable<int> JobTypeId { get; set; }
        //public string CityName { get; set; }
        //public string JobType { get; set; }
        //public string CountryName { get; set; }




    }
}