using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobPortalDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobSeekerPasswordController : ControllerBase
    {
        private readonly IJobSeekerPassword _jobseekerpassword;

        public JobSeekerPasswordController(IJobSeekerPassword jobseekerpassword)
        {
            _jobseekerpassword = jobseekerpassword;
        }

        [Route("GetAllJobSeekerPassword")]

        [HttpGet]

        public IActionResult GetAllJobSeekerPassword()
        {
            return Ok(_jobseekerpassword.GetAllJobSeekerPassword());
        }

        [Route("GetJobSeekerById")]

        [HttpGet]

        public IActionResult GetJobSeekerPasswordByid(int Id)
        {
            return Ok(_jobseekerpassword.GetJobSeekerPasswordById(Id));
        }

        [Route("AddJobSeeekerPassword")]

        [HttpPost]

        public IActionResult AddJobSeekerPassword(JobSeekerPassword jobseekerpassword)
        {
            return Ok(_jobseekerpassword.AddJobSeekerPassword(jobseekerpassword));
        }

        [Route("UpdateJobSeekerPassword")]

        [HttpPut]

        public IActionResult UpdateJobSeekerPassword(JobSeekerPassword jobseekerpassword)
        {
            return Ok(_jobseekerpassword.UpdateJobSeekerPassword(jobseekerpassword));
        }


        [Route("DeleteJobSeekerPassword")]

        [HttpDelete]

        public IActionResult DeleteJobSeekerPassword(int Id)
        {
            return Ok(_jobseekerpassword.DeleteJobSeekerPassword(Id));
        }
    }
}
