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
                new Group 
                {
                    Name = "M3100", 
                    Students = new List<Student>
                    {
                        new Student
                        {
                            Name = "Evegniy",
                            Surename = "Pesochin",
                            ID = 334773,
                            Group = "M3100"
                        },
                        new Student
                        {
                            Name = "Emin",
                            Surename = "Kerimov",
                            ID = 333222,
                            Group = "M3100"
                        }
                    }
                },
                new Group 
                { 
                    Name = "M3101", 
                    Students =  new List<Student>
                    {
                        new Student
                        {
                            Name = "Kto",
                            Surename = "-to",
                            ID = 123456,
                            Group = "M3101"
                        }
                    }
                }
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

        public static Student Get_Student(int ID)
        {
            foreach (var item in Groups)
            {
                foreach (var student in item.Students)
                {
                    if (student.ID == ID)
                        return student;
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

