using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;

namespace JobPortalDemo.Data.Repository
{
    public class UserRoleRepository : IUserRole
    {
        private readonly ApplicationDbContext _context;

        public UserRoleRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public bool AddUserRole(UserRole userrole)
        {
            try
            {
                _context.UserRoles.Add(userrole);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public bool DeleteUserRole(int Id)
        {
            try
            {
                var userrole = _context.UserRoles.Find(Id);
                _context.UserRoles.Remove(userrole);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public List<UserRole> GetAllUserRoles()
        {
            try
            {
                return _context.UserRoles.ToList();

            }
            catch (Exception)
            {

                return null;
            }
        }

        public UserRole GetUserRoleById(int Id)
        {
            try
            {
                return _context.UserRoles.Find(Id);
            }
            catch (Exception)
            {

                return null;
            }
        }

        public bool UpdateRole(UserRole userrole)
        {
            try
            {
                _context.UserRoles.Update(userrole);
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
