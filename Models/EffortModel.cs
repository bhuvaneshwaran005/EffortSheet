using System.ComponentModel.DataAnnotations;

namespace EffortSheet.Models{
    public class EffortModel{
        [Key]
        public int Id {get; set;}
        public DateTime DateOfActivity {get; set;}
        [Required]
        public string Name {get; set;}
        public string Tower {get; set;} = "Launchpad";
        [Required]
        public string Activity {get; set;}
        [Required]
        public string Description {get; set;}
        public string Reference {get; set;}
        public string Priority {get; set;}
        public string ForwardedTeam {get; set;}
        [Required]
        [Range(0.1,24)]
        public decimal Hours {get; set;}
    }
}