﻿using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using EffortSheet.Models;
using EffortSheet.Data;
using System.Text;

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
        IEnumerable<NameModel> names = _db.NameList.ToList();
        ViewBag.nameList = names;
        IEnumerable<ActivityModel> activities = _db.ActivityList.ToList();
        ViewBag.activityList = activities;
        IEnumerable<TeamModel> teams = _db.TeamList.ToList();
        ViewBag.teamList = teams;
        IEnumerable<PriorityModel> priorities = _db.PriorityList.ToList();
        ViewBag.priorityList = priorities;
        
        IEnumerable<EffortModel> lst = _db.EffortTracker.ToList();
        return View(lst);
    }

    [HttpPost]
    public IActionResult Add(EffortModel obj){
        if(ModelState.IsValid){
            _db.EffortTracker.Add(obj);
            _db.SaveChanges();
            return RedirectToAction("Index"); 
        }
        return View(obj);
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

        _db.EffortTracker.Remove(Effort);
        _db.SaveChanges();

        return RedirectToAction("Index");
    }

     public IActionResult Download()
    {
        IEnumerable<EffortModel> obj = _db.EffortTracker.ToList().OrderBy(x => x.Name);
        var builder = new StringBuilder();
        builder.AppendLine("Date,Name,Tower,Activity,Description,Reference,Priority,Hours Spent,Forwarded Team");
        foreach (var item in obj)
        {
            builder.AppendLine($"{item.DateOfActivity.ToString("dd-MM-yyyy")},"+
                                $"{item.Name},{item.Tower},{item.Activity},"+
                                    $"{item.Description},{item.Reference},{item.Priority},{item.Hours},{item.ForwardedTeam}");
        }
        return File(Encoding.UTF8.GetBytes(builder.ToString()),"text/csv","EffortTracker_"+DateTime.Now.ToString("MMM")+".csv");
    }


    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
