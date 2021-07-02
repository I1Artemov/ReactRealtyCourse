using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace ReactRealtyCourse.DAL.Repositories
{
    public class EFGenericRepo<TEntity, TContext> : IDisposable
        where TEntity : class
        where TContext : DbContext
    {
        protected TContext _context;
        protected DbSet<TEntity> _dbSet;
        protected bool disposed = false;

        public EFGenericRepo(TContext context)
        {
            _context = context;
            _dbSet = context.Set<TEntity>();
        }

        public void Add(TEntity item)
        {
            _dbSet.Add(item);
        }

        public void Delete(TEntity item)
        {
            _dbSet.Remove(item);
        }

        public TEntity Get(int id)
        {
            return _dbSet.Find(id);
        }

        public TEntity GetWithoutTracking(Func<TEntity, bool> condition)
        {
            return _dbSet.AsNoTracking().FirstOrDefault(condition);
        }

        public IQueryable<TEntity> GetAll()
        {
            return _dbSet;
        }

        public IQueryable<TEntity> GetAllWithoutTracking()
        {
            return _dbSet.AsNoTracking();
        }

        public void Update(TEntity item)
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
