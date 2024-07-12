using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobPortalDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobSeekerReportController : ControllerBase
    {
        private readonly IJobSeekerReport _jobseekerreport;

        public JobSeekerReportController(IJobSeekerReport jobseekerreport)
        {
            _jobseekerreport = jobseekerreport;
        }

        [Route("GetAllJobSeekerReports")]

        [HttpGet]

        public IActionResult GetAllJobSeekerReports()
        {
            return Ok(_jobseekerreport.GetAllJobSeekers());
        }

        [Route("GetJobSeekerById")]

        [HttpGet]

        public IActionResult GetJobSeekerReportById(int Id)
        {
            return Ok(_jobseekerreport.GetJobSeekerReportById(Id));
        }

        [Route("AddJobSeekerReport")]

        [HttpPost]

        public IActionResult AddJobSeekerReport(JobSeekerReport jobseekerreport)
        {
            return Ok(_jobseekerreport.AddJobSeekerReport(jobseekerreport));
        }

        [Route("UpdateJobSeekerReport")]

        [HttpPut]

        public IActionResult UpdateJobSeekerReport()
        {
            return Ok(_jobseekerreport.UpdateJobSeekerReport);
        }

        [Route("DeleteJobSeekerReport")]

        [HttpDelete]

        public IActionResult DeleteJobSeekerReport(int Id)
        {
            return Ok(_jobseekerreport.DeleteJobSeekerReport(Id));
        }


    }
}
