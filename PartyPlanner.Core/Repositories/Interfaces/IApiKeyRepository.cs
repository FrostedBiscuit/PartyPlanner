using System.Collections.Generic;
using System.Threading.Tasks;
using PartyPlanner.Core.Dtos.Infrastructure;

namespace PartyPlanner.Core.Repositories.Interfaces
{
    public interface IApiKeyRepository
    {
        Task<List<ApiKey>> GetAllApiKeysAsync();
    }
}