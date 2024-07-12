using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobPortalDemo.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class PostNewJobController : ControllerBase
    {
        private readonly IPostNewJob _postnewjob;

        public PostNewJobController(IPostNewJob postnewjob)
        {
            _postnewjob = postnewjob;
        }

        [Route("GetAllPostNewJob")]

        [HttpGet]

        public IActionResult GetAllPostNewJobs()
        {
            return Ok(_postnewjob.GetAllPostNewJobs());
        }

        [Route("GetPostNewJobById")]

        [HttpGet]

        public IActionResult GetPostNewJobById(int Id)
        {
            return Ok(_postnewjob.GetPostNewJobById(Id));
        }

        [Route("AddPostNewJob")]

        [HttpPost]

        public IActionResult AddPostNewJob(PostNewJob postnewjob)
        {
            return Ok(_postnewjob.AddPostNewJob(postnewjob));
        }

        [Route("UpdatePostNewJob")]

        [HttpPut]

        public IActionResult UpdatePostNewJob(PostNewJob postnewjob)
        {
            return Ok(_postnewjob.UpdatePostNewJob(postnewjob));
        }

        [Route("DeletePostNewJob")]

        [HttpDelete]

        public IActionResult DeletePostNewJob(int Id)
        {
            return Ok(_postnewjob.DeletePostNewJob(Id));
        }

    }
}
