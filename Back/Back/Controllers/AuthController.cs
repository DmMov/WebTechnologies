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
        private readonly AuthService authService;
        private readonly EmailService emailService;
        private readonly UserService userService;

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
                return Ok(new { user = userService.UserToUserUI(user) });

            return BadRequest();
        }

        [HttpPost("sign-in")]
        public IActionResult SignIn(SignInUI signIn)
        {
            IActionResult response = BadRequest(new { message = "Incorrect username or password" });

            User user = authService.Authenticate(signIn);

            if (user != null)
                response = Ok(new { user = userService.UserToUserUI(user), token = authService.BuildToken(user) });

            return response;
        }

        [HttpPost("sign-up")]
        public IActionResult SignUp(SignUpUI signUpUI)
        {
            IActionResult response = BadRequest(new { message = "invalid data" });

            if (signUpUI != null)
            {
                if (authService.EmailIsTaken(signUpUI.Email))
                    response = UnprocessableEntity("email is already taken");
                else
                {
                    User user = userService.InitializeUser(signUpUI);
                    BackgroundJob.Enqueue(() => emailService.SendEmailAsync(user.Email, "Confirm Email", $"http://192.168.0.149:8080/confirm-email/{user.Id}/{user.Code}"));
                    userService.SaveUser(user);
                    response = Ok(new { user = userService.UserToUserUI(user), token = authService.BuildToken(user) });
                }
            }
            return response;
        }

    }
}