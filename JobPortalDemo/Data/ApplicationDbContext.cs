using JobPortalDemo.Data.Module;
using Microsoft.EntityFrameworkCore;

namespace JobPortalDemo.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
            

        }
        public DbSet<User> Users { get; set; }

        public DbSet<Role> Roles { get; set; }

        public DbSet<UserRole> UserRoles { get; set; }

        public DbSet<RoleAssign> RoleAssigns { get; set; }

        


    }
}
