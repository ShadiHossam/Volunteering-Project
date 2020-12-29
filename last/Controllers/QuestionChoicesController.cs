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
    public class QuestionChoicesController : ApiController
    {
        NGOdata.NGODBEntities db = new NGOdata.NGODBEntities();

        // GET: api/QuestionChoices
        public List<QuestionsChoicesViewModel> GetQuestionChoices()
        {
            var QuestionChoicesList = db.QuestionsChoices.ToList();

            List<QuestionsChoicesViewModel> QuestionChoicesViewModelList = new List<QuestionsChoicesViewModel>();

            foreach (var item in QuestionChoicesList)
            {
                QuestionsChoicesViewModel QuestionChoicesViewModel = new QuestionsChoicesViewModel();

                Mapper.CreateMap<QuestionsChoices, QuestionsChoicesViewModel>();
                QuestionChoicesViewModel = Mapper.Map<QuestionsChoices, QuestionsChoicesViewModel>(item);

                QuestionChoicesViewModelList.Add(QuestionChoicesViewModel);
            }


            return QuestionChoicesViewModelList;
        }
        // GET: api/QuestionChoices/5
        [ResponseType(typeof(QuestionsChoicesViewModel))]
        public QuestionsChoicesViewModel GetQuestionChoices(int id)

        {
            QuestionsChoicesViewModel QuestionChoicesViewModel = new QuestionsChoicesViewModel();
            NGOdata.QuestionsChoices GetQuestionChoices;

            GetQuestionChoices = db.QuestionsChoices.Where(x => x.Id == id).FirstOrDefault();

            Mapper.CreateMap<QuestionsChoices, QuestionsChoicesViewModel>();
            QuestionChoicesViewModel = Mapper.Map<QuestionsChoices, QuestionsChoicesViewModel>(GetQuestionChoices);

            return QuestionChoicesViewModel;



        }
        // PUT: api/QuestionChoices/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutQuestionChoicesViewModel(int id, QuestionsChoicesViewModel questionChoicesViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != questionChoicesViewModel.Id)
            {
                return BadRequest();
            }

            QuestionsChoices QuestionChoices = new QuestionsChoices();
            Mapper.CreateMap<QuestionsChoicesViewModel, QuestionsChoices>();
            QuestionChoices = Mapper.Map<QuestionsChoicesViewModel, QuestionsChoices>(questionChoicesViewModel);
            db.Entry(QuestionChoices).State = EntityState.Modified;
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuestionChoicesExists(id))
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

        // POST: api/QuestionChoices
        [ResponseType(typeof(QuestionsChoicesViewModel))]
        public IHttpActionResult PostQuestionChoicesViewModel(QuestionsChoicesViewModel questionChoicesViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            QuestionsChoices QuestionChoices = new QuestionsChoices();
            Mapper.CreateMap<QuestionsChoicesViewModel, QuestionsChoices>();
            QuestionChoices = Mapper.Map<QuestionsChoicesViewModel, QuestionsChoices>(questionChoicesViewModel);

            db.QuestionsChoices.Add(QuestionChoices); db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = questionChoicesViewModel.Id }, questionChoicesViewModel);
        }

        // DELETE: api/QuestionChoices/5
        [ResponseType(typeof(QuestionsChoicesViewModel))]
        public IHttpActionResult DeleteQuestionChoices(int id)
        {
            var questionChoices = db.QuestionsChoices.Find(id);
            if (questionChoices == null)
            {
                return NotFound();
            }

            db.QuestionsChoices.Remove(questionChoices);
            db.SaveChanges();

            return Ok(questionChoices);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool QuestionChoicesExists(int id)
        {
            return db.QuestionsChoices.Count(e => e.Id == id) > 0;
        }
    }
}