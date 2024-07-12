using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;
using JobPortalDemo.Data.ViewModel;

namespace JobPortalDemo.Data.Repository
{
    public class UserRepository : IUser
    {
        private readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public bool AddUser(UserDTO userdto)
        {
            try
            {
                User user = new User();
                user.Id = userdto.Id;
                user.FirstName = userdto.FirstName;
                user.LastName = userdto.LastName;
                user.Email = userdto.Email;
                user.Password = userdto.Password;
                user.FilePath = userdto.FilePath;
                user.FileName = userdto.FileName;
                user.IsDeleted = false;
                user.CreatedBy = 1;
                user.CreatedOn = DateTime.Now;
                user.UpdatedBy = 1;
                user.UpdatedOn = DateTime.Now;
                _context.Users.Add(user);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }


        }

        public bool AssignRole(RoleAssignDTO roleassigndto)
        {
            try
            {
                RoleAssign roleassign = new RoleAssign();
                roleassign.Id=roleassigndto.Id;
                roleassign.UserId = roleassigndto.UserId;
                roleassign.RoleId = roleassigndto.RoleId;
                _context.RoleAssigns.Add(roleassign);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }

        
        public bool DeleteUser(int Id)
        {
            try
            {
                var user = _context.Users.Find(Id);
                _context.Users.Remove(user);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public List<User> GetAllUsers()
        {
            try
            {
                return _context.Users.ToList();
            }
            catch (Exception)
            {

                return null;
            }
        }

        public User GetUserById(int Id)
        {
            try
            {
                return _context.Users.Find(Id);
                
            }
            catch (Exception)
            {

                return null;
            }
        }

        

        public UserDTO Login(LoginDTO logindto)
        {
            try
            {
                User userdata = _context.Users.FirstOrDefault(x => x.Email == logindto.Email && x.Password == logindto.Password);
                UserDTO userdto = new UserDTO();
                userdto.Id = userdata.Id;
                userdto.FirstName = userdata.FirstName;
                userdto.LastName = userdata.LastName;
                userdto.Email = userdata.Email;
                return userdto;
            }
            catch (Exception)
            {

                return null;
            }

        }

        

        public bool UpdateUser(User user)
        {
            try
            {
                _context.Users.Update(user);
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
