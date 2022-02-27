using BookmarkManager.Business.Config;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace BookmarkManager.BusinessTests
{
    public class TestConfigurationBase
    {
        IServiceCollection service = null;
        IServiceProvider serviceProvider = null;
        IConfiguration configuration = null;

        public TestConfigurationBase()
        {
            service = new ServiceCollection();
            configuration = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables()
                .Build();
            DIConfiguration.Initialize(service, configuration);
            serviceProvider = service.BuildServiceProvider();
        }

        public T GetService<T>()
        {
            return serviceProvider.GetService<T>();
        }
    }
}
