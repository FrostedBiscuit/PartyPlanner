using MongoDB.Bson.Serialization.Attributes;

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
        public bool? Vegan { get; set; }
        public bool? Vegetarian { get; set; }
        public bool? NonDrinker { get; set; }

        public void Update(Guest g)
        {
            Name = g.Name != null ? g.Name : Name;
            Surname = g.Surname != null ? g.Surname : Surname;
            Email = g.Email != null ? g.Email : Email;
            Phone = g.Phone != null ? g.Phone : Phone;

            Vegan = g.Vegan.HasValue ? g.Vegan : Vegan;
            Vegetarian = g.Vegetarian.HasValue ? g.Vegetarian : Vegetarian;
            NonDrinker = g.NonDrinker.HasValue ? g.NonDrinker : NonDrinker;
        }
    }
}
