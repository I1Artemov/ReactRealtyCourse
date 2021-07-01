using Microsoft.EntityFrameworkCore;
using ReactRealtyCourse.Business.Models;
using ReactRealtyCourse.DAL.Contexts;
using Xunit;

namespace ReactRealtyCourse.Tests.DbConnection
{
    public class ConnectionTest
    {
        [Fact]
        public void HousesToClosestSubway_InDb_Test()
        {
            string connectionString = @"Data Source=.\MSSQL14LOCAL;Database=ReactRealtyCourse;Trusted_Connection=True;";
            DbContextOptionsBuilder<ReactRealtyContext> optionsBuilder = new DbContextOptionsBuilder<ReactRealtyContext>();
            optionsBuilder.UseSqlServer(connectionString);

            using (var realtyContext = new ReactRealtyContext(optionsBuilder.Options))
            {
                var connStr = realtyContext.Database.GetConnectionString();
                House foundHouse = realtyContext.Houses.Find(1);
                Assert.NotNull(foundHouse);
            }
        }
    }
}
