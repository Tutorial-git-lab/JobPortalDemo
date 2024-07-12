using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;

namespace JobPortalDemo.Data.Repository
{
    public class CompanyPasswordRepository : ICompanyPassword
    {
        private readonly ApplicationDbContext _context;

        public CompanyPasswordRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public bool AddCompanyPassword(CompanyPassword companypassword)
        {
            try
            {
                _context.CompanyPasswords.Add(companypassword);
                _context.SaveChanges();
                return true;
                
            }
            catch (Exception)
            {

                return false;
            }
        }

        public bool DeleteCompanyPassword(int Id)
        {
            try
            {
                var companypassword = _context.CompanyPasswords.Find(Id);
                _context.CompanyPasswords.Remove(companypassword);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public List<CompanyPassword> GetAllCompanyPasswords()
        {
            try
            {
                return _context.CompanyPasswords.ToList();
            }
            catch (Exception)
            {

                return null;
            }
        }

        public CompanyPassword GetCompanyPasswordById(int Id)
        {
            try
            {
                return _context.CompanyPasswords.Find(Id);
            }
            catch (Exception)
            {

                return null;
            }
        }

        public bool UpdateCompanyPassword(CompanyPassword companypassword)
        {
            try
            {
                _context.CompanyPasswords.Update(companypassword);
                _context.SaveChanges();
                return true;            }
            catch (Exception)
            {

                return false;
            }
        }
    }
}
