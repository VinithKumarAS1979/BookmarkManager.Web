using AutoMapper;

namespace BookmarkManager.Business.Config
{
    public class AutoMapperInitializer
    {
        private static IMapper _mapper = null;

        public static IMapper Mapper
        {
            get
            {
                if (_mapper == null)
                {
                    var mapperConfiguration = new MapperConfiguration(mc =>
                    {
                        mc.AddProfile<AutoMapperProfile>();
                    });
                    _mapper = mapperConfiguration.CreateMapper();
                }
                return _mapper;
            }
        }
    }
}
