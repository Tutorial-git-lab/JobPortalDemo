using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;

namespace JobPortalDemo.Data.Repository
{
    public class PostNewJobRepository : IPostNewJob
    {
        private readonly ApplicationDbContext _context;

        public PostNewJobRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public bool AddPostNewJob(PostNewJob postnewjob)
        {
            try
            {
                _context.PostNewJobs.Add(postnewjob);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public bool DeletePostNewJob(int Id)
        {
            try
            {
                var postnewjob = _context.PostNewJobs.Find(Id);
                _context.PostNewJobs.Remove(postnewjob);
                _context.SaveChanges();
                return true;    
            }
            catch (Exception)
            {

                return false;
            }
        }

        public List<PostNewJob> GetAllPostNewJobs()
        {
            try
            {
                return _context.PostNewJobs.ToList();

            }
            catch (Exception)
            {

                return null;
            }
        }

        public PostNewJob GetPostNewJobById(int Id)
        {
            try
            {
                return _context.PostNewJobs.Find(Id);

            }
            catch (Exception)
            {

                return null;
            }
        }

        

        public bool UpdatePostNewJob(PostNewJob postnewjob)
        {
            try
            {
                _context.PostNewJobs.Update(postnewjob);
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
