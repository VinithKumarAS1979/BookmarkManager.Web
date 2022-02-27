using BookmarkManager.Business.Dto;
using BookmarkManager.Business.Entities;
using System.Collections.Generic;

namespace BookmarkManager.Business.Abstract.DataAccess
{
    public interface IBookmarkRepository
    {
        ApiResponseModel Add(BookmarkEntity data);
        ApiResponseModel Delete(BookmarkEntity data);
        List<BookmarkEntity> GetAll();
        ApiResponseModel Update(BookmarkEntity data);
    }
}
