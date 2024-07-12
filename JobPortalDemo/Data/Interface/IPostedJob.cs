using JobPortalDemo.Data.Module;

namespace JobPortalDemo.Data.Interface
{
    public interface IPostedJob
    {
        bool AddPostedJob(PostedJob postedjob);

        bool UpdatePostedJob(PostedJob postedjob);

        bool DeletePostedJob(int Id);

        List<PostedJob> GetAllPostedJobs();

        PostedJob GetPostedJobById(int Id);
    }
}
