using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;

namespace JobPortalDemo.Data.Repository
{
    public class JobSeekerAccountRepository : IJobSeekerAccount
    {
        private readonly ApplicationDbContext _context;

        public JobSeekerAccountRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public bool AddJobSeekerAccount(JobSeekerAccount jobseekeraccount)
        {
            try
            {
               _context.JobSeekersAccounts.Add(jobseekeraccount);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public bool DeleteJobSeekerAccount(int Id)
        {
            try
            {
                var jobseekeraccount = _context.JobSeekersAccounts.Find(Id);
                _context.JobSeekersAccounts.Remove(jobseekeraccount);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public List<JobSeekerAccount> GetAllJobSeekersAccounts()
        {
            try
            {
                return _context.JobSeekersAccounts.ToList();

            }
            catch (Exception)
            {

                return null;
            }
        }

        public JobSeekerAccount GetJobSeekerAccountById(int Id)
        {
            try
            {
                return _context.JobSeekersAccounts.Find(Id);

            }
            catch (Exception)
            {

                return null;
            }
        }

       

        public bool UpdateJobSeekerAccount(JobSeekerAccount jobSeekerAccount)
        {
            try
            {
                _context.JobSeekersAccounts.Update(jobSeekerAccount);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false ;
            }
        }
    }
}
