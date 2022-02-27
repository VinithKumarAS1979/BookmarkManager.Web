using Microsoft.Extensions.Configuration;

namespace BookmarkManager.Business.Config
{
    public static class AppSettings
    {
        public static string DbFileLocationAndName { get; set; }
    }

    public static class AppSettingsInitializer
    {
        public static void Initialize(IConfiguration configuration)
        {
            AppSettings.DbFileLocationAndName = configuration.GetConnectionString("DBFileLocationAndName");
        }
    }
}
