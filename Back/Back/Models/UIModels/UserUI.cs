using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back.Models.UIModels
{
    public class UserUI
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string Role { get; set; }
        public string Email { get; set; }
        public bool EmailConfirmed { get; set; }
        public string RegisteredDate { get; set; }
    }
}
