using MongoDB.Bson.Serialization.Attributes;

namespace PartyPlanner.Core.Dtos
{
    [BsonIgnoreExtraElements]
    public class Category
    {
        public int CategoryId { get; set; }
    
        public string Name { get; set; }
        public string Description { get; set; }
        public float BudgetPercentage { get; set; }
        public float ProposedTotal { get; set; }
        public Item[] Items { get; set; }
    }
}
