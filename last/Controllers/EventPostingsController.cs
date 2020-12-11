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
using last.Models;

namespace last.Controllers
{
    public class EventPostingsController : ApiController
    {
        private NGOEntities db = new NGOEntities();

        // GET: api/EventPostings
        public IQueryable<EventPosting> GetEventPostings()
        {
            return db.EventPostings;
        }

        // GET: api/EventPostings/5
        [ResponseType(typeof(EventPosting))]
        public IHttpActionResult GetEventPosting(int id)
        {
            EventPosting eventPosting = db.EventPostings.Find(id);
            if (eventPosting == null)
            {
                return NotFound();
            }

            return Ok(eventPosting);
        }

        // PUT: api/EventPostings/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEventPosting(int id, EventPosting eventPosting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != eventPosting.Id)
            {
                return BadRequest();
            }

            db.Entry(eventPosting).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventPostingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/EventPostings
        [ResponseType(typeof(EventPosting))]
        public IHttpActionResult PostEventPosting(EventPosting eventPosting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EventPostings.Add(eventPosting);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (EventPostingExists(eventPosting.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = eventPosting.Id }, eventPosting);
        }

        // DELETE: api/EventPostings/5
        [ResponseType(typeof(EventPosting))]
        public IHttpActionResult DeleteEventPosting(int id)
        {
            EventPosting eventPosting = db.EventPostings.Find(id);
            if (eventPosting == null)
            {
                return NotFound();
            }

            db.EventPostings.Remove(eventPosting);
            db.SaveChanges();

            return Ok(eventPosting);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EventPostingExists(int id)
        {
            return db.EventPostings.Count(e => e.Id == id) > 0;
        }






      





        [Route("Api/Event/CreateEvent")]
        [HttpPost]
        public object CreateEvent(EventPosting lv1)
        {
            try
            {

                EventPosting Event = new EventPosting();
                //if (Event.Id == 0)
                {
                    Event.TicketLink = lv1.TicketLink;
                    Event.EventDescription = lv1.EventDescription;
                    Event.CitiesId = lv1.CitiesId;
                    Event.CountryId = lv1.CountryId;
                    Event.EventName = lv1.EventName;
                    Event.EventDate = lv1.EventDate;
                    Event.EventHeadline = lv1.EventHeadline;
                    Event.JobTypeId = lv1.JobTypeId;

                    db.EventPostings.Add(Event);
                    db.SaveChanges();
                    int EventId = Event.Id;
                    return new Response
                    { Status = "Success", Message = "SuccessFully Saved." };
                }
            }
            catch (Exception ex)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Invalid Data." };
        }
    }
}