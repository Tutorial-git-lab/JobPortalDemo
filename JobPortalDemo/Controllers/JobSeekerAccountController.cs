using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobPortalDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobSeekerAccountController : ControllerBase
    {
       private readonly IJobSeekerAccount _jobseekeraccount;

        public JobSeekerAccountController(IJobSeekerAccount jobseekeraccount)
        {
            _jobseekeraccount = jobseekeraccount;
        }

        [Route("GetAllJobSeekerAccounts")]

        [HttpGet]

        public IActionResult GetAllJobSeekerAccounts()
        {
            return Ok(_jobseekeraccount.GetAllJobSeekersAccounts());
        }

        [Route("GetJobSeekerById")]

        [HttpGet]

        public IActionResult GetJobSeekerAccountById(int Id)
        {
            return Ok(_jobseekeraccount.GetJobSeekerAccountById(Id));
        }

        [Route("AddJobSeekerAccount")]

        [HttpPost]

        public IActionResult AddJobSeekerAccount(JobSeekerAccount jobseekeraccount)
        {
            return Ok(_jobseekeraccount.AddJobSeekerAccount(jobseekeraccount));
        }

        [Route("UpdateJobSeekerAccount")]

        [HttpPut]

        public IActionResult UpdateJobSeekerAccount(JobSeekerAccount jobseekeraccount)
        {
            return Ok(_jobseekeraccount.UpdateJobSeekerAccount(jobseekeraccount));
        }

        [Route("DeleteJobSeekerAccount")]

        [HttpDelete]

        public IActionResult DeleteJobSeekerAccount(int Id)
        {
            return Ok(_jobseekeraccount.DeleteJobSeekerAccount(Id));
        }
    }
}
