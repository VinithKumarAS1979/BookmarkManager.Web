using BookmarkManager.Business.Entities;
using Microsoft.EntityFrameworkCore;
using System;

namespace BookmarkManager.Business.Infrastructure
{
    public class BookmarkDbContext : DbContext
    {
        public string DbPath { get; }
        public DbSet<Bookmark> Bookmarks { get; set; }
        public BookmarkDbContext()
        {
            var folder = Environment.SpecialFolder.LocalApplicationData;
            var path = Environment.GetFolderPath(folder);
            DbPath = System.IO.Path.Join(path, "bookmark.db");
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options) => options.UseSqlite($"Data Source={ DbPath }");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Bookmark>(e =>
            {
                e.Property(p => p.CreatedOn).HasDefaultValueSql("CURRENT_TIMESTAMP");
            });
            base.OnModelCreating(modelBuilder);
        }
    }
}
