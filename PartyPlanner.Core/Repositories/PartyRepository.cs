using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using MongoDB.Driver;
using PartyPlanner.Core.Repositories.Interfaces;
using PartyPlanner.Core.Dtos;
using PartyPlanner.Core.Constants;

namespace PartyPlanner.Core.Repositories
{
    public class PartyRepository : IPartyRepository
    {
        private IMongoCollection<Party> _collection;
        
        public PartyRepository(IMongoDatabase database)
        {
            _collection = database.GetCollection<Party>(PartyPlannerConsts.PartyCollectionName);
        }

        public Task<List<Party>> GetAllAsync()
        {
            return _collection.Find(x => true).ToListAsync();
        }

        public async Task<Party> GetByIdAsync(Guid id)
        {
            var result = _collection.Find(x => x.Id == id);

            if (await result.CountDocumentsAsync() == 0)
            {
                return null;
            }

            return await result.SingleAsync();
        }

        public Task InsertAsync(Party party)
        {
            return _collection.InsertOneAsync(party);
        }

        public Task RemoveAsync(Guid id)
        {
            return _collection.FindOneAndDeleteAsync(x => x.Id == id);
        }

        public Task UpdateAsync(Party item)
        {
            return _collection.ReplaceOneAsync(x => x.Id == item.Id, item, options: new ReplaceOptions { IsUpsert = true });
        }
    }
}
