using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back.Models
{
    public class StudyingDate
    {
        public string Id { get; set; }
        public string Date { get; set; }

        public string UserId { get; set; }
        public User User { get; set; }

        public string CourseId { get; set; }
        public Course Course { get; set; }
    }
}
