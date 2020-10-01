using MongoDB.Bson.Serialization.Attributes;
using PartyPlanner.Core.Dtos.Interfaces;
using System;

namespace PartyPlanner.Core.Dtos.Views
{
    [BsonIgnoreExtraElements]
    public class CategoryCollection : IPartyPlannerObject
    {
        [BsonId]
        public Guid Id { get; set; }
    
        public Category[] Categories { get; set; }
    }
}
