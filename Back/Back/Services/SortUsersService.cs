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
        public List<UserUI> SortByName(List<UserUI> usersUI) => usersUI.OrderBy(x => x.LastName).ThenBy(x => x.Name).ToList();
        public List<UserUI> SortByNameDescending(List<UserUI> usersUI) => usersUI.OrderByDescending(x => x.LastName).ThenByDescending(x => x.Name).ToList();
        public List<UserUI> SortByEmail(List<UserUI> usersUI) => usersUI.OrderBy(x => x.Email).ToList();
        public List<UserUI> SortByEmailDescending(List<UserUI> usersUI) => usersUI.OrderByDescending(x => x.Email).ToList();
        public List<UserUI> SortByAge(List<UserUI> usersUI) => usersUI.OrderBy(x => x.Age).ToList();
        public List<UserUI> SortByAgeDescending(List<UserUI> usersUI) => usersUI.OrderByDescending(x => x.Age).ToList();
        public List<UserUI> SortByRegisteredDate(List<UserUI> usersUI) => usersUI.OrderBy(x => DateTime.ParseExact(x.RegisteredDate, "yyyy-MM-dd", CultureInfo.InvariantCulture)).ToList();
        public List<UserUI> SortByRegisteredDateDescending(List<UserUI> usersUI) => usersUI.OrderByDescending(x => DateTime.ParseExact(x.RegisteredDate, "yyyy-MM-dd", CultureInfo.InvariantCulture)).ToList();

        public List<UserUI> Sort(string option, List<UserUI> users)
        {
            switch (option)
            {
                case "registered-date":
                    return SortByRegisteredDate(users);
                case "registered-date-descending":
                    return SortByRegisteredDateDescending(users);
                case "name":
                    return SortByName(users);
                case "name-descending":
                    return SortByNameDescending(users);
                case "email":
                    return SortByEmail(users);
                case "email-descending":
                    return SortByEmailDescending(users);
                case "age":
                    return SortByAge(users);
                case "age-descending":
                    return SortByAgeDescending(users);
                default:
                    return users;
            }
        }
    }
}
