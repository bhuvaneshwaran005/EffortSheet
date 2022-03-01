using Microsoft.EntityFrameworkCore;
using EffortSheet.Models;

namespace EffortSheet.Data
{
    public class ApplicationDbContext : DbContext{
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options)
        {
            
        }

        public DbSet<EffortModel> EffortTracker{get; set;}
        public DbSet<NameModel> NameList {get; set;}
        public DbSet<ActivityModel> ActivityList {get; set;}
        public DbSet<TeamModel> TeamList{get; set;}
        public DbSet<PriorityModel> PriorityList{get; set;}
    }

}