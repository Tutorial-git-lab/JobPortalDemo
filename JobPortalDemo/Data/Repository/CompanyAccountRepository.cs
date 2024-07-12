using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;

namespace JobPortalDemo.Data.Repository
{
    public class CompanyAccountRepository : ICompanyAccount
    {
        private readonly ApplicationDbContext _context;

        public CompanyAccountRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public bool AddCompanyAccount(CompanyAccount companyaccount)
        {
            try
            {
                _context.CompanyAccounts.Add(companyaccount);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public bool DeleteCompanyAccount(int Id)
        {
            try
            {
                var companyaccount = _context.CompanyAccounts.Find(Id);
                _context.CompanyAccounts.Remove(companyaccount);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public List<CompanyAccount> GetAllCompanyAccounts()
        {
            try
            {
                return _context.CompanyAccounts.ToList();
            }
            catch (Exception)
            {

                return null;
            }
        }

        public CompanyAccount GetCompanyAccountById(int Id)
        {
            try
            {
                return _context.CompanyAccounts.Find(Id);

            }
            catch (Exception)
            {

                return null;
            }
        }

        public bool UpdateCompanyAccount(CompanyAccount companyAccount)
        {
            try
            {
                _context.CompanyAccounts.Update(companyAccount);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false ;
            }
        }
    }
}
