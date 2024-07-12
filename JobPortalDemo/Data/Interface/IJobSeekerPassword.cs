using JobPortalDemo.Data.Module;

namespace JobPortalDemo.Data.Interface
{
    public interface IJobSeekerPassword
    {
        bool AddJobSeekerPassword(JobSeekerPassword jobseekerpassword);

        bool UpdateJobSeekerPassword(JobSeekerPassword jobseekerpassword);

        bool DeleteJobSeekerPassword(int Id);

        List<JobSeekerPassword> GetAllJobSeekerPassword();

        JobSeekerPassword GetJobSeekerPasswordById(int Id);

    }
}
