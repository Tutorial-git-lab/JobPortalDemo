using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobPortalDemo.Controllers
{
    [EnableCors("CorsPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class UserRoleController : ControllerBase
    {
        private readonly IUserRole _userrole;

        public UserRoleController(IUserRole userrole)
        {
            _userrole = userrole;
        }

        [Route("GetAllUserRoles")]

        [HttpGet]

        public IActionResult GetAllUserRoles()
        {
            return Ok(_userrole.GetAllUserRoles);
        }

        [Route("GetUserRoleById")]

        [HttpGet]

        public IActionResult GetUserRoleById(int Id)
        {
            return Ok(_userrole.GetUserRoleById(Id));


        }

        [Route("AddUserRole")]

        [HttpPost]

        public IActionResult AddUserRole(UserRole userRole)
        {
            return Ok(_userrole.AddUserRole(userRole));
        }

        [Route("UpdateUserRole")]

        [HttpPut]

        public IActionResult UpdateUserRole(UserRole userRole)
        {
            return Ok(_userrole.UpdateRole(userRole));
        }

        [Route("DeleteUserRole")]

        [HttpDelete]

        public IActionResult DeleteUserRole(int Id)
        {
            return Ok(_userrole.DeleteUserRole(Id));
        }
    }
}
