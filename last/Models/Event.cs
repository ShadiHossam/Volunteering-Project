using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace last.Models
{
    public class Event

    {
        public int Id { get; set; }
        public string TicketLink { get; set; }
        public string EventDescription { get; set; }
        public string CitiesId { get; set; }
        public string CountryId { get; set; }
        public string JobTypeId { get; set; }

        
        public string EventName { get; set; }
        public string EventDate { get; set; }
        public string EventHeadline { get; set; }
        
    }
}