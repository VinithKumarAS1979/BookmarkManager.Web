using BookmarkManager.Business.Dto;
using System.Collections.Generic;

namespace BookmarkManager.Business.Abstract.Services
{
    public interface IBookmarkService
    {
        ApiResponseModel Add(BookmarkViewModel data);
        ApiResponseModel Delete(int id);
        List<BookmarkViewModel> GetAll();
        ApiResponseModel Update(BookmarkViewModel data);
    }
}
