using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;

namespace JobPortalDemo.Data.Repository
{
    public class PostedJobRepository : IPostedJob
    {
        private readonly ApplicationDbContext _context;

        public PostedJobRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public bool AddPostedJob(PostedJob postedjob)
        {
            try
            {
                _context.PostedJobs.Add(postedjob);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public bool DeletePostedJob(int Id)
        {
            try
            {
                var postedjob = _context.PostedJobs.Find(Id);
                _context.PostedJobs.Remove(postedjob);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public List<PostedJob> GetAllPostedJobs()
        {
            try
            {
                return _context.PostedJobs.ToList();
            }
            catch (Exception)
            {

                return null;
            }
        }

        public PostedJob GetPostedJobById(int Id)
        {
            try
            {
                return _context.PostedJobs.Find(Id);

            }
            catch (Exception)
            {

                return null;
            }
        }

        public bool UpdatePostedJob(PostedJob postedjob)
        {
            try
            {
                _context.PostedJobs.Update(postedjob);
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
