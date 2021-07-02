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
            using (EFGenericRepo<House, ReactRealtyContext> houseRepo = new EFGenericRepo<House, ReactRealtyContext>(realtyContext))
            using (EFGenericRepo<Apartment, ReactRealtyContext> flatRepo = new EFGenericRepo<Apartment, ReactRealtyContext>(realtyContext))
            {
                List<House> someHouses = houseRepo.GetAllWithoutTracking()
                    .OrderBy(x => x.BuildYear)
                    .Take(5)
                    .ToList();

                Apartment someApartment = flatRepo.Get(3);

                Assert.NotEmpty(someHouses);
                Assert.NotNull(someApartment);
            }
        }

        [Fact]
        public void AddEntities_WithRepository_Test()
        {
            using (var realtyContext = getDbContext())
            using (EFGenericRepo<House, ReactRealtyContext> houseRepo = new EFGenericRepo<House, ReactRealtyContext>(realtyContext))
            {
                House houseForAddition = new House { Address = "New address", BuildYear = 2021, MaxFloor = 26, WallMaterial = "concrete mix" };
                houseRepo.Add(houseForAddition);
                houseRepo.Save();

                House foundHouse = houseRepo.GetAll()
                    .FirstOrDefault(x => x.Address.Contains("New"));

                Assert.NotNull(foundHouse);
                Assert.True(foundHouse.Id > 0);

                houseRepo.Delete(foundHouse);
                houseRepo.Save();
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
