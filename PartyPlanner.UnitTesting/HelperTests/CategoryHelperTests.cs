using NUnit.Framework;
using PartyPlanner.Core.Dtos;
using PartyPlanner.Core.Dtos.Views;
using PartyPlanner.Core.Helpers;
using System;
using System.Collections.Generic;
using System.Text;

namespace PartyPlanner.UnitTesting.HelperTests
{
    public class CategoryHelperTests
    {
        [Test]
        public void CategoryHelper_RemoveItemsFromCategory()
        {
            // Arrange
            var categoryId = 1;
            var categoryName = "Test category";
            var categoryDescription = "Test description";
            var budgetPercentage = 40;
            var proposedTotal = 100;
            var subject = new Category
            {
                CategoryId = categoryId,
                Name = categoryName,
                Description = categoryDescription,
                BudgetPercentage = budgetPercentage,
                ProposedTotal = proposedTotal,
                Items = new[]
                {
                    new Item
                    {
                        ItemId = 1,
                        Name = "test item 1"
                    },
                    new Item
                    {
                        ItemId = 2,
                        Name = "test item 2"
                    },
                    new Item
                    {
                        ItemId = 3,
                        Name = "test item 3"
                    },
                }
            };

            // Act
            subject.RemoveItemsFromCategory();

            // Assert
            Assert.IsNull(subject.Items);

            Assert.IsTrue(subject.CategoryId == categoryId);
            Assert.IsTrue(subject.Name == categoryName);
            Assert.IsTrue(subject.Description == categoryDescription);
            Assert.IsTrue(subject.BudgetPercentage == budgetPercentage);
            Assert.IsTrue(subject.ProposedTotal == proposedTotal);
        }

        [Test]
        public void CategoryHelper_RemoveItemsFromCategoryCollection()
        {
            // Arrange
            var partyId = new Guid();
            var categoryId = 1;
            var categoryName = "Test category";
            var categoryDescription = "Test description";
            var budgetPercentage = 40;
            var proposedTotal = 100;
            var category = new Category
            {
                CategoryId = categoryId,
                Name = categoryName,
                Description = categoryDescription,
                BudgetPercentage = budgetPercentage,
                ProposedTotal = proposedTotal,
                Items = new[]
                {
                    new Item
                    {
                        ItemId = 1,
                        Name = "test item 1"
                    },
                    new Item
                    {
                        ItemId = 2,
                        Name = "test item 2"
                    },
                    new Item
                    {
                        ItemId = 3,
                        Name = "test item 3"
                    },
                }
            };
            var subject = new CategoryCollection
            {
                Id = partyId,
                Categories = new[] { category }
            };

            // Act
            subject.RemoveItemsFromCategoryCollection();

            // Assert
            Assert.AreEqual(partyId, subject.Id);

            Assert.IsTrue(subject.Categories.Length > 0);

            foreach (var c in subject.Categories)
            {
                Assert.IsNull(c.Items);
            }        
        }
    }
}
