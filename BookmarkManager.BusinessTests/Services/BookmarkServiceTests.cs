using BookmarkManager.Business.Abstract.Services;
using BookmarkManager.Business.Dto;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace BookmarkManager.BusinessTests
{
    [TestClass()]
    public class BookmarkServiceTests : TestConfigurationBase
    {
        private IBookmarkService _bookmarkService;

        [TestInitialize()]
        public void MyInitialize()
        {
            _bookmarkService = GetService<IBookmarkService>();
        }

        [TestCleanup]
        public void MyCleanUp()
        {
            _bookmarkService = null;
        }


        [TestMethod()]
        public void AddTest()
        {
            //BookmarkViewModel newData = new() { Description = "Test Add Using Service", CreatedOn = DateTime.Now, IsActive = true, IsDeleted = false, Title = "Test Add Title Using Service" };
            BookmarkViewModel newData = new() { Description = "Test Add Using Service - A", CreatedOn = DateTime.Now, IsActive = true, IsDeleted = false, Title = "Test Add Title Using Service - A" };
            var result = _bookmarkService.Add(newData);
            Assert.IsTrue(result != null && result.Status);
        }

        [TestMethod()]
        public void UpdateTest()
        {
            BookmarkViewModel newData = new() { Description = "Test Add Using Service - AM", CreatedOn = DateTime.Now, Id = 4, IsActive = true, IsDeleted = false, Title = "Test Add Title Using Service - AM" };
            var result = _bookmarkService.Update(newData);
            Assert.IsTrue(result != null && result.Status);
        }

        [TestMethod()]
        public void DeleteTest()
        {
            int idToDelete = 5;
            var result = _bookmarkService.Delete(idToDelete);
            Assert.IsTrue(result != null && result.Status);
        }

    }
}