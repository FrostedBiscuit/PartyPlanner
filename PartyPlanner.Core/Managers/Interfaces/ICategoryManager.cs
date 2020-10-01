﻿using PartyPlanner.Core.Dtos;
using PartyPlanner.Core.Dtos.Views;
using System;
using System.Threading.Tasks;

namespace PartyPlanner.Core.Managers.Interfaces
{
    public interface ICategoryManager
    {
        Task<CategoryCollection> GetAll(Guid partyId);
        Task<Category> Get(Guid partyId, int categoryId);
        Task Set(Guid partyId, Category category);
        Task Insert(Guid partyId, Category category);
        Task<bool> Remove(Guid partyId, int categoryId);
    }
}
