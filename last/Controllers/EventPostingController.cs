using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AutoMapper;
using last.Models;
using NGOdata;

namespace last.Controllers
{
    public class EventPostingController : ApiController
    {
//        NGOdata.NGODBEntities db = new NGOdata.NGODBEntities();

//        // GET: api/EventPosting
    
//       public List<EventPostingViewModel> GetEventPosting()
//        {
//            //NGOdata.EventPosting GetEvent;

//            var EventPostingList = db.EventPosting.ToList();
//             List<EventPostingViewModel> eventPostingViewModelList = new List<EventPostingViewModel>();
//            foreach (var item in EventPostingList)
//            {

//                EventPostingViewModel eventPostingViewModel = new EventPostingViewModel();

//                Mapper.CreateMap<EventPosting, EventPostingViewModel>();
//                eventPostingViewModel = Mapper.Map<EventPosting, EventPostingViewModel>(item);


//                eventPostingViewModel.CityName = item.Cities.CityName;
//                eventPostingViewModel.JobType = item.JobTypes.TypeName;
//                eventPostingViewModel.CountryName = item.Countries.CountryName;
//                eventPostingViewModelList.Add(eventPostingViewModel);

//            }


//            return eventPostingViewModelList;

//        }

//        // GET: api/EventPosting/5
//        [ResponseType(typeof(EventPosting))]
//        //public IHttpActionResult GetEventPosting(int id)
//        public EventPostingViewModel GetEventPosting(int id)
//        {
//            EventPostingViewModel eventPostingViewModel = new EventPostingViewModel();
//            NGOdata.EventPosting GetEvent;

//            GetEvent = db.EventPosting.Where(x => x.Id == id).FirstOrDefault();
//            Mapper.CreateMap<EventPosting, EventPostingViewModel>();
//            eventPostingViewModel = Mapper.Map<EventPosting, EventPostingViewModel>(GetEvent);
//;


//            eventPostingViewModel.CityName = GetEvent.Cities.CityName;
//         eventPostingViewModel.JobType = GetEvent.JobTypes.TypeName;
//            eventPostingViewModel.CountryName = GetEvent.Countries.CountryName;



//            return eventPostingViewModel;
//        }

//        // PUT: api/EventPosting/5
//        [ResponseType(typeof(void))]
//        public IHttpActionResult PutEventPosting(int id, EventPostingViewModel eventPostingViewModel)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }
          
//            if (id != eventPostingViewModel.Id)
//            {
//                return BadRequest();
//            }
//            EventPosting eventPosting = new EventPosting();
//            Mapper.CreateMap<EventPostingViewModel, EventPosting>();
//            eventPosting = Mapper.Map<EventPostingViewModel, EventPosting>(eventPostingViewModel);

//            db.Entry(eventPosting).State = EntityState.Modified;

//            try
//            {
//                db.SaveChanges();
//            }
//            catch (DbUpdateConcurrencyException)
//            {
//                if (!EventPostingExists(id))
//                {
//                    return NotFound();
//                }   
//                else
//                {
//                    throw;
//                }
//            }

//            return StatusCode(HttpStatusCode.NoContent);
//        }

//        // POST: api/EventPosting
//        [HttpPost]
//        [ResponseType(typeof(EventPosting))]
//        public IHttpActionResult PostEventPosting(EventPostingViewModel eventPostingViewModel)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }
//            eventPostingViewModel.CreationDate = DateTime.Now;

//            EventPosting eventPosting = new EventPosting();
//            Mapper.CreateMap<EventPostingViewModel, EventPosting>();
//            eventPosting = Mapper.Map<EventPostingViewModel, EventPosting>(eventPostingViewModel);

//            db.EventPosting.Add(eventPosting);
//            db.SaveChanges();


//            return CreatedAtRoute("DefaultApi", new { id = eventPosting.Id }, eventPosting);

           
//        }

//        // DELETE: api/EventPosting/5
//        [ResponseType(typeof(EventPosting))]
//        public IHttpActionResult DeleteEventPosting(int id)
//     //   public IQueryable<EventPosting> DeleteEventPosting(int id)
//        {
//            var eventPosting = db.EventPosting.Find(id);
//            if (eventPosting == null)
//            {
//                return NotFound();
//            }

//            db.EventPosting.Remove(eventPosting);
//            db.SaveChanges();


//            return Ok(eventPosting);
//        }
        

//        protected override void Dispose(bool disposing)
//        {
//            if (disposing)
//            {
//                db.Dispose();
//            }
//            base.Dispose(disposing);
//        }

//        private bool EventPostingExists(int id)
//        {
//            return db.EventPosting.Count(e => e.Id == id) > 0;
//        }






      





//    //    [Route("Api/Event/CreateEvent")]
//    //    [HttpPost]
//    //    public object CreateEvent(EventPosting lv1)
//    //    {
//    //        try
//    //        {

//    //            EventPosting Event = new EventPosting();
//    //            //if (Event.Id == 0)
//    //            {
//    //                Event.TicketLink = lv1.TicketLink;
//    //                Event.EventDescription = lv1.EventDescription;
//    //                Event.CitiesId = lv1.CitiesId;
//    //                Event.CountryId = lv1.CountryId;
//    //                Event.EventName = lv1.EventName;
//    //                Event.EventDate = lv1.EventDate;
//    //                Event.EventHeadline = lv1.EventHeadline;
//    //                Event.JobTypeId = lv1.JobTypeId;

//    //                db.EventPosting.Add(Event);
//    //                db.SaveChanges();
//    //                int EventId = Event.Id;
//    //                return new Response
//    //                { Status = "Success", Message = "SuccessFully Saved." };
//    //            }
//    //        }
//    //        catch (Exception ex)
//    //        {

//    //            //throw;
//    //            return new Response
//    //        { Status = "Error", Message = "Invalid Data." };
//    //        }
            
//    //    }
    }
}