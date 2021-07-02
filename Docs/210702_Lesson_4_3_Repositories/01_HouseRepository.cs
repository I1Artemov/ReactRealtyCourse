using Microsoft.EntityFrameworkCore;
using ReactRealtyCourse.Business.Models;
using System;
using System.Linq;

namespace ReactRealtyCourse.DAL.Repositories
{
    public class HouseRepository : IDisposable
    {
        private DbContext _context;
        private DbSet<House> _dbSet;
        private bool disposed;

        public HouseRepository(DbContext context)
        {
            _context = context;
            _dbSet = context.Set<House>();
        }

        public void Add(House item)
        {
            _dbSet.Add(item);
        }

        public void Delete(House item)
        {
            _dbSet.Remove(item);
        }

        public House Get(int id)
        {
            return _dbSet.Find(id);
        }

        public IQueryable<House> GetAll()
        {
            return _dbSet;
        }
        public House GetWithoutTracking(Func<House, bool> condition)
        {
            return _dbSet.AsNoTracking().FirstOrDefault(condition);
        }

        public IQueryable<House> GetAllWithoutTracking()
        {
            return _dbSet.AsNoTracking();
        }

        public void Update(House item)
        {
            _context.Entry(item).State = EntityState.Modified;
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
