using PartyPlanner.Core.Dtos;
using PartyPlanner.Core.Dtos.Views;
using PartyPlanner.Core.Helpers;
using PartyPlanner.Core.Managers.Interfaces;
using PartyPlanner.Core.Repositories.Interfaces;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace PartyPlanner.Core.Managers
{
    public class CategoryManager : ICategoryManager
    {
        private IPartyRepository _repository;

        public CategoryManager(IPartyRepository repository)
        {
            _repository = repository;
        }

        public async Task<Category> Get(Guid partyId, int categoryId)
        {
            var collection = await _repository.GetByIdAsync(partyId);

            return collection.Categories.SingleOrDefault(c => c.CategoryId == categoryId);
        }

        public async Task<CategoryCollection> GetAll(Guid partyId)
        {
            var party = await _repository.GetByIdAsync(partyId);

            return party.ToCategoryCollection();
        }

        public async Task<bool> Insert(Guid partyId, Category category)
        {
            var party = await _repository.GetByIdAsync(partyId);

            if (party == null)
                return false;
            
            var categories = party.Categories ?? new Category[0];

            Array.Resize(ref categories, categories.Length + 1);
            
            category.CategoryId = categories.Length;

            categories[categories.Length - 1] = category;

            party.Categories = categories;

            await _repository.UpdateAsync(party);

            return true;
        }

        public async Task<bool> Remove(Guid partyId, int categoryId)
        {
            var party = await _repository.GetByIdAsync(partyId);
            var categories = party.Categories;

            if (!categories.Any(c => c.CategoryId == categoryId))
                return false;

            var newCategories = from c in categories
                                where c.CategoryId != categoryId
                                select c;

            party.Categories = newCategories.ToArray();
            await _repository.UpdateAsync(party);

            return true;
        }

        public async Task<bool> Update(Guid partyId, Category category)
        {
            var party = await _repository.GetByIdAsync(partyId);

            if (!party.Categories.Contains(category))
                return false;

            party.Categories[category.CategoryId].Update(category);

            await _repository.UpdateAsync(party);

            return true;
        }
    }
}
