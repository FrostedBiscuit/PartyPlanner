using PartyPlanner.Core.Dtos;
using PartyPlanner.Core.Dtos.Views;

namespace PartyPlanner.Core.Helpers
{
    public static class CategoryHelper
    {
        public static void RemoveItemsFromCategoryCollection(this CategoryCollection collection)
        {
            if (collection.Categories.Length == 0)
                return;

            for (int i = 0; i < collection.Categories.Length; i++)
            {
                collection.Categories[i].RemoveItemsFromCategory();
            }
        }

        public static void RemoveItemsFromCategory(this Category category)
        {
            category.Items = null;
        }
    }
}
