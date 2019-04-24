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
        UserListService userListService;
        SortUsersService sortUsersService;

        public AdminController(UserListService userListService, SortUsersService sortUsersService)
        {
            this.userListService = userListService;
            this.sortUsersService = sortUsersService;
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            List<UserUI> usersUI = userListService.GetUsers();
            return Ok(usersUI);
        }

        [HttpGet("sort/{option}/{searchStr}")]
        public IActionResult GetSortedUsers(string option, string searchStr)
        {
            IActionResult response = BadRequest("error");
            List<UserUI> users = userListService.GetUsers();
            if (searchStr != "empty")
            {
                users = userListService.SearcUsers(searchStr.ToLower(), users);
            }
            if (option != "")
            {
                users = sortUsersService.Sort(option, users);
                response = Ok(users);
            }
            
            return response;
        }

        [HttpGet("search/{searchStr}/{sortBy}")]
        public IActionResult SearchUsers(string searchStr, string sortBy)
        {
            IActionResult response = BadRequest("error");
            List<UserUI> users = userListService.GetUsers();
            if (sortBy != "empty")
            {
                users = sortUsersService.Sort(sortBy, users);
            }
            if (searchStr != "")
            {
                response = Ok(userListService.SearcUsers(searchStr.ToLower(), users));
            }
            return response;
        }
    }
}