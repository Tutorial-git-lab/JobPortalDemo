using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;

namespace JobPortalDemo.Data.Repository
{
    public class CompanyReportRepository : ICompanyReport
    {
        private readonly ApplicationDbContext _context;

        public CompanyReportRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public bool AddCompanyReport(CompanyReport companyreport)
        {
            try
            {
                _context.CompanyReports.Add(companyreport);
                _context.SaveChanges();
                return true;

            }
            catch (Exception)
            {

                return false;
            }
        }

        public bool DeleteCompanyReport(int Id)
        {
            try
            {
                var companyreport = _context.CompanyReports.Find(Id);
                _context.CompanyReports.Remove(companyreport);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public List<CompanyReport> GetAllCompanyReports()
        {
            try
            {
                return _context.CompanyReports.ToList();

            }
            catch (Exception)
            {

                return null;
            }
        }

        public CompanyReport GetCompanyReportById(int Id)
        {
            try
            {
                return _context.CompanyReports.Find(Id);
            }
            catch (Exception)
            {

                return null;
            }
        }

        public bool UpdateCompanyReport(CompanyReport companyreport)
        {
            try
            {
                _context.CompanyReports.Update(companyreport);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }
    }
}
