using JobPortalDemo.Data.Module;

namespace JobPortalDemo.Data.Interface
{
    public interface IPostNewJob
    {
        bool AddPostNewJob(PostNewJob postnewjob);

        bool UpdatePostNewJob(PostNewJob postnewjob);

        bool DeletePostNewJob(int Id);

        List<PostNewJob> GetAllPostNewJobs();

        PostNewJob GetPostNewJobById(int Id);
    }
}
