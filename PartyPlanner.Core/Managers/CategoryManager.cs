using MongoDB.Driver.Core.Operations;
using PartyPlanner.Core.Dtos;
using PartyPlanner.Core.Dtos.Views;
using PartyPlanner.Core.Managers.Interfaces;
using PartyPlanner.Core.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PartyPlanner.Core.Managers
{
    public class CategoryManager : ICategoryManager
    {
        private IRepository<CategoryCollection> _repository;

        public CategoryManager(IRepository<CategoryCollection> repository)
        {
            _repository = repository;
        }

        public async Task<Category> Get(Guid partyId, int categoryId)
        {
            var collection = await _repository.GetByIdAsync(partyId);

            return collection.Categories.SingleOrDefault(c => c.CategoryId == categoryId);
        }

        public Task<CategoryCollection> GetAll(Guid partyId)
        {
            return _repository.GetByIdAsync(partyId);
        }

        public async Task Insert(Guid partyId, Category category)
        {
            var collection = await _repository.GetByIdAsync(partyId);
            var categories = collection.Categories;

            Array.Resize(ref categories, categories.Length + 1);
            
            category.CategoryId = categories.Length;

            categories[categories.Length - 1] = category;

            collection.Categories = categories;

            await _repository.UpdateAsync(collection);
        }

        public async Task<bool> Remove(Guid partyId, int categoryId)
        {
            var collection = await _repository.GetByIdAsync(partyId);
            var categories = collection.Categories;

            if (!categories.Select(c => c.CategoryId).Contains(categoryId))
                return false;

            var newCategories = from c in categories
                                where c.CategoryId != categoryId
                                select c;

            collection.Categories = newCategories.ToArray();
            await _repository.InsertAsync(collection);

            return true;
        }

        public Task Set(Guid partyId, Category category)
        {
            throw new NotImplementedException();
        }
    }
}
