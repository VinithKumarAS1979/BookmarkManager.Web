using System;

namespace BookmarkManager.Business.Dto
{
    public class ApiResponseModel
    {
        public bool Status { get; set; }
        public string Message { get; set; }
        public Exception Exception { get; set; }
    }
}
