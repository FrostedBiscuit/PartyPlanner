using PartyPlanner.Core.Dtos;
using PartyPlanner.Core.Managers.Interfaces;
using PartyPlanner.Core.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PartyPlanner.Core.Managers
{
    public class PartyManager : IPartyManager
    {
        private IRepository<Party> _repository;

        public PartyManager(IRepository<Party> repository)
        {
            _repository = repository;
        }

        public Task<Guid> CreateNewPartyAsync()
        {
            return CreateNewPartyAsync("");
        }

        public async Task<Guid> CreateNewPartyAsync(string name)
        {
            var party = new Party();
            party.Info.Name = name;

            await _repository.InsertAsync(party);

            return party.Id;
        }

        public Task<List<Party>> GetAllAsync()
        {
            return _repository.GetAllAsync();
        }

        public Task<Party> GetPartyByIdAsync(Guid id)
        {
            return _repository.GetByIdAsync(id);
        }
    }
}
