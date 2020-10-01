using PartyPlanner.Core.Dtos;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PartyPlanner.Core.Managers.Interfaces
{
    public interface IPartyManager
    {
        Task<Guid> CreateNewPartyAsync();
        Task<Guid> CreateNewPartyAsync(string name);
        Task<List<Party>> GetAllAsync();
        Task<Party> GetPartyByIdAsync(Guid id);
    }
}
