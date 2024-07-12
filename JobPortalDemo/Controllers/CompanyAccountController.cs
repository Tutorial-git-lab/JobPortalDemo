using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;
using Microsoft.AspNetCore.Mvc;

namespace JobPortalDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyAccountController : ControllerBase
    {
        private readonly ICompanyAccount _companyaccount;

        public CompanyAccountController(ICompanyAccount companyaccount)
        {
            _companyaccount = companyaccount;
        }

        [Route("GetAllCompanyAccounts")]

        [HttpGet]

        public IActionResult GetAllCompanyAccounts()
        {
            return Ok(_companyaccount.GetAllCompanyAccounts());
        }

        [Route("GetCompanyAccountById")]

        [HttpGet]

        public IActionResult GetCompanyAccountById(int Id)
        {
            return Ok(_companyaccount.GetCompanyAccountById(Id));
        }

        [Route("AddCompanyAccount")]

        [HttpPost]

        public IActionResult AddCompanyAccount(CompanyAccount companyaccount)
        {
            return Ok(_companyaccount.AddCompanyAccount(companyaccount));
        }

        [Route("UpdateCompanyAccount")]

        [HttpPut]

        public IActionResult UpdateCompanyAccount(CompanyAccount companyaccount)
        {
            return Ok((_companyaccount.UpdateCompanyAccount(companyaccount)));
        }

        [Route("DeleteCompanyAccount")]

        [HttpDelete]

        public IActionResult DeleteCompanyAccount(int Id)
        {
            return Ok(_companyaccount.DeleteCompanyAccount(Id));
        }
    }
}
