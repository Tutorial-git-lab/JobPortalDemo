using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobPortalDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostedJobController : ControllerBase
    {
        private readonly IPostedJob _postedjob;


        public PostedJobController(IPostedJob postedjob)
        {
            _postedjob = postedjob;
        }

        [Route("GetAllPostedJob")]

        [HttpGet]

        public IActionResult GetAllPostedJobs()
        {
            return Ok(_postedjob.GetAllPostedJobs());
        }

        [Route("GetPostedJobById")]

        [HttpGet]

        public IActionResult GetPostedJobById(int Id)
        {
            return Ok(_postedjob.GetPostedJobById(Id));
        }

        [Route("AddPostedJob")]

        [HttpPost]

        public IActionResult AddPostedJob(PostedJob postedjob)
        {
            return Ok(_postedjob.AddPostedJob(postedjob));
        }

        [Route("UpdatePostedJob")]

        [HttpPost]

        public IActionResult UpdatePostedJob(PostedJob postedjob)
        {
            return Ok(_postedjob.UpdatePostedJob(postedjob));

        }

        [Route("DeletePostedJob")]

        [HttpDelete]

        public IActionResult DeletePostedJob(int Id)
        {
            return Ok(_postedjob.DeletePostedJob(Id));
        }


    }
}
