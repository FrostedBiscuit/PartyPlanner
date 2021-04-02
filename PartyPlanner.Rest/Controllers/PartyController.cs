using Microsoft.AspNetCore.Mvc;
using PartyPlanner.Core.Dtos;
using PartyPlanner.Core.Managers.Interfaces;
using System;
using System.Threading.Tasks;

namespace PartyPlanner.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PartyController : ControllerBase
    {
        private IPartyManager _manager;

        public PartyController(IPartyManager manager)
        {
            _manager = manager;
        }

        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var parties = await _manager.GetAllAsync();

            if (parties == null)
                return NotFound();

            return Ok(parties);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetByIdAsync(Guid id)
        {
            var party = await _manager.GetPartyByIdAsync(id);

            if (party == null)
                return NotFound();

            return Ok(party);
        }

        [HttpPost]
        public async Task<Party> CreateNewPartyAsync([FromQuery]string name)
        {
            return await _manager.CreateNewPartyAsync(name);
        }
    }
}
