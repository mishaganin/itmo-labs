using System;
using System.Collections.Generic;

namespace webapi.Models
{
	public class Group
	{
		public string Name { get; set; }

        public List<Student> Students { get; set; }
	}
}
