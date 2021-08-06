using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using PartyPlanner.Core.Managers.Interfaces;

namespace PartyPlanner.Rest.Middleware
{
    public class ApiKeyAuthentication
    {
        private readonly RequestDelegate _next;
        
        private readonly IApiKeyManager _apiKeyManager;

        // public ApiKeyAuthentication(RequestDelegate next)
        // {
        //     _next = next;
        // }

        public ApiKeyAuthentication(RequestDelegate next, IApiKeyManager apiKeyManager)
        {
            _next = next;
            
            _apiKeyManager = apiKeyManager;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            if (!context.Request.Headers.TryGetValue("ApiKey", out var apiKey))
            {
                context.Response.StatusCode = 401;
                await context.Response.WriteAsync("No API key provided!");

                return;
            }
            
            if (! await _apiKeyManager.IsApiKeyValid(apiKey))    
            {
                context.Response.StatusCode = 401;
                await context.Response.WriteAsync("No API key provided!");
            }
            
            await _next(context);
        }
    }
}