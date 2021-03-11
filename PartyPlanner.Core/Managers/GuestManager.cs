using PartyPlanner.Core.Dtos;
using PartyPlanner.Core.Dtos.Views;
using PartyPlanner.Core.Helpers;
using PartyPlanner.Core.Managers.Interfaces;
using PartyPlanner.Core.Repositories.Interfaces;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace PartyPlanner.Core.Managers
{
    public class GuestManager : IGuestManager
    {
        private readonly IPartyRepository _repository;

        public GuestManager(IPartyRepository repository)
        {
            _repository = repository;
        }

        public async Task<Guest> Get(Guid partyId, int guestId)
        {
            var party = await _repository.GetByIdAsync(partyId);

            return party.Guests.SingleOrDefault(g => g.GuestId == guestId);
        }

        public async Task<GuestList> GetAll(Guid partyId)
        {
            var party = await _repository.GetByIdAsync(partyId);

            return party.ToGuestList();
        }

        public async Task<Guest> Insert(Guid partyId, Guest guest)
        {
            var party = await _repository.GetByIdAsync(partyId);

            if (party == null)
                return null;

            var guests = party.Guests;

            Array.Resize(ref guests, guests.Length + 1);

            guest.GuestId = guests.Length;

            guests[guests.Length - 1] = guest;

            party.Guests = guests;

            await _repository.UpdateAsync(party);

            return guest;
        }

        public async Task<bool> Remove(Guid partyId, int guestId)
        {
            var party = await _repository.GetByIdAsync(partyId);

            if (!party.Guests.Any(g => g.GuestId == guestId))
                return false;

            var newGuests = from g in party.Guests
                            where g.GuestId != guestId
                            select g;

            party.Guests = newGuests.ToArray();

            await _repository.UpdateAsync(party);

            return true;
        }

        public async Task<bool> SetGuest(Guid partyId, Guest guest)
        {
            var party = await _repository.GetByIdAsync(partyId);

            if (!party.Guests.Any(g => g.GuestId == guest.GuestId))
                return false;

            party.Guests[guest.GuestId].Update(guest);

            await _repository.UpdateAsync(party);

            return true;
        }
    }
}
