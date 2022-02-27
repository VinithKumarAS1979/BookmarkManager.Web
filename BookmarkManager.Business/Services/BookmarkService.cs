using AutoMapper;
using BookmarkManager.Business.Abstract.DataAccess;
using BookmarkManager.Business.Abstract.Services;
using BookmarkManager.Business.Dto;
using BookmarkManager.Business.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BookmarkManager.Business.Services
{
    public class BookmarkService : IBookmarkService
    {
        private readonly IBookmarkRepository _bookmarkRepository;
        private readonly IMapper _mapper;

        public BookmarkService(IBookmarkRepository bookmarkRepository, IMapper mapper)
        {
            _bookmarkRepository = bookmarkRepository;
            _mapper = mapper;
        }

        public List<BookmarkViewModel> GetAll()
        {
            var data = _bookmarkRepository.GetAll().Where(x => x.IsDeleted == false).ToList();
            return _mapper.Map<List<BookmarkViewModel>>(data);
        }

        public ApiResponseModel Add(BookmarkViewModel data)
        {
            var entity = _mapper.Map<BookmarkEntity>(data);
            return _bookmarkRepository.Add(entity);
        }

        public ApiResponseModel Update(BookmarkViewModel data)
        {
            var entity = _mapper.Map<BookmarkEntity>(data);
            entity.UpdatedOn = DateTime.Now;
            return _bookmarkRepository.Update(entity);
        }

        public ApiResponseModel Delete(int id)
        {
            var data = _bookmarkRepository.GetAll().Where(x => x.IsDeleted == false && x.Id == id).FirstOrDefault();
            if (data == null)
                return new ApiResponseModel { Exception = null, Message = "Bookmark Id is not valid", Status = false };
            return _bookmarkRepository.Delete(data);
        }
    }
}
