using Back.Models;
using Back.Models.UIModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back.Services
{
    public class UserListService
    {
        private readonly ApplicationContext context;
        private readonly UserService userDataService;

        public UserListService(ApplicationContext context, UserService userDataService)
        {
            this.userDataService = userDataService;
            this.context = context;
        }

        public List<UserUI> GetUsers() => 
            new List<UserUI>(context.Users.Where(x => x.Role != "admin").Select(x => userDataService.UserToUserUI(x)));

        public List<UserUI> SearcUsers(string searchedStr, List<UserUI> users) => 
            users
            .Where(x => x.Name.ToLower().Contains(searchedStr) || x.LastName.ToLower().Contains(searchedStr))
            .Where(x => x.Role != "admin")
            .ToList();
    }
}
