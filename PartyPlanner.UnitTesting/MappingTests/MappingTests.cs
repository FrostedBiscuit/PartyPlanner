using NUnit.Framework;
using PartyPlanner.Core.Dtos;
using PartyPlanner.Core.Dtos.Views;
using PartyPlanner.Core.Helpers;
using System;
using System.Collections.Generic;
using System.Text;

namespace PartyPlanner.UnitTesting.MappingTests
{
    [TestFixture]
    public class MappingTests
    {
        [Test]
        public void MappingHelper_ConvertPartyToCategoryCollection()
        {
            // Arrange
            var partyId = new Guid();
            var expected = new CategoryCollection
            {
                Id = partyId,
                Categories = new[]
                {
                    new Category
                    {
                        CategoryId = 0,
                        Name = "Test category",
                        Description = "Lorem ipsum",
                        Items = new[]
                        {
                            new Item
                            {
                                ItemId = 0,
                                Name = "Test item",
                                Description = "Lorem ipsum",
                                Price = 10,
                                Quantity = 1
                            }
                        },
                        BudgetPercentage = 100,
                        ProposedTotal = 100
                    }
                }
            };
            var subject = new Party
            {
                Id = partyId,
                Categories = expected.Categories,
                Info = new PartyInfo
                {
                    Name = "Test party",
                    Description = "Lorem ipsum",
                    Budget = 100,
                    DateFrom = DateTime.Now
                },
                CreationDate = DateTime.Today
            };

            // Act
            var result = subject.ToCategoryCollection();

            // Assert
            Assert.AreEqual(expected.Id, result.Id);
            Assert.AreEqual(expected.Categories, result.Categories);
        }

        [Test]
        public void MappingHelper_ConvertPartyToGuestList()
        {
            // Arrange
            var partyId = new Guid();
            var expected = new GuestList
            {
                Id = partyId,
                Guests = new[]
                {
                    new Guest
                    {
                        GuestId = 0,
                        Name = "Test Guest",
                        Email = "test@email.org"
                    }
                }
            };
            var subject = new Party
            {
                Id = partyId,
                Guests = expected.Guests,
                CreationDate = DateTime.Now
            };

            // Act
            var result = subject.ToGuestList();

            // Assert
            Assert.AreEqual(expected.Id, result.Id);
            Assert.AreEqual(expected.Guests, result.Guests);
        }

        [Test]
        public void MappingHelper_ConvertPartyToPartyInfo()
        {
            // Arrange
            var partyId = new Guid();
            var expected = new PartyInfoView()
            {
                Id = partyId,
                Info = new PartyInfo
                {

                    Name = "Test party",
                    Description = "Lorem ipsum",
                    Budget = 100,
                    DateFrom = DateTime.Now
                }
            };
            var subject = new Party
            {
                Id = partyId,
                Info = expected.Info,
                CreationDate = DateTime.Today
            };

            // Act
            var result = subject.ToPartyInfo();

            // Assert
            Assert.AreEqual(expected.Id, result.Id);
            Assert.AreEqual(expected.Info, result.Info);
        }
    }
}
