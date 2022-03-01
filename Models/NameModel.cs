using System.ComponentModel.DataAnnotations;

namespace EffortSheet.Models;

public class NameModel
{
    [Key]
    public int NameId { get; set; }

    public string Name {get; set;}
}
