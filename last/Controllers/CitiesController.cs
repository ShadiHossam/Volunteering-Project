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
using last.Data;
using last.Models;
using NGOdata;

namespace last.Controllers
{
    public class CitiesController : ApiController
    {
        //        private lastContext db = new lastContext();
        NGOdata.NGOEntities db = new NGOdata.NGOEntities();

        // GET: api/Cities
        public List<CitiesViewModel> GetCities()
        {
            var citiesList = db.Cities.ToList();
            List<CitiesViewModel> citiesViewModelList = new List<CitiesViewModel>();
            foreach (var item in citiesList)
            {
                CitiesViewModel citiesViewModel = new CitiesViewModel();

                Mapper.CreateMap<Cities, CitiesViewModel>();
                citiesViewModel = Mapper.Map<Cities, CitiesViewModel>(item);

                citiesViewModelList.Add(citiesViewModel);
            }

            return citiesViewModelList;
        }

    
    // GET: api/Cities/5
    [ResponseType(typeof(CitiesViewModel))]
    public CitiesViewModel GetCities(int id)
    {
        CitiesViewModel citiesViewModel = new CitiesViewModel();
        NGOdata.Cities GetCity;

        GetCity = db.Cities.Where(x => x.Id == id).FirstOrDefault();
        Mapper.CreateMap<Cities, CitiesViewModel>();
        citiesViewModel = Mapper.Map<Cities, CitiesViewModel>(GetCity);

        return citiesViewModel;

    }
    
        

        

        // PUT: api/Cities/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCities(int id, CitiesViewModel citiesViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != citiesViewModel.Id)
            {
                return BadRequest();
            }
        Cities cities = new Cities();
        Mapper.CreateMap<CitiesViewModel, Cities>();
        cities = Mapper.Map<CitiesViewModel, Cities>(citiesViewModel);

        db.Entry(cities).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CitiesExists(id))
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

        // POST: api/Cities
        [ResponseType(typeof(CitiesViewModel))]
        public IHttpActionResult PostCities(CitiesViewModel citiesViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            Cities cities = new Cities();
            Mapper.CreateMap<CitiesViewModel, Cities>();
            cities = Mapper.Map<CitiesViewModel, Cities>(citiesViewModel);

           

            db.Cities.Add(cities);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = cities.Id }, cities);
        }

        // DELETE: api/Cities/5
        [ResponseType(typeof(CitiesViewModel))]
        public IHttpActionResult DeleteCities(int id)
        {
            var cities = db.Cities.Find(id);
            if (cities == null)
            {
                return NotFound();
            }

            db.Cities.Remove(cities);
            db.SaveChanges();

            return Ok(cities);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CitiesExists(int id)
        {
            return db.Cities.Count(e => e.Id == id) > 0;
        }
    }
}