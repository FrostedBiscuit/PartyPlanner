using MongoDB.Bson.Serialization.Attributes;
using System;

namespace PartyPlanner.Core.Dtos
{
    [BsonIgnoreExtraElements]
    public class PartyInfo
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime? PartyDate { get; set; }
        public float? Budget { get; set; }

        public void Update(PartyInfo info)
        {
            Name = info.Name != null ? info.Name : Name;
            Description = info.Description != null ? info.Description : Description;

            PartyDate = info.PartyDate.HasValue ? info.PartyDate : PartyDate;
            Budget = info.Budget.HasValue ? info.Budget : Budget;
        }
    }    
}
