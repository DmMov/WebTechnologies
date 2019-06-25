using Back.Models;
using Back.Models.UIModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back.Services
{
    public class UserService
    {
        private readonly ApplicationContext context;

        public UserService(ApplicationContext context)
        {
            this.context = context;
        }

        public UserUI UserToUserUI(User user) => new UserUI
            {
                Id = user.Id,
                Name = user.Name,
                LastName = user.LastName,
                StudyDate = user.StudyDate,
                Role = user.Role,
                Email= user.Email,
                EmailConfirmed = user.EmailConfirmed,
                RegisteredDate = user.RegisteredDate,
                Age = user.Age
            };

        public User GetUser(string userId) => context.Users.FirstOrDefault(x => x.Id == userId);

        public User InitializeUser(SignUpUI signUpUI) => new User
            {
                Id = Guid.NewGuid().ToString(),
                Name = signUpUI.Name,
                LastName = signUpUI.LastName,
                Email = signUpUI.Email,
                Password = signUpUI.Password,
                Age = signUpUI.Age,
                RegisteredDate = DateTime.UtcNow.ToString("yyyy-MM-dd"),
                StudyDate = "",
                Role = "user",
                Code = Guid.NewGuid().ToString()
            };

        public void SaveUser(User user)
        {
            context.Users.Add(user);
            context.SaveChanges();
        }

        public void UpdateUser(User user)
        {
            context.Users.Update(user);
            context.SaveChanges();
        }
    }
}
