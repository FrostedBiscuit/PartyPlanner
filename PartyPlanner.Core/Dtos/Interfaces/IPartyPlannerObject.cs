using System;
using MongoDB.Bson.Serialization.Attributes;

namespace PartyPlanner.Core.Dtos.Interfaces
{
    public interface IPartyPlannerObject
    {
        [BsonId]
        Guid Id { get; set; }
    }
}
