using JobPortalDemo.Data.Interface;
using JobPortalDemo.Data.Module;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobPortalDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IContact _contact;

        public ContactController(IContact contact)
        {
            _contact = contact;
        }

        [Route("GetAllContacts")]

        [HttpGet]

        public IActionResult GetAllContacts()
        {
            return Ok(_contact.GetAllContacts());
        }

        [Route("GetContactById")]

        [HttpGet]

        public IActionResult GetContactById(int Id)
        {
            return Ok(_contact.GetContactById(Id));
        }

        [Route("AddContact")]

        [HttpPost]

        public IActionResult AddContact(Contact contact)
        {
            return Ok(_contact.AddContact(contact));
        }


        [Route("UpdateContact")]

        [HttpPut]

        public IActionResult UpdateContact(Contact contact)
        {
            return Ok(_contact.UpdateContact(contact));
        }

        [Route("DeleteContact")]

        [HttpDelete]

        public IActionResult DeleteContact(int Id)
        {
            return Ok(_contact.DeleteContact(Id));
        }
        

        
    }
}
