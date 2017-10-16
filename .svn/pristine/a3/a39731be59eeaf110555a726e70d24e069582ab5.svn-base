
using ProfProPartage.Bll;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using Microsoft.AspNet.Identity;
using ProfProPartage.Model;
using ProfProPartage.Dto;
using System.Web.Mvc;
using System.Web.Http;

namespace AppProfProPartage.Controllers
{
    public class WebBookmarksController : ApiController
    {

        private BusinessLocator _businessLocator;

        public WebBookmarksController()
        {
            _businessLocator = ((BusinessLocator)System.Web.HttpContext.Current.Items["BusinessLocator"]);
        }

        // GET: api/WebBookmarks
        public IEnumerable<FicheCoursDto> Get()
        {
            List<FicheCoursDto> listBkmDto = new List<FicheCoursDto>();
            foreach (var bkm in _businessLocator.FicheCoursBll.GetAllFicheCours())
            {
                listBkmDto.Add(new FicheCoursDto());
            }
            return listBkmDto;
        }

        // GET: api/WebBookmarks/5
        [System.Web.Mvc.Authorize]
        [System.Web.Mvc.Route("BookmarkById")]
        public FicheCoursDto Get(int id)
        {
            FicheCours bkm = _businessLocator.FicheCoursBll.GetFicheCoursByCriteria(x => x.Id == id).FirstOrDefault();
            if (bkm != null)
            {
                FicheCoursDto bkmDto = new FicheCoursDto(bkm);
                return bkmDto;
            }
            return null;
        }

        // POST: api/WebBookmarks
        [System.Web.Mvc.Authorize(Roles = "admin")]
        public IHttpActionResult Post([FromBody]FicheCoursDtoInsert bkmDto)
        {
            if (ModelState.IsValid)
            {
                FicheCours bkm = new FicheCours();

                bkm.Id = bkmDto.Id;
                bkm.Description = bkmDto.Description;
                bkm.Titre = bkmDto.Title;
                bkm.UrlPDF = bkmDto.UrlPDF;
                bkm.UserId = User.Identity.GetUserId();
                bkm.Keywords = bkmDto.Keywords;

                _businessLocator.FicheCoursBll.AddFicheCours(bkm);
                //return new HttpResponseMessage(HttpStatusCode.OK);
                return Ok();
            }
            else
            {
                //return new HttpResponseMessage(HttpStatusCode.BadRequest);
                return BadRequest(ModelState);
            }
        }

        // PUT: api/WebBookmarks/5
        //public HttpResponseMessage Put([FromBody]BookmarkDtoUpdate bkmDto)
        [System.Web.Mvc.Authorize(Roles = "admin")]
        public IHttpActionResult Put([FromBody]FicheCoursDtoUpdate bkmDto)
        {
            if (ModelState.IsValid)
            {
                FicheCours bkm = new FicheCours();

                bkm.Id = bkmDto.Id;
                bkm.Description = bkmDto.Description;
                bkm.Titre = bkmDto.Title;
                bkm.UrlPDF = bkmDto.UrlPDF;
                bkm.UserId = User.Identity.GetUserId();
                bkm.Keywords = bkmDto.Keywords;

                _businessLocator.FicheCoursBll.UpdateFicheCours(bkm);

                //return new HttpResponseMessage(HttpStatusCode.OK);
                return Ok();
            }
            else
            {
                //return new HttpResponseMessage(HttpStatusCode.BadRequest);
                return BadRequest(ModelState);

            }
        }

        // DELETE: api/WebBookmarks/5
        public void Delete(int id)
        {
            _businessLocator.FicheCoursBll.DeleteFicheCours(id);
        }
    }
}
