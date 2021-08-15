using PartyPlanner.Core.Dtos;
using PartyPlanner.Core.Dtos.Views;
using System;
using System.Threading.Tasks;

namespace PartyPlanner.Core.Managers.Interfaces
{
    public interface IGuestManager
    {
        Task<GuestList> GetAll(Guid partyId);
        Task<Guest> Get(Guid partyId, int guestId);
        Task<bool> SetGuest(Guid partyId, int guestId, Guest guest);
        Task<bool> SetGuests(Guid partyId, Guest[] guests);
        Task<Guest> Insert(Guid partyId, Guest guest);
        Task<bool> Remove(Guid partyId, int guestId);
    }
}
