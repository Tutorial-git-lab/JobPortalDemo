using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;

namespace JobPortalDemo.Data.Repository
{
    public class JobSeekerReportRepository : IJobSeekerReport
    {
        private readonly ApplicationDbContext _context;

        public JobSeekerReportRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public bool AddJobSeekerReport(JobSeekerReport jobseekerreport)
        {
            try
            {
                _context.JobSeekersReports.Add(jobseekerreport);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public bool DeleteJobSeekerReport(int Id)
        {
            try
            {
                var jobseekerreport = _context.JobSeekersReports.Find(Id);
                _context.JobSeekersReports.Remove(jobseekerreport);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public List<JobSeekerReport> GetAllJobSeekers()
        {
            try
            {
                return _context.JobSeekersReports.ToList();
                
            }
            catch (Exception)
            {

                return null;
            }
        }

        public JobSeekerReport GetJobSeekerReportById(int Id)
        {
            try
            {
                return _context.JobSeekersReports.Find(Id);

            }
            catch (Exception)
            {

                return null;
            }
        }

        public bool UpdateJobSeekerReport(JobSeekerReport jobSeekerReport)
        {
            try
            {
                _context.JobSeekersReports.Update(jobSeekerReport);
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
