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

        public DbSet<JobSeekerReport> JobSeekersReports { get; set;}

        public DbSet<CompanyReport> CompanyReports { get; set; }

        public DbSet<FeedBackReport> FeedBackReports { get; set; }

        public DbSet<CompanyAccount> CompanyAccounts { get; set; }

        public DbSet<CompanyPassword> CompanyPasswords { get; set;}

        public DbSet<JobSeekerAccount> JobSeekersAccounts { get; set;}

        public DbSet<JobSeekerPassword> JobSeekersPasswords { get; set;}

        public DbSet<PostedJob> PostedJobs { get; set; }

        public DbSet<PostNewJob> PostNewJobs { get; set; }

        public DbSet<Contact>Contacts { get; set; }



        


    }
}
