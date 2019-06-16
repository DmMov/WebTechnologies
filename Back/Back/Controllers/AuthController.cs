using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Back.Models;
using Back.Models.UIModels;
using Back.Services;
using Hangfire;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public AuthService authService;
        public EmailService emailService;
        public UserService userService;

        public AuthController(AuthService authService, EmailService emailService, UserService userService)
        {
            this.authService = authService;
            this.emailService = emailService;
            this.userService = userService;
        }

        [Authorize]
        [HttpGet]
        public IActionResult CheckAuth()
        {
            string id = User.FindFirstValue(ClaimTypes.NameIdentifier);
            User user = userService.GetUser(id);


            if (user != null)
            {
                UserUI userUI = userService.UserToUserUI(user);
                return Ok(new { user = userUI });
            }
            return BadRequest();
        }

        [HttpPost("sign-in")]
        public IActionResult SignIn(SignInUI signIn)
        {
            IActionResult response = BadRequest("Incorrect username or password");

            User user = authService.Authenticate(signIn);

            if (user != null)
            {
                string token = authService.BuildToken(user);
                UserUI userUI = userService.UserToUserUI(user);
                response = Ok(new { user = userUI, token });
            }

            return response;
        }

        [HttpPost("sign-up")]
        public IActionResult SignUp(SignUpUI signUpUI)
        {
            IActionResult response = BadRequest();

            if (signUpUI != null)
            {
                bool emailIsTaken = authService.EmailIsTaken(signUpUI.Email);

                if (emailIsTaken)
                {
                    response = UnprocessableEntity("email is already taken");
                }
                else
                {
                    User user = userService.InitializeUser(signUpUI);
                    BackgroundJob.Enqueue(() => emailService.SendEmailAsync(user.Email, "Confirm Email", $"http://192.168.0.149:8080/confirm-email/{user.Id}/{user.Code}"));
                    string token = authService.BuildToken(user);
                    UserUI userUI = userService.UserToUserUI(user);
                    userService.SaveUser(user);
                    response = Ok(userUI);
                }
            }
            return response;
        }

    }
}