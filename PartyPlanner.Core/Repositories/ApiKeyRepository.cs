using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;
using PartyPlanner.Core.Constants;
using PartyPlanner.Core.Dtos.Infrastructure;
using PartyPlanner.Core.Repositories.Interfaces;

namespace PartyPlanner.Core.Repositories
{
    public class ApiKeyRepository : IApiKeyRepository
    {
        private IMongoCollection<ApiKey> _collection;

        public ApiKeyRepository(IMongoDatabase database)
        {
            _collection = database.GetCollection<ApiKey>(PartyPlannerConsts.ApiKeyCollectionName);
        }

        public Task<List<ApiKey>> GetAllApiKeysAsync()
        {
            return _collection.Find(x => true).ToListAsync();
        }
    }
}