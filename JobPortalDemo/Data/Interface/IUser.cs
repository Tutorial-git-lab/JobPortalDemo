using JobPortalDemo.Data.Module;
using JobPortalDemo.Data.ViewModel;

namespace JobPortalDemo.Data.Interface
{
    public interface IUser
    {
        bool AddUser(UserDTO userdto);

        bool UpdateUser(User user);

        bool DeleteUser(int Id);

        List<User> GetAllUsers();

        User GetUserById(int Id);

        bool AssignRole(RoleAssignDTO roleAssigndto);

        UserDTO Login(LoginDTO logindto);



    }
}
