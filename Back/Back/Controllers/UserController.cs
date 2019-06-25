using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Back.Models;
using Back.Services;
using Hangfire;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Back.Controllers
{
    [Route("api/[controller]")]
    [ApiController, Authorize(Roles = "user")]
    public class UserController : ControllerBase
    {
        private readonly UserService userDataService;
        private readonly EmailService emailService;

        public UserController(UserService userDataService, EmailService emailService)
        {
            this.userDataService = userDataService;
            this.emailService = emailService;
        }

        [HttpPut("set-study-date/{id}/{studyDate}")]
        public IActionResult SetStudyDate(string id, string studyDate)
        {
            User user = userDataService.GetUser(id);
            DateTime parsedStudyDate = DateTime.ParseExact(studyDate, "yyyy-MM-dd", CultureInfo.InvariantCulture);

            bool moreThenMonth = parsedStudyDate > DateTime.Now.AddMonths(1);
            bool moreThenWeek = parsedStudyDate > DateTime.Now.AddDays(7);

            if (user != null && parsedStudyDate != null)
            {
                if (moreThenWeek)
                    BackgroundJob.Schedule(() => emailService.SendEmailAsync(user.Email, "Study notification", "Study will begin in a week"), parsedStudyDate.AddDays(-7));

                if (moreThenMonth)
                    BackgroundJob.Schedule(() => emailService.SendEmailAsync(user.Email, "Study notification", "Study will begin in a month"), parsedStudyDate.AddMonths(-1));

                BackgroundJob.Schedule(() => emailService.SendEmailAsync(user.Email, "Study notification", "Study will begin tomorrow"), new DateTime(parsedStudyDate.Year, parsedStudyDate.Month, parsedStudyDate.Day - 1, 8, 0, 0));
                user.StudyDate = studyDate;
                userDataService.UpdateUser(user);
                return Ok(user.StudyDate);
            }
            return BadRequest("Error");
        }

        [HttpPut("confirm-email/{id}/{code}"), AllowAnonymous]
        public IActionResult ConfirmEmail(string id, string code)
        {
            IActionResult response = BadRequest(new { message = "incorect user id or code" });
            User user = userDataService.GetUser(id);
            if (user != null && user.Code == code)
            {
                user.EmailConfirmed = true;
                userDataService.UpdateUser(user);
                response = Ok(user);
            }

            return response;
        }
    }
}