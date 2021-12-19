
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
        private const string PARTY_ID_RAW = "00000000-0000-0000-0000-000000000006"; 
        private Mock<IPartyRepository> _mockPartyRepo;
        private Guid _partyId = Guid.Parse(PARTY_ID_RAW);

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

        [Test]
        public async Task GuestManager_Insert_Positive()
        {
            // Arrange
            var newGuest = new Guest
            {
                Name = "Mock guest 4"
            };
            var manager = new GuestManager(_mockPartyRepo.Object);

            // Act
            var result = await manager.Insert(_partyId, newGuest);

            // Assert
            Assert.NotNull(result);
            Assert.AreEqual(3, result.GuestId);
        }

        [Test]
        [TestCase(PARTY_ID_RAW, null)]
        [TestCase(null, "test")]
        public async Task GuestManager_Insert_Negative(string partyIdStr, string guestName)
        {
            // Arrange
            var partyId = string.IsNullOrEmpty(partyIdStr) ? Guid.NewGuid() : Guid.Parse(partyIdStr) ;
            var guest = string.IsNullOrEmpty(guestName) ? null : new Guest { Name = guestName };
            var manager = new GuestManager(_mockPartyRepo.Object);

            // Act
            var result = await manager.Insert(partyId, guest);

            // Assert
            Assert.IsNull(result);
        }

        [Test]
        [TestCase(0)]
        [TestCase(1)]
        [TestCase(2)]
        public async Task GuestManager_Get_Positive(int guestId)
        {
            // Arrange
            var manager = new GuestManager(_mockPartyRepo.Object);

            // Act
            var result = await manager.Get(_partyId, guestId);

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(guestId, result.GuestId);
        }

        [Test]
        public async Task GuestManager_Get_Negative()
        {
            // Arrange
            var manager = new GuestManager(_mockPartyRepo.Object);

            // Act
            var result = await manager.Get(Guid.NewGuid(), 4);

            // Assert
            Assert.IsNull(result);
        }

        [Test]
        public async Task GuestManager_Remove_Positive()
        {
            // Arrange
            var manager = new GuestManager(_mockPartyRepo.Object);

            // Act
            var result = await manager.Remove(_partyId, 0);

            // Assert
            Assert.IsTrue(result);
        }

        [Test]
        [TestCase(PARTY_ID_RAW, 5)]
        [TestCase(null, 1)]
        public async Task GuestManager_Remove_Negative(string partyIdStr, int guestId)
        {
            // Arrange
            var partyId = string.IsNullOrEmpty(partyIdStr) ? Guid.NewGuid() : Guid.Parse(partyIdStr);
            var manager = new GuestManager(_mockPartyRepo.Object);

            // Act
            var result = await manager.Remove(partyId, guestId);

            // Assert
            Assert.IsFalse(result);
        }
    }
}