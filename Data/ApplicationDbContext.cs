using Microsoft.EntityFrameworkCore;
using EffortSheet.Models;

namespace EffortSheet.Data
{
    public class ApplicationDbContext : DbContext{
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options)
        {
            
        }

        public DbSet<EffortModel> EffortTracker{get; set;}
    }

}