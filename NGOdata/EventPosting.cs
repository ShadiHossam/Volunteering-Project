//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace NGOdata
{
    using System;
    using System.Collections.Generic;
    
    public partial class EventPosting
    {
        public int Id { get; set; }
        public string TicketLink { get; set; }
        public string EventName { get; set; }
        public System.DateTime EventDate { get; set; }
        public string EventDescription { get; set; }
        public string EventHeadline { get; set; }
        public Nullable<int> JobTypeId { get; set; }
        public Nullable<int> CitiesId { get; set; }
        public Nullable<int> CountryId { get; set; }
    
        public virtual Cities Cities { get; set; }
        public virtual Countries Countries { get; set; }
        public virtual JobTypes JobTypes { get; set; }
    }
}
