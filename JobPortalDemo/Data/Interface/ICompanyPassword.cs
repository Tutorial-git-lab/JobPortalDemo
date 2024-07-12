using JobPortalDemo.Data.Module;

namespace JobPortalDemo.Data.Interface
{
    public interface ICompanyPassword
    {
        bool AddCompanyPassword(CompanyPassword companypassword);

        bool UpdateCompanyPassword(CompanyPassword companypassword);

        bool DeleteCompanyPassword(int Id);

        List<CompanyPassword> GetAllCompanyPasswords();

        CompanyPassword GetCompanyPasswordById(int Id);
    }
}
