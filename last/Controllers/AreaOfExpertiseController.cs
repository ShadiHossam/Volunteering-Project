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
    public class AreaOfExpertiseController : ApiController
    {
        NGOdata.NGODBEntities db = new NGOdata.NGODBEntities();

        // GET: api/AreaOfExpertise
        public List<AreaOfExpertiseViewModel> GetAreaOfExpertise()
        {
            var AreaOfExpertiseList = db.AreaOfExpertise.ToList();

            List<AreaOfExpertiseViewModel> AreaOfExpertiseViewModelList = new List<AreaOfExpertiseViewModel>();

            foreach (var item in AreaOfExpertiseList)
            {
                AreaOfExpertiseViewModel AreaOfExpertiseViewModel = new AreaOfExpertiseViewModel();

                Mapper.CreateMap<AreaOfExpertise, AreaOfExpertiseViewModel>();
                AreaOfExpertiseViewModel = Mapper.Map<AreaOfExpertise, AreaOfExpertiseViewModel>(item);

                AreaOfExpertiseViewModelList.Add(AreaOfExpertiseViewModel);
            }
            

            return AreaOfExpertiseViewModelList;
        }

        // GET: api/AreaOfExpertise/5
        [ResponseType(typeof(AreaOfExpertiseViewModel))]
        //public IHttpActionResult GetAreaOfExpertise(int id)
           public AreaOfExpertiseViewModel GetAreaOfExpertise(int id)

        {
            AreaOfExpertiseViewModel AreaOfExpertiseViewModel = new AreaOfExpertiseViewModel();
            NGOdata.AreaOfExpertise GetAreaOfExpertise;

            GetAreaOfExpertise = db.AreaOfExpertise.Where(x => x.Id == id ).FirstOrDefault();

            Mapper.CreateMap<AreaOfExpertise, AreaOfExpertiseViewModel>();
            AreaOfExpertiseViewModel = Mapper.Map<AreaOfExpertise, AreaOfExpertiseViewModel>(GetAreaOfExpertise);

            return AreaOfExpertiseViewModel;


           
        }

        // PUT: api/AreaOfExpertise/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAreaOfExpertise(int id, AreaOfExpertiseViewModel AreaOfExpertiseViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != AreaOfExpertiseViewModel.Id)
            {
                return BadRequest();
            }
            AreaOfExpertise AreaOfExpertise = new AreaOfExpertise();
            Mapper.CreateMap<AreaOfExpertiseViewModel, AreaOfExpertise>();
            AreaOfExpertise = Mapper.Map<AreaOfExpertiseViewModel, AreaOfExpertise>(AreaOfExpertiseViewModel);
            db.Entry(AreaOfExpertise).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AreaOfExpertiseExists(id))
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

        // POST: api/AreaOfExpertise
        [ResponseType(typeof(AreaOfExpertiseViewModel))]
        public IHttpActionResult PostAreaOfExpertise(AreaOfExpertiseViewModel AreaOfExpertiseViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            AreaOfExpertise AreaOfExpertise = new AreaOfExpertise();
            Mapper.CreateMap<AreaOfExpertiseViewModel, AreaOfExpertise>();
            AreaOfExpertise = Mapper.Map<AreaOfExpertiseViewModel, AreaOfExpertise>(AreaOfExpertiseViewModel);            

            db.AreaOfExpertise.Add(AreaOfExpertise);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = AreaOfExpertise.Id }, AreaOfExpertise);
        }

        // DELETE: api/AreaOfExpertise/5
        [ResponseType(typeof(AreaOfExpertiseViewModel))]
        public IHttpActionResult DeleteAreaOfExpertise(int id)
        {
            var AreaOfExpertise = db.AreaOfExpertise.Find(id);
            if (AreaOfExpertise == null)
            {
                return NotFound();
            }

            db.AreaOfExpertise.Remove(AreaOfExpertise);
            db.SaveChanges();

            return Ok(AreaOfExpertise);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AreaOfExpertiseExists(int id)
        {
            return db.AreaOfExpertise.Count(e => e.Id == id) > 0;
        }
    }
}