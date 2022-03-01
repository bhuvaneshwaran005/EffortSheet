using System.ComponentModel.DataAnnotations;

namespace EffortSheet.Models;

public class ActivityModel
{
    [Key]
    public int ActivityId { get; set; }

    public string Activity {get; set;}
}
