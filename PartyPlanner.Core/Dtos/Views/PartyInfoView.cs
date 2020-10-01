using MongoDB.Bson.Serialization.Attributes;
using PartyPlanner.Core.Dtos.Interfaces;
using System;

namespace PartyPlanner.Core.Dtos.Views
{
    [BsonIgnoreExtraElements]
    public class PartyInfoView : IPartyPlannerObject
    {
        [BsonId]
        public Guid Id { get; set; }

        public PartyInfo Info { get; set; }
    }
}
