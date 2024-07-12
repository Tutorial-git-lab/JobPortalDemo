using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobPortalDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyReportController : ControllerBase
    {
        private readonly ICompanyReport _companyreport;

        public CompanyReportController(ICompanyReport companyreport)
        {
            _companyreport = companyreport;
        }

        [Route("GetAllCompanyReport")]

        [HttpGet]

        public IActionResult GetAllCompanyReports()
        {
            return Ok(_companyreport.GetAllCompanyReports());
        }

        [Route("GetCompanyReportById")]

        [HttpGet]

        public IActionResult GetCompanyReportById(int Id)
        {
            return Ok(_companyreport.GetCompanyReportById(Id));
        }

        [Route("AddCompanyReport")]

        [HttpPost]

        public IActionResult AddCompanyReport(CompanyReport companyreport)
        {
            return Ok(_companyreport.AddCompanyReport(companyreport));
        }

        [Route("UpdateCompanyReport")]

        [HttpPut]

        public IActionResult UpdateCompanyReport(CompanyReport companyreport)
        {
            return Ok(_companyreport.UpdateCompanyReport(companyreport));
        }

        [Route("DeleteCompanyReport")]

        [HttpDelete]

        public IActionResult DeleteCompanyReport(int Id)
        {
            return Ok(_companyreport.DeleteCompanyReport(Id));
        }
    }
}
