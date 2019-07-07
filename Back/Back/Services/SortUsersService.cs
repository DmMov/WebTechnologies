using Back.Models.UIModels;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace Back.Services
{
    public class SortUsersService
    {
        private IEnumerable<UserUI> ByName(List<UserUI> usersUI) => usersUI.OrderBy(x => x.LastName).ThenBy(x => x.Name);
        private IEnumerable<UserUI> ByNameDescending(List<UserUI> usersUI) => usersUI.OrderByDescending(x => x.LastName).ThenByDescending(x => x.Name);
        private IEnumerable<UserUI> ByEmail(List<UserUI> usersUI) => usersUI.OrderBy(x => x.Email);
        private IEnumerable<UserUI> ByEmailDescending(List<UserUI> usersUI) => usersUI.OrderByDescending(x => x.Email);
        private IEnumerable<UserUI> ByAge(List<UserUI> usersUI) => usersUI.OrderBy(x => x.Age);
        private IEnumerable<UserUI> ByAgeDescending(List<UserUI> usersUI) => usersUI.OrderByDescending(x => x.Age);
        private IEnumerable<UserUI> ByRegisteredDate(List<UserUI> usersUI) => usersUI.OrderBy(x => DateTime.ParseExact(x.RegisteredDate, "yyyy-MM-dd", CultureInfo.InvariantCulture));
        private IEnumerable<UserUI> ByRegisteredDateDescending(List<UserUI> usersUI) => usersUI.OrderByDescending(x => DateTime.ParseExact(x.RegisteredDate, "yyyy-MM-dd", CultureInfo.InvariantCulture));

        public IEnumerable<UserUI> Sort(string option, List<UserUI> users)
        {
            switch (option)
            {
                case "rd":
                    return ByRegisteredDate(users);
                case "rdd":
                    return ByRegisteredDateDescending(users);
                case "n":
                    return ByName(users);
                case "nd":
                    return ByNameDescending(users);
                case "e":
                    return ByEmail(users);
                case "ed":
                    return ByEmailDescending(users);
                case "a":
                    return ByAge(users);
                case "ad":
                    return ByAgeDescending(users);
                default:
                    return users;
            }
        }
    }
}
