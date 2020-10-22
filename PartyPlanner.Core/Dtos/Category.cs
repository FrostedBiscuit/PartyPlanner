using MongoDB.Bson.Serialization.Attributes;

namespace PartyPlanner.Core.Dtos
{
    [BsonIgnoreExtraElements]
    public class Category
    {
        public int CategoryId { get; set; }
    
        public string Name { get; set; }
        public string Description { get; set; }
        public float? BudgetPercentage { get; set; }
        public float? ProposedTotal { get; set; }
        public Item[] Items { get; set; }

        public void Update(Category c)
        {
            Name = c.Name == null ? Name : c.Name;
            Description = c.Description == null ? Description : c.Description;

            BudgetPercentage = c.BudgetPercentage.HasValue ? c.BudgetPercentage : BudgetPercentage;
            ProposedTotal = c.ProposedTotal.HasValue ? c.ProposedTotal : ProposedTotal;

            Items = c.Items != null ? c.Items : Items;
        }
    }
}
