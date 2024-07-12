using JobPortalDemo.Data;
using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;
using JobPortalDemo.Data.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace JobPortalDemo.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUser _user;

        private readonly IConfiguration _config;

        private readonly ApplicationDbContext _context;


        public UserController(IUser user,IConfiguration config,ApplicationDbContext context)
        {
            _user = user;
            _config = config;
            _context = context;
        }
        [Route("Login")]
        [HttpPost]

        public IActionResult Login(LoginDTO logindto)
        {
            var userdto = _context.Users.FirstOrDefault(x => x.Email == logindto.Email && x.Password == logindto.Password);
            var roleid = _context.UserRoles.FirstOrDefault(x => x.UserId == userdto.Id).RoleId;
            var RoleName = _context.Roles.FirstOrDefault(x => x.Id == roleid).Name;

            if (userdto != null)
            {
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
                var claims = new[]
                {
                    new Claim(ClaimTypes.NameIdentifier,userdto.Email),
                    new Claim(ClaimTypes.Role,RoleName)

                };
                var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                    _config["Jwt:Audience"],
                        claims, expires: DateTime.Now.AddMinutes(15),
                        signingCredentials: credentials);
                LoginResponse loginresponse = new LoginResponse();
                loginresponse.Token = new JwtSecurityTokenHandler().WriteToken(token);
                loginresponse.Role=RoleName;
                return Ok(loginresponse);


            }
            return NotFound("userNotFound");
        }

        [Route("AssignRole")]

        [HttpPost]

        public IActionResult AssignRole(RoleAssignDTO roleassigndto)
        {
            var response = _user.AssignRole(roleassigndto);

            return Ok(response);
        }

        [Route("GetAllUsers")]

        [HttpGet]

        public IActionResult GetAllUsers()
        {
            return Ok(_user.GetAllUsers());
        }

        [Route("GetUserById")]

        [HttpGet]

        public IActionResult GetUserById(int Id)
        {
            return Ok(_user.GetUserById(Id));
        }

        [Route("AddUser")]

        [HttpPost]

        public IActionResult AddUser(UserDTO userdto)
        {
            return Ok(_user.AddUser(userdto));
        }

        [Route("UpdateUser")]

        [HttpPut]

        public IActionResult UpdateUser(User user)
        {
            return Ok(_user.UpdateUser(user));
        }

        [Route("DeleteUser")]

        [HttpDelete]

        public IActionResult DeleteUser(int Id)
        {
            return Ok(_user.DeleteUser(Id));
        }
    }
}
