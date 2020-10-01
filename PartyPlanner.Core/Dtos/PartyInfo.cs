using MongoDB.Bson.Serialization.Attributes;
using System;

namespace PartyPlanner.Core.Dtos
{
    [BsonIgnoreExtraElements]
    public class PartyInfo
    {    
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime PartyDate { get; set; }
        public float Budget { get; set; }
    }    
}
