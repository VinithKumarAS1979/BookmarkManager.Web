using BookmarkManager.Business.Abstract.Services;
using BookmarkManager.Business.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BookmarkManager.Web.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookmarkController : ControllerBase
    {
        private readonly IBookmarkService _bookmarkService;
        public BookmarkController(IBookmarkService bookmarkService)
        {
            _bookmarkService = bookmarkService;
        }

        // GET: api/<BookmarkController>
        [HttpGet]
        public List<BookmarkViewModel> Get()
        {
            return _bookmarkService.GetAll();
        }

        // GET api/<BookmarkController>/5
        [HttpGet("{id}")]
        public BookmarkViewModel Get(int id)
        {
            return _bookmarkService.GetAll().Where(x => x.Id == id).FirstOrDefault();
        }

        // POST api/<BookmarkController>
        [HttpPost]
        public ApiResponseModel Post(BookmarkViewModel data)
        {
            return _bookmarkService.Add(data);
        }

        // PUT api/<BookmarkController>/5
        //[HttpPut("{id}")]
        [HttpPut()]
        public ApiResponseModel Put(BookmarkViewModel data)
        {
            return _bookmarkService.Update(data);
        }

        // DELETE api/<BookmarkController>/5
        [HttpDelete("{id}")]
        public ApiResponseModel Delete(int id)
        {
            return _bookmarkService.Delete(id);
        }
    }
}
