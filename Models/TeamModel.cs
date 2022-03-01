using System.ComponentModel.DataAnnotations;

namespace EffortSheet.Models;

public class TeamModel
{
    [Key]
    public int TeamId { get; set; }

    public string ForwardedTeam {get; set;}
}
