using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PartyPlanner.Core.Dtos.Infrastructure
{
    public class ApiKey
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public string Key { get; set; }
    }
}