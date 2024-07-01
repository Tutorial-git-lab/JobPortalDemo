using JobPortalDemo.Data.Module;

namespace JobPortalDemo.Data.Interface
{
    public interface IRole
    {
        bool AddRole(Role role);

        bool UpdateRole(Role role);

        bool DeleteRole(int Id);

        List<Role> GetAllRoles();

        Role GetRoleById(int Id);
    }
}
