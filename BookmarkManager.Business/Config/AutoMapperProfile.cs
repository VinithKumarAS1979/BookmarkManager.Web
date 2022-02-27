using AutoMapper;
using BookmarkManager.Business.Dto;
using BookmarkManager.Business.Entities;

namespace BookmarkManager.Business.Config
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            SourceMemberNamingConvention = new LowerUnderscoreNamingConvention();
            DestinationMemberNamingConvention = new PascalCaseNamingConvention();
            ConfigureBookmarkMappingModels();
        }

        #region Private Methods

        #region Bookmark Model Mapping
        private void ConfigureBookmarkMappingModels()
        {
            CreateMap<BookmarkEntity, BookmarkViewModel>()
                .ForMember(x => x.CreatedOn, x => x.MapFrom(y => y.CreatedOn))
                .ForMember(x => x.Description, x => x.MapFrom(y => y.Description))
                .ForMember(x => x.Id, x => x.MapFrom(y => y.Id))
                .ForMember(x => x.IsActive, x => x.MapFrom(y => y.IsActive))
                .ForMember(x => x.Title, x => x.MapFrom(y => y.Title))
                .ForMember(x => x.UpdatedOn, x => x.MapFrom(y => y.UpdatedOn))
                .ForMember(x => x.IsDeleted, x => x.MapFrom(y => y.IsDeleted))
                .ReverseMap()
                ;
        }
        #endregion

        #endregion
    }
}
