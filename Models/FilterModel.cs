using System.ComponentModel.DataAnnotations;

namespace EffortSheet.Models;

public class FilterModel
{
    [Key]
    public int Id { get; set; }

    public string startDate {get; set;}

    public string endDate {get; set;}

    public string Name {get; set;}
}
