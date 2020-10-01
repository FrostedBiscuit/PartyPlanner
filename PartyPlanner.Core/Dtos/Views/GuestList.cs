using MongoDB.Bson.Serialization.Attributes;
using PartyPlanner.Core.Dtos.Interfaces;
using System;

namespace PartyPlanner.Core.Dtos.Views
{
    [BsonIgnoreExtraElements]
    public class GuestList : IPartyPlannerObject
    {
        [BsonId]
        public Guid Id { get; set; }

        public Guest[] Guests { get; set; }
    }
}
