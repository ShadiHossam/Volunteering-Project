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
    public class CityController : ApiController
    {
        //        private lastContext db = new lastContext();
        private NGOdata.NGODBEntities db = null;

        public CityController()
        {
            db = new NGOdata.NGODBEntities();
        }

        // GET: api/City
        public List<CityViewModel> GetCity()
        {
            var CityList = db.City.ToList();
            List<CityViewModel> CityViewModelList = new List<CityViewModel>();
            foreach (var item in CityList)
            {
                CityViewModel CityViewModel = new CityViewModel();

                Mapper.CreateMap<City, CityViewModel>();
                CityViewModel = Mapper.Map<City, CityViewModel>(item);

                CityViewModelList.Add(CityViewModel);
            }

            return CityViewModelList;
        }

    
    // GET: api/City/5
    [ResponseType(typeof(CityViewModel))]
    public CityViewModel GetCity(int id)
    {
        CityViewModel CityViewModel = new CityViewModel();
        NGOdata.City GetCity;

        GetCity = db.City.Where(x => x.Id == id).FirstOrDefault();
        Mapper.CreateMap<City, CityViewModel>();
        CityViewModel = Mapper.Map<City, CityViewModel>(GetCity);

        return CityViewModel;

    }
    
        

        

        // PUT: api/City/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCity(int id, CityViewModel CityViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != CityViewModel.Id)
            {
                return BadRequest();
            }
        City City = new City();
        Mapper.CreateMap<CityViewModel, City>();
        City = Mapper.Map<CityViewModel, City>(CityViewModel);

        db.Entry(City).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CityExists(id))
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

        // POST: api/City
        [ResponseType(typeof(CityViewModel))]
        public IHttpActionResult PostCity(CityViewModel CityViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            City City = new City();
            Mapper.CreateMap<CityViewModel, City>();
            City = Mapper.Map<CityViewModel, City>(CityViewModel);

           

            db.City.Add(City);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = City.Id }, City);
        }

        // DELETE: api/City/5
        [ResponseType(typeof(CityViewModel))]
        public IHttpActionResult DeleteCity(int id)
        {
            var City = db.City.Find(id);
            if (City == null)
            {
                return NotFound();
            }

            db.City.Remove(City);
            db.SaveChanges();

            return Ok(City);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CityExists(int id)
        {
            return db.City.Count(e => e.Id == id) > 0;
        }
    }
}