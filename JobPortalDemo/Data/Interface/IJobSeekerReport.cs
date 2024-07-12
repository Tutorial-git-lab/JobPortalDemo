using JobPortalDemo.Data.Module;

namespace JobPortalDemo.Data.Interface
{
    public interface IJobSeekerReport
    {
        bool AddJobSeekerReport(JobSeekerReport jobseekerreport);

        bool UpdateJobSeekerReport(JobSeekerReport jobSeekerReport);

        bool DeleteJobSeekerReport(int Id);

        List<JobSeekerReport> GetAllJobSeekers();

        JobSeekerReport GetJobSeekerReportById(int Id);

    }
}
