using System;
using webapi.Models;
using System.Collections.Generic;

namespace webapi.Services
{
    public static class GroupService
    {
        static List<Group> Groups { get; }
        static GroupService() //считывыание из базы даннх / json / ...
        {
            Groups = new List<Group>
            {
                new Group {Name = "M3100", Students = null },
                new Group { Name = "M3101", Students = null }
            };
        }

        public static List<Group> GetAll() => Groups;

        public static Group Get(string name)
        {
            foreach (var item in Groups)
            {
                if (item.Name == name)
                {
                    return item;
                }
            }
            return null;
        }

        public static void Add(Group group)
        {
            Groups.Add(group);
        }

        public static void Delete(string name)
        {
            var group = Get(name);
            if (group is null)
                return;

            Groups.Remove(group);
        }
    }
}

