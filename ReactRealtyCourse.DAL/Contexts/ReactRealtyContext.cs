using Microsoft.EntityFrameworkCore;
using ReactRealtyCourse.Business.Models;

namespace ReactRealtyCourse.DAL.Contexts
{
    public class ReactRealtyContext : DbContext
    {
        public DbSet<House> Houses { get; set; }
        public DbSet<Apartment> Apartments { get; set; }

        public ReactRealtyContext(DbContextOptions<ReactRealtyContext> options) : base(options) { }

        public ReactRealtyContext() { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.RemovePluralizingTableNameConvention();
        }
    }
}
