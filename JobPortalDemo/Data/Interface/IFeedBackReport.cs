using JobPortalDemo.Data.Module;

namespace JobPortalDemo.Data.Interface
{
    public interface IFeedBackReport
    {
        bool AddFeedBackrReport(FeedBackReport feedbackreport);

        bool UpdateFeedBackReport(FeedBackReport feedbackreport);

        bool DeleteFeedBackrReport(int Id);

        List<FeedBackReport> GetAllFeedBackReports();

        FeedBackReport GetFeedBackReportById(int Id);
        
    }
}
