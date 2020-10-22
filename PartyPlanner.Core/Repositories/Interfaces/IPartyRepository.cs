using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using PartyPlanner.Core.Dtos;

namespace PartyPlanner.Core.Repositories.Interfaces
{
    public interface IPartyRepository
    {
        Task<List<Party>> GetAllAsync();
        Task<Party> GetByIdAsync(Guid id);
        Task InsertAsync(Party item);
        Task UpdateAsync(Party item);
        Task RemoveAsync(Guid id);
    }
}
