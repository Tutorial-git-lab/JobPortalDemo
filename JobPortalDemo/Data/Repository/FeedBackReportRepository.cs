using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;

namespace JobPortalDemo.Data.Repository
{
    public class FeedBackReportRepository : IFeedBackReport
    {
        private readonly ApplicationDbContext _context;

        public FeedBackReportRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public bool AddFeedBackrReport(FeedBackReport feedbackreport)
        {
            try
            {
                _context.FeedBackReports.Add(feedbackreport);
                _context.SaveChanges(); 
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public bool DeleteFeedBackrReport(int Id)
        {
            try
            {
                var feedbackreport = _context.FeedBackReports.Find(Id);
                _context.FeedBackReports.Remove(feedbackreport);
                _context.SaveChanges();
                 return true;

            
            }
            catch (Exception)
            {

                return false;
            }
        }

        public List<FeedBackReport> GetAllFeedBackReports()
        {
            try
            {
                return _context.FeedBackReports.ToList();
            }
            catch (Exception)
            {

                return null;
            }
        }

        public FeedBackReport GetFeedBackReportById(int Id)
        {
            try
            {
                return _context.FeedBackReports.Find(Id);

            }
            catch (Exception)
            {

                return null;
            }
        }

        public bool UpdateFeedBackReport(FeedBackReport feedbackreport)
        {
            try
            {
                _context.FeedBackReports.Update(feedbackreport);
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
