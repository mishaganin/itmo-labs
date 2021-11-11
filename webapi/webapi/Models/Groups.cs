using System;

namespace webapi.Models
{
	public class Group
	{
		public string Name { get; set; }

		public Student[] Students { get; set; }
	}
}
