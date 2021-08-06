using System.Threading.Tasks;

namespace PartyPlanner.Core.Managers.Interfaces
{
    public interface IApiKeyManager
    {
        Task<bool> IsApiKeyValid(string key);
    }
}