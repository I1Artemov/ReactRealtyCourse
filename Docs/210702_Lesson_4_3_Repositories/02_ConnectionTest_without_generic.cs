using Microsoft.EntityFrameworkCore;
using ReactRealtyCourse.Business.Models;
using ReactRealtyCourse.DAL.Contexts;
using ReactRealtyCourse.DAL.Repositories;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace ReactRealtyCourse.Tests.DbConnection
{
    public class ConnectionTest
    {
        [Fact]
        public void HousesToClosestSubway_InDb_Test()
        {
            using (var realtyContext = getDbContext())
            {
                var connStr = realtyContext.Database.GetConnectionString();
                House foundHouse = realtyContext.Houses.Find(1);
                Assert.NotNull(foundHouse);
            }
        }

        [Fact]
        public void GetEntities_WithRepository_Test()
        {
            using (var realtyContext = getDbContext())
            using (HouseRepository houseRepo = new HouseRepository(realtyContext))
            {
                List<House> someHouses = houseRepo.GetAllWithoutTracking()
                    .OrderBy(x => x.BuildYear)
                    .Take(5)
                    .ToList();

                Assert.NotEmpty(someHouses);
            }
        }

        private ReactRealtyContext getDbContext()
        {
            string connectionString = @"Data Source=.\MSSQL14LOCAL;Database=ReactRealtyCourse;Trusted_Connection=True;";
            DbContextOptionsBuilder<ReactRealtyContext> optionsBuilder = new DbContextOptionsBuilder<ReactRealtyContext>();
            optionsBuilder.UseSqlServer(connectionString);

            return new ReactRealtyContext(optionsBuilder.Options);
        }
    }
}
