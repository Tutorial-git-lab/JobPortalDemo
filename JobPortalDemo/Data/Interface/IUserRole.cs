using JobPortalDemo.Data.Module;

namespace JobPortalDemo.Data.Interface
{
    public interface IUserRole
    {
        bool AddUserRole(UserRole userrole);

        bool UpdateRole(UserRole userrole);

        bool DeleteUserRole(int Id);

        List<UserRole> GetAllUserRoles();

        UserRole GetUserRoleById(int Id);


    }
}
