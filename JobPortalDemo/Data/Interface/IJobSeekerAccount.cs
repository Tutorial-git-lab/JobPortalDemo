using JobPortalDemo.Data.Module;

namespace JobPortalDemo.Data.Interface
{
    public interface IJobSeekerAccount
    {
        bool AddJobSeekerAccount(JobSeekerAccount jobseekeraccount);

        bool UpdateJobSeekerAccount(JobSeekerAccount jobSeekerAccount);

        bool DeleteJobSeekerAccount(int Id);

        List<JobSeekerAccount> GetAllJobSeekersAccounts();

        JobSeekerAccount GetJobSeekerAccountById(int Id);
    }
}
