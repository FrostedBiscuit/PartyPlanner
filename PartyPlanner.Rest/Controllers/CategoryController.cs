using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PartyPlanner.Core.Dtos;
using PartyPlanner.Core.Helpers;
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
        public async Task<IActionResult> GetAllByPartyIdAsync(Guid partyId, [FromQuery] bool sendItems = true)
        {
            var categories = await _manager.GetAll(partyId);

            if (categories == null)
                return NotFound();

            if (!sendItems)
                categories.RemoveItemsFromCategoryCollection();
            
            return Ok(categories);
        }

        [HttpGet("{partyId}/{categoryId}")]
        public async Task<IActionResult> GetByCateoryIdAsync(Guid partyId, int categoryId, [FromQuery] bool sendItems = true)
        {
            var result = await _manager.Get(partyId, categoryId);

            if (result == null)
                return NotFound();

            if (!sendItems)
                result.RemoveItemsFromCategory();

            return Ok(result);
        }

        [HttpPost("{partyId}")]
        public async Task<IActionResult> Update(Guid partyId, [FromBody] Category category)
        {
            var success = await _manager.Update(partyId, category);

            if (success)
                return Ok();

            return BadRequest();
        }

        [HttpPut("{partyId}")]
        public async Task<IActionResult> Insert(Guid partyId, [FromBody] Category category)
        {
            var result = await _manager.Insert(partyId, category);

            if (result != null)
                return Ok(result);

            return BadRequest();
        }

        [HttpDelete("{partyId}/{categoryId}")]
        public async Task<IActionResult> Remove(Guid partyId, int categoryId)
        {
            var result = await _manager.Remove(partyId, categoryId);

            if (result)
                return Ok();

            return BadRequest();
        }
    }
}
