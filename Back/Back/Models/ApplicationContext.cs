using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back.Models
{
    public class ApplicationContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>().HasData(
                new User[]
                {
                    new User {
                        Id = Guid.NewGuid().ToString(),
                        Name = "Dmitriy",
                        LastName = "Movchaniuk",
                        Age = 20,
                        Email ="admin@mail.com",
                        Password = "admin12345",
                        EmailConfirmed = true,
                        RegisteredDate = DateTime.UtcNow.ToString("yyyy-MM-dd"),
                        StudyDate = "0000-00-00",
                        Role = "admin",
                        Code = "0"
                    },
                     new User {
                        Id = Guid.NewGuid().ToString(),
                        Name = "Tom",
                        LastName = "Hardy",
                        Age = 20,
                        Email ="hardy@mail.com",
                        Password = "qwerty123",
                        EmailConfirmed = true,
                        RegisteredDate = DateTime.UtcNow.ToString("yyyy-MM-dd"),
                        StudyDate = "",
                        Role = "user",
                        Code = "0"
                    },
                }
            );
        }
    }
}
