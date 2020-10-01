using MongoDB.Bson.Serialization.Attributes;
using PartyPlanner.Core.Dtos.Interfaces;
using System;

namespace PartyPlanner.Core.Dtos
{
    [BsonIgnoreExtraElements]
    public class Guest
    {
        public int GuestId { get; set; }
    
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public bool Vegan { get; set; }
        public bool Vegetarian { get; set; }
        public bool NonDrinker { get; set; }
    }
}
