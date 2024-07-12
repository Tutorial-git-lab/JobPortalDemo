using JobPortalDemo.Data.Module;

namespace JobPortalDemo.Data.Interface
{
    public interface ICompanyReport
    {
        bool AddCompanyReport(CompanyReport companyreport);

        bool UpdateCompanyReport(CompanyReport companyreport);

        bool DeleteCompanyReport(int Id);

        List<CompanyReport> GetAllCompanyReports();

        CompanyReport GetCompanyReportById(int Id);
    }
}
