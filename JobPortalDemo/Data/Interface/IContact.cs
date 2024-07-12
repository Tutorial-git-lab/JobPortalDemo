using JobPortalDemo.Data.Module;

namespace JobPortalDemo.Data.Interface
{
    public interface IContact
    {
        bool AddContact(Contact contact);

        bool UpdateContact(Contact contact);

        bool DeleteContact(int Id);

        List<Contact> GetAllContacts();

        Contact GetContactById(int Id);
    }
}
