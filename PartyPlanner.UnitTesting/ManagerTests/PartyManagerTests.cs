using Moq;
using NUnit.Framework;
using PartyPlanner.Core.Dtos;
using PartyPlanner.Core.Managers;
using PartyPlanner.Core.Repositories.Interfaces;
using System.Threading.Tasks;

namespace PartyPlanner.UnitTesting.ManagerTests
{
    public class PartyManagerTests
    {
        [Test]
        public async Task PartyManager_CreateNewParty()
        {
            // Arrange
            var repo = new Mock<IPartyRepository>();
            repo.Setup(r => r.InsertAsync(It.IsAny<Party>())).Returns(() => Task.CompletedTask);
            var manager = new PartyManager(repo.Object);

            // Act
            var result = await manager.CreateNewPartyAsync();

            // Assert
            Assert.NotNull(result);
            Assert.NotNull(result.Id);
        }

        [TestCase("Test party")]
        [TestCase("Bryan's 21st birthday")]
        [TestCase("420")]
        [TestCase("Xcluziv raw3")]
        public async Task PartyManager_CreateNewPartyWithName(string name)
        {
            // Arrange
            var repo = new Mock<IPartyRepository>();
            repo.Setup(r => r.InsertAsync(It.IsAny<Party>())).Returns(Task.CompletedTask);
            var manager = new PartyManager(repo.Object);
            var expected = new Party
            {
                Info = new PartyInfo
                {
                    Name = name
                }
            };

            // Act
            var result = await manager.CreateNewPartyAsync(name);

            // Assert
            Assert.NotNull(result);
            Assert.NotNull(result.Id);
            Assert.AreEqual(expected.Info.Name, result.Info.Name);
        }
    }
} 