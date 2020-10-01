using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using MongoDB.Driver;
using PartyPlanner.Core.Dtos.Interfaces;
using PartyPlanner.Core.Repositories.Interfaces;

namespace PartyPlanner.Core.Repositories
{
    public class Repository<TType> : IRepository<TType> where TType : IPartyPlannerObject
    {
        private IMongoCollection<TType> _collection;
        
        public Repository(IMongoCollection<TType> collection)
        {
            _collection = collection;
        }

        public Task<List<TType>> GetAllAsync()
        {
            return _collection.Find(x => true).ToListAsync();
        }

        public Task<TType> GetByIdAsync(Guid id)
        {
            return _collection.Find(x => x.Id == id).SingleAsync();
        }

        public Task InsertAsync(TType item)
        {
            return _collection.InsertOneAsync(item);
        }

        public Task RemoveAsync(Guid id)
        {
            return _collection.FindOneAndDeleteAsync(x => x.Id == id);
        }

        public Task UpdateAsync(TType item)
        {
            return _collection.ReplaceOneAsync(x => x.Id == item.Id, item, options: new ReplaceOptions { IsUpsert = true });
        }
    }
}
