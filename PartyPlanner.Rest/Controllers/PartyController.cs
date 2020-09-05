using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PartyPlanner.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PartyController : ControllerBase
    {
        [HttpGet]
        public object Get()
        {
            return new { HelloMessage = "Hello world" };
        }
    }

    public class TestResponse
    {
        public string HelloMessage { get; set; }
    }
}
