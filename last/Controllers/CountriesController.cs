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
    public class CountriesController : ApiController
    {
        //private lastContext db = new lastContext();
        NGOdata.NGOEntities db = new NGOdata.NGOEntities();

        // GET: api/Counties
        public List<CountriesViewModel> GetCounties()
        {
            var countiesList = db.Countries.ToList();
            List<CountriesViewModel> countriesViewModelList = new List<CountriesViewModel>();
            foreach (var item in countiesList)
            {
                CountriesViewModel countriesViewModel = new CountriesViewModel();

                Mapper.CreateMap<Countries, CountriesViewModel>();
                countriesViewModel = Mapper.Map<Countries, CountriesViewModel>(item);

                countriesViewModelList.Add(countriesViewModel);
            }

            return countriesViewModelList;
        }

        // GET: api/Counties/5
        [ResponseType(typeof(CountriesViewModel))]
        public CountriesViewModel GetCounties(int id)
        {
            CountriesViewModel countriesViewModel = new CountriesViewModel();
            NGOdata.Countries GetCountry;

            GetCountry = db.Countries.Where(x => x.Id == id).FirstOrDefault();
            Mapper.CreateMap<Countries, CountriesViewModel>();
            countriesViewModel = Mapper.Map<Countries, CountriesViewModel>(GetCountry);

            return countriesViewModel;
        }
        

        // PUT: api/Counties/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCounties(int id, CountriesViewModel countriesViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != countriesViewModel.Id)
            {
                return BadRequest();
            }
            Countries country = new Countries();
            Mapper.CreateMap<CountriesViewModel, Countries>();
            country = Mapper.Map<CountriesViewModel, Countries>(countriesViewModel);
            db.Entry(country).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CountiesExists(id))
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

        // POST: api/Counties
        [ResponseType(typeof(CountriesViewModel))]
        public IHttpActionResult PostCounties(CountriesViewModel countriesViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            Countries countries = new Countries();
            Mapper.CreateMap<CountriesViewModel, Countries>();
            countries = Mapper.Map<CountriesViewModel, Countries>(countriesViewModel);
            db.Countries.Add(countries);
            db.SaveChanges();


            return CreatedAtRoute("DefaultApi", new { id = countries.Id }, countries);
        }

        // DELETE: api/Counties/5
        [ResponseType(typeof(CountriesViewModel))]
        public IHttpActionResult DeleteCounties(int id)
        {
            var countries = db.Countries.Find(id);
            if (countries == null)
            {
                return NotFound();
            }

            db.Countries.Remove(countries);
            db.SaveChanges();

            return Ok(countries);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CountiesExists(int id)
        {
            return db.Countries.Count(e => e.Id == id) > 0;
        }
    }
}