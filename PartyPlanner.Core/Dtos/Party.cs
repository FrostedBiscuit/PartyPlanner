using MongoDB.Bson.Serialization.Attributes;
using PartyPlanner.Core.Dtos.Interfaces;
using System;

namespace PartyPlanner.Core.Dtos
{
    [BsonIgnoreExtraElements]
    public class Party : IPartyPlannerObject
    {
        [BsonId]
        public Guid Id { get; set; }
        public DateTime CreationDate { get; set; }

        public PartyInfo Info { get; set; }
        public Category[] Categories { get; set; }
        public Guest[] Guests { get; set; }

        public Party()
        {
            CreationDate = DateTime.UtcNow;
            Info = new PartyInfo();
            Categories = new Category[0];
            Guests = new Guest[0];
        }
    }
}
