using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PartyPlanner.Core.Repositories.Interfaces
{
    public interface IRepository<TType>
    {
        Task<List<TType>> GetAllAsync();
        Task<TType> GetByIdAsync(Guid id);
        Task InsertAsync(TType item);
        Task UpdateAsync(TType item);
        Task RemoveAsync(Guid id);
    }
}
