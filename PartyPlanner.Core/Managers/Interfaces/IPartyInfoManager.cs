using PartyPlanner.Core.Dtos;
using PartyPlanner.Core.Dtos.Views;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PartyPlanner.Core.Managers.Interfaces
{
    public interface IPartyInfoManager
    {
        Task<PartyInfo> GetById(Guid partyId);
        Task Set(PartyInfoView info);
    }
}
