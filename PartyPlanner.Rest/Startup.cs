using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using MongoDB.Driver;
using PartyPlanner.Core.Constants;
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

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            PartyPlannerConsts.Init();

            _client = new MongoClient(PartyPlannerConsts.DBConnectionString);

            services.AddSingleton<IPartyRepository, PartyRepository>(sp => new PartyRepository(_client.GetDatabase(PartyPlannerConsts.PartyPlannerDatabaseName)));

            services.AddScoped<IPartyManager, PartyManager>();
            services.AddScoped<IPartyInfoManager, PartyInfoManager>();
            services.AddScoped<ICategoryManager, CategoryManager>();
            services.AddScoped<IGuestManager, GuestManager>();

            services.AddControllers();

            services.AddSwaggerGen(c => 
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "PartyPlanner API",
                    Description = "An API meant for easily planning parties.",
                    Contact = new OpenApiContact
                    {
                        Name = "FrostedBiscuit"
                    }
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();

            app.UseSwagger(c =>
            {
                c.RouteTemplate = "docs/{documentName}/swagger.json";
            });

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("v1/swagger.json", "PartyPlanner API");
                c.RoutePrefix = "docs";

                c.InjectStylesheet(@"/Docs/css/custom.css");
            });

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
