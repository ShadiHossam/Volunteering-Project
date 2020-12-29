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
    public class CountryController : ApiController
    {
        NGOdata.NGODBEntities db = new NGOdata.NGODBEntities();

        // GET: api/Country
        public List<CountryViewModel> GetCountry()
        {
            var CountryList = db.Country.ToList();
            List<CountryViewModel> CountryViewModelList = new List<CountryViewModel>();
            foreach (var item in CountryList)
            {
                CountryViewModel CountryViewModel = new CountryViewModel();

                Mapper.CreateMap<Country, CountryViewModel>();
                CountryViewModel = Mapper.Map<Country, CountryViewModel>(item);

                CountryViewModelList.Add(CountryViewModel);
            }

            return CountryViewModelList;
        }

        // GET: api/Country/5
        [ResponseType(typeof(CountryViewModel))]
        public CountryViewModel GetCountry(int id)
        {
            CountryViewModel CountryViewModel = new CountryViewModel();
            NGOdata.Country GetCountry;

            GetCountry = db.Country.Where(x => x.Id == id).FirstOrDefault();
            Mapper.CreateMap<Country, CountryViewModel>();
            CountryViewModel = Mapper.Map<Country, CountryViewModel>(GetCountry);

            return CountryViewModel;
        }
        

        // PUT: api/Country/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCountry(int id, CountryViewModel CountryViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != CountryViewModel.Id)
            {
                return BadRequest();
            }
            Country country = new Country();
            Mapper.CreateMap<CountryViewModel, Country>();
            country = Mapper.Map<CountryViewModel, Country>(CountryViewModel);
            db.Entry(country).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CountryExists(id))
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

        // POST: api/Country
        [ResponseType(typeof(CountryViewModel))]
        public IHttpActionResult PostCountry(CountryViewModel CountryViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            Country Country = new Country();
            Mapper.CreateMap<CountryViewModel, Country>();
            Country = Mapper.Map<CountryViewModel, Country>(CountryViewModel);
            db.Country.Add(Country);
            db.SaveChanges();


            return CreatedAtRoute("DefaultApi", new { id = Country.Id }, Country);
        }

        // DELETE: api/Country/5
        [ResponseType(typeof(CountryViewModel))]
        public IHttpActionResult DeleteCountry(int id)
        {
            var Country = db.Country.Find(id);
            if (Country == null)
            {
                return NotFound();
            }

            db.Country.Remove(Country);
            db.SaveChanges();

            return Ok(Country);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CountryExists(int id)
        {
            return db.Country.Count(e => e.Id == id) > 0;
        }
    }
}