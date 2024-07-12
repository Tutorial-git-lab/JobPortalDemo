using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;
using Microsoft.AspNetCore.Http.HttpResults;

namespace JobPortalDemo.Data.Repository
{
    public class JobSeekerPasswordRepository : IJobSeekerPassword
    {
        private readonly ApplicationDbContext _context;

        public JobSeekerPasswordRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public bool AddJobSeekerPassword(JobSeekerPassword jobseekerpassword)
        {
            try
            {
                _context.JobSeekersPasswords.Add(jobseekerpassword);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public bool DeleteJobSeekerPassword(int Id)
        {
            try
            {
                var jobseekerpassword = _context.JobSeekersPasswords.Find(Id);
                _context.JobSeekersPasswords.Remove(jobseekerpassword);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public List<JobSeekerPassword> GetAllJobSeekerPassword()
        {
            try
            {
                return _context.JobSeekersPasswords.ToList();
            }
            catch (Exception)
            {

                return null;
            }
        }

        public JobSeekerPassword GetJobSeekerPasswordById(int Id)
        {
            try
            {
                return _context.JobSeekersPasswords.Find(Id);
            }
            catch (Exception)
            {

                return null;
            }
        }

        public bool UpdateJobSeekerPassword(JobSeekerPassword jobseekerpassword)
        {
            try
            {
                _context.JobSeekersPasswords.Update(jobseekerpassword);
                _context.SaveChanges();
                return true;
                
            }
            catch (Exception)
            {

                return false;
            }
        }
    }
}
