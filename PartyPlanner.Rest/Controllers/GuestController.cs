using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PartyPlanner.Core.Dtos;
using PartyPlanner.Core.Managers.Interfaces;

namespace PartyPlanner.Rest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GuestController : ControllerBase
    {
        private readonly IGuestManager _manager;

        public GuestController(IGuestManager manager)
        {
            _manager = manager;
        }

        [HttpGet("{partyId}")]
        public async Task<IActionResult> GetAllAsync(Guid partyId)
        {
            var guests = await _manager.GetAll(partyId);

            if (guests == null)
                return NotFound();

            return Ok(guests);
        }

        [HttpGet("{partyId}/{guestId}")]
        public async Task<IActionResult> GetByGuestIdAsync(Guid partyId, int guestId)
        {
            var guest = await _manager.Get(partyId, guestId);

            if (guest == null)
                return NotFound();

            return Ok(guest);
        }

        [HttpPost("{partyId}")]
        public async Task<IActionResult> Update(Guid partyId, [FromBody] Guest guest)
        {
            var success = await _manager.SetGuest(partyId, guest);

            if (success)
                return Ok();

            return BadRequest();
        }

        [HttpPut("{partyId}")]
        public async Task<IActionResult> Insert(Guid partyId, [FromBody] Guest guest)
        {
            var result = await _manager.Insert(partyId, guest);

            if (result != null)
                return Ok(result);

            return BadRequest();
        }

        [HttpDelete("{partyId}/{guestId}")]
        public async Task<IActionResult> Remove(Guid partyId, int guestId)
        {
            var success = await _manager.Remove(partyId, guestId);

            if (success)
                return Ok();

            return BadRequest();
        }
    }
}
