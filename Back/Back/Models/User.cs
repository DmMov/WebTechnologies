using Back.Models.UIModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back.Models
{
    public class User : UserUI
    {
        public string Password { get; set; }
        public string Code { get; set; }
    }
}
