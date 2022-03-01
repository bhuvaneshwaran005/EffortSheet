using System.ComponentModel.DataAnnotations;

namespace EffortSheet.Models;

public class PriorityModel
{
    [Key]
    public int PriorityId { get; set; }

    public string Priority {get; set;}
}
