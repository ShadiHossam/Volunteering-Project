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
    public class CorporatesController : ApiController
    {
        private NGOdata.NGODBEntities db = null;

        public CorporatesController()
        {
            db = new NGOdata.NGODBEntities();
        }

        // GET: api/Coroprates

        public List<CorporatesViewModel> GetCoroprates()
        {

            var CorporatesList = db.Corporates.ToList();
            List<CorporatesViewModel>CorporatesViewModelList = new List<CorporatesViewModel>();
            foreach (var item in CorporatesList)
            {
                CorporatesViewModel CorporatesViewModel = new CorporatesViewModel();

                Mapper.CreateMap<Corporates, CorporatesViewModel>();
                CorporatesViewModel = Mapper.Map<Corporates, CorporatesViewModel>(item);


               CorporatesViewModel.CityName = item.City?.CityName;
               CorporatesViewModel.CountryName = item.Country?.CountryName;
               CorporatesViewModel.SegmentName = item.Segments?.SegmentsName;


               CorporatesViewModelList.Add(CorporatesViewModel);
            }


            return CorporatesViewModelList;
        }
        [Route("Api/GetCorporateByUserName")]

        [HttpGet]
        public CorporatesViewModel GetUserByCorporateName(string UserName)
        {
            CorporatesViewModel Corporate = new CorporatesViewModel();

            NGOdata.Corporates GetCorporate;

            GetCorporate = db.Corporates.Where(x => x.UserName == UserName).FirstOrDefault();



            Mapper.CreateMap<Corporates, CorporatesViewModel>();
            Corporate = Mapper.Map<Corporates, CorporatesViewModel>(GetCorporate);


            Corporate.CountryName = GetCorporate.Country?.CountryName;
            Corporate.SegmentName = GetCorporate.Segments?.SegmentsName;
            Corporate.CityName = GetCorporate.City?.CityName;



            return Corporate;
        }
        // GET: api/Coroprates/5
        [ResponseType(typeof(Corporates))]
        public CorporatesViewModel GetCoroprate(int id)
        {
                CorporatesViewModel CorporatesViewModel = new CorporatesViewModel();

                NGOdata.Corporates GetCorporates;

                GetCorporates = db.Corporates.Where(x => x.Id == id).FirstOrDefault();
                Mapper.CreateMap<Corporates, CorporatesViewModel>();
               CorporatesViewModel = Mapper.Map<Corporates, CorporatesViewModel>(GetCorporates);

               CorporatesViewModel.CityName = GetCorporates.City?.CityName;
               CorporatesViewModel.CountryName = GetCorporates.Country?.CountryName;
               CorporatesViewModel.SegmentName = GetCorporates.Segments?.SegmentsName;

            return CorporatesViewModel;
            }

        // PUT: api/Coroprates/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCoroprates(int id, CorporatesViewModel CorporatesViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id !=CorporatesViewModel.Id)
            {
                return BadRequest();
            }
            Corporates Corporates = new Corporates();
            Mapper.CreateMap<CorporatesViewModel, Corporates>();
            Corporates = Mapper.Map<CorporatesViewModel, Corporates>(CorporatesViewModel);

            db.Entry(Corporates).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CorporatesExists(id))
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

        // POST: api/Coroprates
        [ResponseType(typeof(CorporatesViewModel))]
        public IHttpActionResult PostCoroprates(CorporatesViewModel CorporatesViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            Corporates corporates = new Corporates();
            Mapper.CreateMap<CorporatesViewModel, Corporates>();
            corporates = Mapper.Map<CorporatesViewModel, Corporates>(CorporatesViewModel);

            db.Corporates.Add(corporates);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id =CorporatesViewModel.Id },CorporatesViewModel);
        }

        // DELETE: api/Coroprates/5
        [ResponseType(typeof(CorporatesViewModel))]
        public IHttpActionResult DeleteCoroprates(int id)
        {
            var Corporates = db.Corporates.Find(id);
            if (Corporates == null)
            {
                return NotFound();
            }

            db.Corporates.Remove(Corporates);
            db.SaveChanges();

            return Ok(Corporates);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CorporatesExists(int id)
        {
            return db.Corporates.Count(e => e.Id == id) > 0;
        }
        [Route("Api/Corporates/FilterCorporates")]

        [HttpPost]
        [ResponseType(typeof(Corporates))]
        public List<CorporatesViewModel> FilterJob(FilterViewModel FilterViewModel)
        {

            List<Corporates> CorporatesList = new List<Corporates>();
            List<CorporatesViewModel> CorporatesViewModelList = new List<CorporatesViewModel>();
            CorporatesList = db.Corporates.Where(w =>
            (w.CityId == FilterViewModel.CityId || FilterViewModel.CityId == null) &&
            (w.CountryId == FilterViewModel.CountryId || FilterViewModel.CountryId == null)).OrderByDescending(o => o.UserName).Skip(FilterViewModel.StartRecord).Take(FilterViewModel.RecordPerpage).ToList();

            foreach (var item in CorporatesList)
            {
                CorporatesViewModel CorporatesViewModel = new CorporatesViewModel();

                Mapper.CreateMap<Corporates, CorporatesViewModel>();
                CorporatesViewModel = Mapper.Map<Corporates, CorporatesViewModel>(item);

                CorporatesViewModel.CityName = item.City?.CityName;
                CorporatesViewModel.CountryName = item.Country?.CountryName;
                


                CorporatesViewModelList.Add(CorporatesViewModel);
            }


            return CorporatesViewModelList;

        }
    }
}