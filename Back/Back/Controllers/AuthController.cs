using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Back.Models;
using Back.Models.UIModels;
using Back.Services;
using Hangfire;
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
        public UserDataService userDataService;

        public AuthController(AuthService authService, EmailService emailService, UserDataService userDataService)
        {
            this.authService = authService;
            this.emailService = emailService;
            this.userDataService = userDataService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] SignInUI signIn)
        {
            IActionResult response = BadRequest("Incorrect username or password");

            User user = authService.Authenticate(signIn);

            if (user != null)
            {
                string token = authService.BuildToken(user);
                UserUI userUI = userDataService.UserToUserUI(user);
                userUI.Token = token;
                response = Ok(userUI);
            }

            return response;
        }

        [HttpPost("registration")]
        public IActionResult Registration([FromBody] SignUpUI signUpUI)
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
                        User user = userDataService.InitializeUser(signUpUI);
                        BackgroundJob.Enqueue(() => emailService.SendEmailAsync(user.Email, "Confirm Email", $"http://192.168.0.149:8080/confirm-email/{user.Id}/{user.Code}"));
                        string token = authService.BuildToken(user);
                        UserUI userUI = userDataService.UserToUserUI(user);
                        userUI.Token = token;
                        userDataService.SaveUser(user);
                        response = Ok(userUI);
                }

            }

            return response;
        }

        [HttpPost("check-email")]
        public IActionResult CheckEmail(SignInUI signInUI)
        {
            bool emailIsTaken = authService.EmailIsTaken(signInUI.Email);
            if (emailIsTaken)
            {
                return BadRequest("email is already taken");
            }
            return Ok();
        }
    }
}