using MongoDB.Bson.Serialization.Attributes;
using System;

namespace PartyPlanner.Core.Dtos
{
    [BsonIgnoreExtraElements]
    public class PartyInfo
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        public string ExactDirections { get; set; }
        public DateTime? DateFrom { get; set; }
        public DateTime? DateTo { get; set; }
        public float? Budget { get; set; }

        public void Update(PartyInfo info)
        {
            Name = info.Name != null ? info.Name : Name;
            Description = info.Description != null ? info.Description : Description;
            Address = info.Address != null ? info.Address : Address;
            ExactDirections = info.ExactDirections != null ? info.ExactDirections : ExactDirections;

            DateFrom = info.DateFrom.HasValue ? info.DateFrom : DateFrom;
            DateTo = info.DateTo.HasValue ? info.DateTo : DateTo;
            Budget = info.Budget.HasValue ? info.Budget : Budget;
        }
    }    
}
