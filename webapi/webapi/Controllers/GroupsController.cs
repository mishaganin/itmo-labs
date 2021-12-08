using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using webapi.Services;
using webapi.Models;

namespace webapi.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class GroupsController : ControllerBase
	{
		[HttpGet("{id}")]
		public ActionResult<Student> Get(int id)
		{
			return GroupService.Get_Student(id);
		}
	}
}
