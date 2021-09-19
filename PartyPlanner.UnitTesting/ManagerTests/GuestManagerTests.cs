
using Moq;
using NUnit.Framework;
using PartyPlanner.Core.Dtos;
using PartyPlanner.Core.Managers;
using PartyPlanner.Core.Repositories.Interfaces;
using System;
using System.Threading.Tasks;

namespace PartyPlanner.UnitTesting.ManagerTests
{
    public class GuestManagerTests
    {
        private Mock<IPartyRepository> _mockPartyRepo;
        private Guid _partyId = Guid.NewGuid();

        [SetUp]
        public void Setup()
        {
            _mockPartyRepo = new Mock<IPartyRepository>();
            _mockPartyRepo.Setup(r => r.GetByIdAsync(_partyId))
                .Returns(Task.FromResult<Party>(new Party 
                    {
                        Id = _partyId,
                        Guests = new Guest[]
                        {
                            new Guest
                            {
                                GuestId = 0,
                                Name = "Mock guest 1"
                            },
                            new Guest
                            {
                                GuestId = 1,
                                Name = "Mock guest 2"
                            },
                            new Guest
                            {
                                GuestId = 2,
                                Name = "Mock guest 3"
                            }
                        }
                    }));
        }

        [Test]
        public async Task GuestManager_GetAll_Positive()
        {
            // Arrange
            var manager = new GuestManager(_mockPartyRepo.Object);

            // Act
            var result = await manager.GetAll(_partyId);

            // Assert
            Assert.NotNull(result);
            Assert.NotNull(result.Guests);
            Assert.AreEqual(_partyId, result.Id);
            Assert.NotZero(result.Guests.Length);
        }

        [Test]
        public async Task GuestManager_GetAll_Negative()
        {
            // Arrange
            var manager = new GuestManager(_mockPartyRepo.Object);

            // Act
            var result = await manager.GetAll(new Guid());

            // Assert
            Assert.IsNull(result);
        }
    }
} 