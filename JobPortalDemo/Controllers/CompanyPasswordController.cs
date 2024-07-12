using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobPortalDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyPasswordController : ControllerBase
    {
        private readonly ICompanyPassword _companypassword;

        public CompanyPasswordController(ICompanyPassword companypassword)
        {
            _companypassword = companypassword;
        }

        [Route("GetAllCompanyPasswords")]

        [HttpGet]

        public IActionResult GetAllCompanyPasswords()
        {
            return Ok(_companypassword.GetAllCompanyPasswords());
        }

        [Route("GetCompanyPasswordById")]

        [HttpGet]

        public IActionResult GetCompanyPasswordsById(int Id)
        {
            return Ok(_companypassword.GetCompanyPasswordById(Id));
        }

        [Route("AddCompanyPassword")]

        [HttpPost]

        public IActionResult AddCompanyPassword(CompanyPassword companypassword)
        {
            return Ok(_companypassword.AddCompanyPassword(companypassword));
        }

        [Route("UpdateCompanyPassword")]

        [HttpPut]

        public IActionResult UpdateCompanyPassword(CompanyPassword companypassword)
        {
            return Ok(_companypassword.UpdateCompanyPassword(companypassword));
        }

        [Route("DeleteCompanyPassword")]

        [HttpDelete]

        public IActionResult DeleteCompanyPassword(int Id)
        {
            return Ok(_companypassword.DeleteCompanyPassword(Id));
        }

    }
}
