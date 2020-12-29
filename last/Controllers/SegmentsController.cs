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

using NGOdata;
using AutoMapper;
namespace last.Controllers
{
    public class SegmentsController : ApiController
    {
        NGOdata.NGODBEntities db = new NGOdata.NGODBEntities();

        // GET: api/Segments
        public List<SegmentsViewModel> GetQuestionChoices()
        {
            var QuestionChoicesList = db.Segments.ToList();

            List<SegmentsViewModel> QuestionChoicesViewModelList = new List<SegmentsViewModel>();

            foreach (var item in QuestionChoicesList)
            {
                SegmentsViewModel QuestionChoicesViewModel = new SegmentsViewModel();

                Mapper.CreateMap<Segments, SegmentsViewModel>();
                QuestionChoicesViewModel = Mapper.Map<Segments, SegmentsViewModel>(item);

                QuestionChoicesViewModelList.Add(QuestionChoicesViewModel);
            }


            return QuestionChoicesViewModelList;
        }

        // GET: api/Segments/5
        [ResponseType(typeof(SegmentsViewModel))]
        public SegmentsViewModel GetQuestionChoices(int id)

        {
            SegmentsViewModel QuestionChoicesViewModel = new SegmentsViewModel();
            NGOdata.Segments GetQuestionChoices;

            GetQuestionChoices = db.Segments.Where(x => x.Id == id).FirstOrDefault();

            Mapper.CreateMap<Segments, SegmentsViewModel>();
            QuestionChoicesViewModel = Mapper.Map<Segments, SegmentsViewModel>(GetQuestionChoices);

            return QuestionChoicesViewModel;



        }

        // PUT: api/Segments/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSegmentsViewModel(int id, SegmentsViewModel segmentsViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != segmentsViewModel.Id)
            {
                return BadRequest();
            }

            Segments Segments = new Segments();
            Mapper.CreateMap<SegmentsViewModel, Segments>();
            Segments = Mapper.Map<SegmentsViewModel, Segments>(segmentsViewModel);
            db.Entry(Segments).State = EntityState.Modified;
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SegmentsExists(id))
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

        // POST: api/Segments
        [ResponseType(typeof(SegmentsViewModel))]
        public IHttpActionResult PostSegmentsViewModel(SegmentsViewModel segmentsViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Segments Segments = new Segments();
            Mapper.CreateMap<SegmentsViewModel, Segments>();
            Segments = Mapper.Map<SegmentsViewModel, Segments>(segmentsViewModel);

            db.Segments.Add(Segments); 
            db.SaveChanges(); 

            return CreatedAtRoute("DefaultApi", new { id = segmentsViewModel.Id }, segmentsViewModel);
        }

        // DELETE: api/Segments/5
        [ResponseType(typeof(SegmentsViewModel))]
        public IHttpActionResult DeleteSegments(int id)
        {
            var Segments = db.Segments.Find(id);
            if (Segments == null)
            {
                return NotFound();
            }

            db.Segments.Remove(Segments);
            db.SaveChanges();

            return Ok(Segments);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SegmentsExists(int id)
        {
            return db.Segments.Count(e => e.Id == id) > 0;
        }
    }
}