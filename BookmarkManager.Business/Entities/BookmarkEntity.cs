using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookmarkManager.Business.Entities
{
    /// <summary>
    /// Bookmark Entity
    /// </summary>
    [Table("Bookmark")]
    public class BookmarkEntity
    {
        [Key]
        public int Id { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessage = "Title is required")]
        [MaxLength(150, ErrorMessage = "Title text length cannot exceed 150 characters")]
        public string Title { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessage = "Description is required")]
        [MaxLength(250, ErrorMessage = "Description cannot exceed 250 characters")]
        public string Description { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public DateTime CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public bool IsDeleted { get; set; }
    }
}
