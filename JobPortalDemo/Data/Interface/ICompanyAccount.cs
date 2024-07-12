using JobPortalDemo.Data.Module;

namespace JobPortalDemo.Data.Interface
{
    public interface ICompanyAccount
    {
        bool AddCompanyAccount(CompanyAccount companyaccount);

        bool UpdateCompanyAccount(CompanyAccount companyAccount);

        bool DeleteCompanyAccount(int Id);

        List<CompanyAccount> GetAllCompanyAccounts();

        CompanyAccount GetCompanyAccountById(int Id);
    }
}
