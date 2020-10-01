using MongoDB.Bson.Serialization.Attributes;
using PartyPlanner.Core.Dtos.Interfaces;

namespace PartyPlanner.Core.Dtos
{
    [BsonIgnoreExtraElements]
    public class Item
    {
        public int ItemId { get; set; }
    
        public string Name { get; set; }
        public string Description { get; set; }
        public float Price { get; set; }
        public int Quantity { get; set; }
    }   
}
