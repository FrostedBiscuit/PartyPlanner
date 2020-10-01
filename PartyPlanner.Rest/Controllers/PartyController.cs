using Microsoft.AspNetCore.Mvc;
using PartyPlanner.Core.Dtos;
using PartyPlanner.Core.Managers.Interfaces;
using System;
using System.Collections.Generic;
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
        public async Task<List<Party>> GetAsync()
        {
            return await _manager.GetAllAsync();
        }

        [HttpGet("{id}")]
        public async Task<Party> GetByIdAsync(Guid id)
        {
            return await _manager.GetPartyByIdAsync(id);
        }

        [HttpPut]
        public async Task<Guid> CreateNewPartyAsync([FromQuery]string name)
        {
            return await _manager.CreateNewPartyAsync(name);
        }
    }
}
