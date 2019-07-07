using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back.Models
{
    public class CoursesContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<StudyingDate> StudyingDates { get; set; }

        public CoursesContext(DbContextOptions<CoursesContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>().HasData(
                new User[]
                {
                    new User {
                        Id = "first",
                        Name = "Dmitriy",
                        LastName = "Movchaniuk",
                        Age = 20,
                        Email ="admin@mail.com",
                        Password = "admin12345",
                        EmailConfirmed = true,
                        RegisteredDate = DateTime.UtcNow.ToString("yyyy-MM-dd"),
                        Role = "admin",
                        Code = "0"
                    },
                    new User {
                        Id = "second",
                        Name = "Tom",
                        LastName = "Hardy",
                        Age = 20,
                        Email ="hardy@mail.com",
                        Password = "qwerty123",
                        EmailConfirmed = true,
                        RegisteredDate = DateTime.UtcNow.ToString("yyyy-MM-dd"),
                        Role = "user",
                        Code = "0"
                    },
                }
            );
        }
    }
}
