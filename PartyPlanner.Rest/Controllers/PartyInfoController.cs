using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PartyPlanner.Core.Dtos;
using PartyPlanner.Core.Dtos.Views;
using PartyPlanner.Core.Managers.Interfaces;

namespace PartyPlanner.Rest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PartyInfoController : ControllerBase
    {
        private readonly IPartyInfoManager _manager;

        public PartyInfoController(IPartyInfoManager manager)
        {
            _manager = manager;
        }

        [HttpGet("{partyId}")]
        public async Task<IActionResult> GetById(Guid partyId)
        {
            var info = await _manager.GetById(partyId);

            if (info == null)
                return NotFound();

            return Ok(info);
        }

        [HttpPost("{partyId}")]
        public async Task<IActionResult> Set(Guid partyId, PartyInfo partyInfo)
        {
            var success = await _manager.Set(new PartyInfoView
                                                {
                                                    Id = partyId,
                                                    Info = partyInfo
                                                });

            if (success)
                return Ok();

            return BadRequest();
        }
    }
}
