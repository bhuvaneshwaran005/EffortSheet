using System.ComponentModel.DataAnnotations;

namespace EffortSheet.Models;

public class FilterModel
{
    [Key]
    public int Id { get; set; }

    public DateTime? startDate {get; set;}

    public DateTime? endDate {get; set;}

    public string Name {get; set;}
}
