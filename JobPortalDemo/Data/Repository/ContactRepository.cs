using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;

namespace JobPortalDemo.Data.Repository
{
    public class ContactRepository : IContact
    {
        private readonly ApplicationDbContext _context;

        public ContactRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public bool AddContact(Contact contact)
        {
            try
            {
                _context.Contacts.Add(contact);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public bool DeleteContact(int Id)
        {
            try
            {
                var contact = _context.Contacts.Find(Id);
                _context.Contacts.Remove(contact);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public List<Contact> GetAllContacts()
        {
            try
            {
                return _context.Contacts.ToList();
            }
            catch (Exception)
            {

                return null;
            }
        }

        public Contact GetContactById(int Id)
        {
            try
            {
                return _context.Contacts.Find(Id);
            }
            catch (Exception)
            {

                return null;
            }
        }

        public bool UpdateContact(Contact contact)
        {
            try
            {
                _context.Contacts.Update(contact);
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
