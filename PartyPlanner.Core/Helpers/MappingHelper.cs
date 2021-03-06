﻿using PartyPlanner.Core.Dtos;
using PartyPlanner.Core.Dtos.Views;
using System;
using System.Linq;

namespace PartyPlanner.Core.Helpers
{
    public static class MappingHelper
    {
        public static CategoryCollection ToCategoryCollection(this Party party)
        {
            if (party == null)
            {
                return null;
            }

            return new CategoryCollection
            {
                Id = party.Id,
                Categories = party.Categories
            };
        }

        public static GuestList ToGuestList(this Party party)
        {
            return new GuestList
            {
                Id = party.Id,
                Guests = party.Guests
            };
        }

        public static PartyInfoView ToPartyInfo(this Party party)
        {
            return new PartyInfoView
            {
                Id = party.Id,
                Info = party.Info
            };
        }
    }
}
