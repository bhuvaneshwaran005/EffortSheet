using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using EffortSheet.Models;
using EffortSheet.Data;


namespace EffortSheet.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    private readonly ApplicationDbContext _db;

    public HomeController(ILogger<HomeController> logger, ApplicationDbContext db)
    {
        _logger = logger;
        _db = db;
    }

    public IActionResult Index()
    {
        IEnumerable<EffortModel> lst = _db.EffortTracker.ToList();
        return View(lst);
    }

    [HttpPost]
    public IActionResult Add(EffortModel obj){
        if(ModelState.IsValid){
            _db.EffortTracker.Add(obj);
            _db.SaveChanges(); 
        }
        return RedirectToAction("Index");
    }

    [HttpPost]

    public IActionResult Edit(EffortModel obj){
        if(ModelState.IsValid){
            var Effort = _db.EffortTracker.Find(obj.Id);
            Effort.DateOfActivity = obj.DateOfActivity;
            Effort.Name = obj.Name;
            Effort.Activity = obj.Activity;
            Effort.Description = obj.Description;
            Effort.Reference = obj.Reference;
            Effort.Priority = obj.Priority;
            Effort.Hours = obj.Hours;
            Effort.ForwardedTeam = obj.ForwardedTeam;

            _db.EffortTracker.Update(Effort);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }
        return View(obj);
    }

    [HttpPost]
    public IActionResult Delete(EffortModel obj){
        int? id = obj.Id;

        if(id == 0 || id == null)
        {
            return NotFound();
        }
        
        EffortModel Effort = _db.EffortTracker.Find(id);

        // if(Effort == null)
        // {
        //     return NotFound();
        // }
        _db.EffortTracker.Remove(Effort);
        _db.SaveChanges();

        return RedirectToAction("Index");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
