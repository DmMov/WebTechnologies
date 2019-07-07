using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Back.Models.UIModels;
using Back.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Back.Controllers
{
    [Route("api/[controller]")]
    [ApiController, Authorize(Roles = "admin")]
    public class AdminController : ControllerBase
    {
        private readonly UserListService userListService;
        private readonly SortUsersService sortUsersService;

        public AdminController(UserListService userListService, SortUsersService sortUsersService)
        {
            this.userListService = userListService;
            this.sortUsersService = sortUsersService;
        }

        [HttpGet]
        public IActionResult GetUsers() => Ok(userListService.GetUsers());

        [HttpGet("sort/{sort}/{search}")]
        public IActionResult SortUsers(string sort, string search)
        {
            IActionResult response = BadRequest("error");
            List<UserUI> users = userListService.GetUsers();
            if (search != "empty")
                users = userListService.SearcUsers(search.ToLower(), users);

            if (sort != "")
                response = Ok(new { users = sortUsersService.Sort(sort, users) });

            return response;
        }

        [HttpGet("search/{search}/{sort}")]
        public IActionResult SearchUsers(string search, string sort)
        {
            IActionResult response = BadRequest("error");
            List<UserUI> users = userListService.GetUsers();
            if (sort != "empty")
                users = sortUsersService.Sort(sort, users).ToList();

            if (search != "")
                response = Ok(userListService.SearcUsers(search.ToLower(), users));

            return response;
        }
    }
}