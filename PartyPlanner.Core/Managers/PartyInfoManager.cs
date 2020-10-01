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
        private IRepository<PartyInfoView> _repository;

        public PartyInfoManager(IRepository<PartyInfoView> repository)
        {
            _repository = repository;
        }

        public async Task<PartyInfo> GetById(Guid partyId)
        {
            var view = await _repository.GetByIdAsync(partyId);
            var result = new PartyInfo
            {
                Name = view.Info.Name,
                Description = view.Info.Description,
                Budget = view.Info.Budget,
                PartyDate = view.Info.PartyDate
            };

            return result;
        }

        public Task Set(PartyInfoView info)
        {
            return _repository.UpdateAsync(info);
        }
    }
}
