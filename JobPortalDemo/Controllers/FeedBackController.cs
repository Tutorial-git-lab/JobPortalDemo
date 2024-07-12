using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobPortalDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedBackController : ControllerBase
    {
        private readonly IFeedBackReport _feedbackreport;

        public FeedBackController(IFeedBackReport feedbackreport)
        {
            _feedbackreport = feedbackreport;
        }

        [Route("GetAllFeedBackReport")]

        [HttpGet]

        public IActionResult GetAllFeedBackReports()
        {
            return Ok(_feedbackreport.GetAllFeedBackReports());
        }

        [Route("GetFeedBackReportById")]

        [HttpGet]

        public IActionResult GetFeedBackReportById(int Id)
        {
            return Ok(_feedbackreport.GetFeedBackReportById(Id));
        }

        [Route("AddFeedBackReport")]

        [HttpPost]

        public IActionResult AddFeedBackReport(FeedBackReport feedbackreport)
        {
            return Ok(_feedbackreport.AddFeedBackrReport(feedbackreport));
        }

        [Route("UpdateFeedBackReport")]

        [HttpPut]

        public IActionResult UpdateFeedBackReport(FeedBackReport feedbackreport)
        {
            return Ok(_feedbackreport.UpdateFeedBackReport(feedbackreport));
        }

        [Route("DeleteFeedBackReport")]

        [HttpDelete]

        public IActionResult DeleteFeedBackReport(int Id)
        {
            return Ok(_feedbackreport.DeleteFeedBackrReport(Id));
        }
    }
}
