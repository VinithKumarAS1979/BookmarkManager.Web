using BookmarkManager.Business.Abstract.DataAccess;
using BookmarkManager.Business.Dto;
using BookmarkManager.Business.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BookmarkManager.Business.Infrastructure.DataAccess
{
    public class BookmarkRepository : IBookmarkRepository
    {
        private readonly BookmarkDbContext _bookmarkDbContext;

        public BookmarkRepository(BookmarkDbContext bookmarkDbContext)
        {
            _bookmarkDbContext = bookmarkDbContext;
        }

        public List<BookmarkEntity> GetAll()
        {
            _bookmarkDbContext.Database.EnsureCreated();
            return _bookmarkDbContext.Bookmarks.Where(x => x.IsDeleted == false).ToList();
        }

        public ApiResponseModel Add(BookmarkEntity data)
        {
            ApiResponseModel result = new ApiResponseModel() { Status = true, Message = "Success", Exception = null };
            var transaction = _bookmarkDbContext.Database.BeginTransaction();
            try
            {
                _bookmarkDbContext.Bookmarks.Add(data);
                _bookmarkDbContext.SaveChanges();
                transaction.Commit();
            }
            catch (Exception ex)
            {
                result.Status = false;
                result.Message = ex.Message;
                result.Exception = ex;
            }
            return result;
        }

        public ApiResponseModel Update(BookmarkEntity data)
        {
            ApiResponseModel result = new ApiResponseModel() { Status = true, Message = "Success", Exception = null };
            var transaction = _bookmarkDbContext.Database.BeginTransaction();
            try
            {
                //_bookmarkDbContext.Entry<BookmarkEntity>(data).State = EntityState.Modified;
                _bookmarkDbContext.Bookmarks.Update(data).State = EntityState.Modified;
                _bookmarkDbContext.Entry<BookmarkEntity>(data).Property("CreatedOn").IsModified = false;
                _bookmarkDbContext.SaveChanges();
                transaction.Commit();
            }
            catch (Exception ex)
            {
                result.Status = false;
                result.Message = ex.Message;
                result.Exception = ex;
            }
            return result;
        }

        public ApiResponseModel Delete(BookmarkEntity data)
        {
            ApiResponseModel result = new ApiResponseModel() { Status = true, Message = "Success", Exception = null };
            var transaction = _bookmarkDbContext.Database.BeginTransaction();
            try
            {
                data.UpdatedOn = DateTime.Now;
                _bookmarkDbContext.Bookmarks.Update(data).State = EntityState.Modified;
                _bookmarkDbContext.Entry<BookmarkEntity>(data).Property("CreatedOn").IsModified = false;
                _bookmarkDbContext.SaveChanges();
                transaction.Commit();
            }
            catch (Exception ex)
            {
                result.Status = false;
                result.Message = ex.Message;
                result.Exception = ex;
            }
            return result;
        }
    }
}
