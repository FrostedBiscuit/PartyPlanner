using System.Linq;
using System.Threading.Tasks;
using PartyPlanner.Core.Managers.Interfaces;
using PartyPlanner.Core.Repositories.Interfaces;

namespace PartyPlanner.Core.Managers
{
    public class ApiKeyManager : IApiKeyManager
    {
        private readonly IApiKeyRepository _repository;
        
        public ApiKeyManager(IApiKeyRepository repository)
        {
            _repository = repository;
        }

        public async Task<bool> IsApiKeyValid(string key)
        {
            // Maybe cache this? Seems kinda inefficient to
            // retrieve the entire set of keys every request...
            var apiKeys = await _repository.GetAllApiKeysAsync();

            return apiKeys.Select(k => k.Key).Contains(key);
        }
    }
}