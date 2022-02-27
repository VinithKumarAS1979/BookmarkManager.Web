using BookmarkManager.Business.Abstract.DataAccess;
using BookmarkManager.Business.Entities;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace BookmarkManager.BusinessTests
{
    [TestClass()]
    public class BookmarkRepositoryTests : TestConfigurationBase
    {
        private IBookmarkRepository _bookmarkRepository;

        [TestInitialize()]
        public void MyInitialize()
        {
            _bookmarkRepository = GetService<IBookmarkRepository>();
        }

        [TestCleanup]
        public void MyCleanUp()
        {
            _bookmarkRepository = null;
        }

        [TestMethod()]
        public void GetAllTest()
        {
            var result = _bookmarkRepository.GetAll();
            Assert.IsTrue(result != null && result.Count > 0);
        }

        [TestMethod()]
        public void AddTest()
        {
            BookmarkEntity newData = new BookmarkEntity() { Description = "Test Description2", CreatedOn = DateTime.Now, IsActive = true, IsDeleted = false, Title = "Test Title2" };
            var result = _bookmarkRepository.Add(newData);
            Assert.IsTrue(result != null && result.Status);
        }

        [TestMethod()]
        public void UpdateTest()
        {
            BookmarkEntity newData = new BookmarkEntity() { Description = "Test Description2 - Updated", CreatedOn = DateTime.Now, Id = 2, IsActive = true, IsDeleted = false, Title = "Test Title2 - Updated", UpdatedOn = DateTime.Now };
            var result = _bookmarkRepository.Update(newData);
            Assert.IsTrue(result != null && result.Status);
        }

        [TestMethod()]
        public void DeleteTest()
        {
            //BookmarkEntity newData = new BookmarkEntity() { Description = "Test Description2 - Updated", CreatedOn = DateTime.Now, Id = 3, IsActive = true, IsDeleted = false, Title = "Test Title2 - Updated", UpdatedOn = DateTime.Now };
            BookmarkEntity newData = null;
            var result = _bookmarkRepository.Delete(newData);
            Assert.IsTrue(result != null && result.Status);
        }
    }
}