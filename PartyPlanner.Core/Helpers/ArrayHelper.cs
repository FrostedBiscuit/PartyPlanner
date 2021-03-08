using PartyPlanner.Core.Dtos;

namespace PartyPlanner.Core.Helpers
{
    public static class ArrayHelper
    {
        /// <summary>
        /// Finds the index of a certain Category in an array of categories.
        /// </summary>
        /// <returns>Index of Category if it is found or -1 if it doesn't exist.</returns>
        public static int IndexOfCategory(this Category[] categories, Category category)
        {
            var result = -1;

            for (int i = 0; i < categories.Length; i++)
            {
                if (categories[i].CategoryId == category.CategoryId)
                {
                    result = i;

                    break;
                }
            }

            return result;
        }
    }
}
