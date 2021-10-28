using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace webapi.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class GroupsController : ControllerBase
	{
		private static readonly string[] Names = new[]
		{
			"Evgeniy", "Emin", "Fedor", "Misha"
		};

		private readonly ILogger<GroupsController> _logger;

		public GroupsController(ILogger<GroupsController> logger)
		{
			_logger = logger;
		}

		[HttpGet]
		public ActionResult<Group> Get()
		{
			return new Group
			{
				Name = "M3100",
				Students = new Student[] 
				{
					new Student { ID = 334773, Name = "Evgeniy", Surename = "Pesochin" },
					new Student { ID = 334742, Name = "Emin", Surename = "Kerimov" }
				}
			};
		}
	}
}
