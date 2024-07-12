namespace JobPortalDemo.Data.Module
{
    public class User
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string FilePath { get; set; }

        public string FileName { get; set; }

        public bool IsDeleted { get; set; }

        public int CreatedBy {  get; set; } 

        public DateTime CreatedOn { get; set; }

        public int UpdatedBy { get; set; }


        public DateTime UpdatedOn { get; set; }
    
    }
}
