using AutoMapper;
using BookmarkManager.Business.Abstract.DataAccess;
using BookmarkManager.Business.Abstract.Services;
using BookmarkManager.Business.Infrastructure;
using BookmarkManager.Business.Infrastructure.DataAccess;
using BookmarkManager.Business.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace BookmarkManager.Business.Config
{
    public class DIConfiguration
    {
        public static void Initialize(IServiceCollection services, IConfiguration configuration)
        {
            #region AutoMapper Configuration
            IMapper mapper = AutoMapperInitializer.Mapper;
            services.AddSingleton(mapper);
            #endregion

            #region Instance Variable Mapping
            services.AddSingleton(configuration);
            AppSettingsInitializer.Initialize(configuration);
            services.AddDbContext<BookmarkDbContext>();
            services.AddScoped<IBookmarkRepository, BookmarkRepository>();
            services.AddScoped<IBookmarkService, BookmarkService>();
            #endregion
        }
    }
}
