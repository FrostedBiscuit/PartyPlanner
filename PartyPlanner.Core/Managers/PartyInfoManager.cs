using PartyPlanner.Core.Dtos;
using PartyPlanner.Core.Dtos.Views;
using PartyPlanner.Core.Managers.Interfaces;
using PartyPlanner.Core.Repositories.Interfaces;
using System;
using System.Threading.Tasks;

namespace PartyPlanner.Core.Managers
{
    public class PartyInfoManager : IPartyInfoManager
    {
        private IPartyRepository _repository;

        public PartyInfoManager(IPartyRepository repository)
        {
            _repository = repository;
        }

        public async Task<PartyInfo> GetById(Guid partyId)
        {
            var party = await _repository.GetByIdAsync(partyId);

            return party.Info;
        }

        public async Task<bool> Set(PartyInfoView info)
        {
            var party = await _repository.GetByIdAsync(info.Id);

            if (party == null)
                return false;

            party.Info.Update(info.Info);

            await _repository.UpdateAsync(party);

            return true;
        }
    }
}
