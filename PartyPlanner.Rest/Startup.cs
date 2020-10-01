using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using MongoDB.Driver;
using PartyPlanner.Core.Constants;
using PartyPlanner.Core.Dtos;
using PartyPlanner.Core.Dtos.Views;
using PartyPlanner.Core.Managers;
using PartyPlanner.Core.Managers.Interfaces;
using PartyPlanner.Core.Repositories;
using PartyPlanner.Core.Repositories.Interfaces;

namespace PartyPlanner
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        private IMongoClient _client;
        private IMongoDatabase _database;

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            PartyPlannerConsts.Init();

            _client = new MongoClient(PartyPlannerConsts.DBConnectionString);
            _database = _client.GetDatabase(PartyPlannerConsts.PartyPlannerDatabaseName);

            services.AddSingleton<IRepository<Party>, Repository<Party>>(sp => new Repository<Party>(_database.GetCollection<Party>(PartyPlannerConsts.PartyCollectionName)));
            services.AddSingleton<IRepository<PartyInfoView>, Repository<PartyInfoView>>(sp => new Repository<PartyInfoView>(_database.GetCollection<PartyInfoView>(PartyPlannerConsts.PartyCollectionName)));
            services.AddSingleton<IRepository<CategoryCollection>, Repository<CategoryCollection>>(sp => new Repository<CategoryCollection>(_database.GetCollection<CategoryCollection>(PartyPlannerConsts.PartyCollectionName)));
            services.AddSingleton<IRepository<GuestList>, Repository<GuestList>>(sp => new Repository<GuestList>(_database.GetCollection<GuestList>(PartyPlannerConsts.PartyCollectionName)));

            services.AddScoped<IPartyManager, PartyManager>();
            services.AddScoped<ICategoryManager, CategoryManager>();

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
