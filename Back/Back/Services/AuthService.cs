using Back.Models;
using Back.Models.UIModels;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Back.Services
{
    public class AuthService
    {
        private readonly IConfiguration configuration;
        public readonly CoursesContext context;

        public AuthService(IConfiguration configuration, CoursesContext context)
        {
            this.configuration = configuration;
            this.context = context;
        }
        public string BuildToken(User user)
        {
            Claim[] claims = new[] {
                new Claim(JwtRegisteredClaimNames.NameId, user.Id),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimsIdentity.DefaultRoleClaimType, user.Role)
            };
            SymmetricSecurityKey key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"]));
            SigningCredentials credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            JwtSecurityToken token = new JwtSecurityToken(
                configuration["Jwt:Issuer"],
                configuration["Jwt:Issuer"],
                claims,
                expires: DateTime.Now.AddDays(7),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
        public User Authenticate(SignInUI signInUI) => context.Users.FirstOrDefault(x => x.Email == signInUI.Email && x.Password == signInUI.Password);
        public bool EmailIsTaken(string email) => context.Users.SingleOrDefault(x => x.Email == email) != null;
    }
}
