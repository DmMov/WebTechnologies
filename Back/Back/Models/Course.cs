using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back.Models
{
    public class Course
    {
        public string Id { get; set; }
        public string CourseName { get; set; }
        public string Complexity { get; set; }
        public string CourseHeaderColor { get; set; }
        public string Description { get; set; }
        public int DurationCount { get; set; }
        public string DurationUnit { get; set; }
        public string CourseLogo { get; set; }
    }
}
