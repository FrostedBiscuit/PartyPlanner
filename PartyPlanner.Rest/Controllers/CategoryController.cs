using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PartyPlanner.Core.Dtos;
using PartyPlanner.Core.Dtos.Views;
using PartyPlanner.Core.Managers.Interfaces;

namespace PartyPlanner.Rest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private ICategoryManager _manager;

        public CategoryController(ICategoryManager manager)
        {
            _manager = manager;
        }

        [HttpGet("{partyId}")]
        public async Task<CategoryCollection> GetAllByPartyIdAsync(Guid partyId)
        {
            return await _manager.GetAll(partyId);
        }

        [HttpGet("{partyId}/{categoryId}")]
        public async Task<Category> GetByCateoryIdAsync(Guid partyId, int categoryId)
        {
            return await _manager.Get(partyId, categoryId);
        }

        [HttpPost("{partyId}")]
        public async Task Set(Guid partyId, [FromBody] Category category)
        {
            await _manager.Set(partyId, category);
        }

        [HttpPut("{partyId}")]
        public async Task Insert(Guid partyId, [FromBody] Category category)
        {
            await _manager.Insert(partyId, category);
        }

        [HttpDelete("{partyId}/{categoryId}")]
        public async Task<IActionResult> Remove(Guid partyId, int categoryId)
        {
            var result = await _manager.Remove(partyId, categoryId);

            if (result)
                return Ok();

            return NotFound();
        }
    }
}
