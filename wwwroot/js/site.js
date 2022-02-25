// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {

    var oTable = $('#mytable').on('page.dt',function () { 
        cancelButton.click();
        //console.log('Page' ); 
    }).DataTable({
        stateSave : true,
        "dom": 'l<"toolbar">frtip'
    });
    
    $('<button class="btn btn-light" onclick="deleteSelected()"><i style="color: red; font-size: 16px;" class="bi bi-trash"></i></button>').appendTo('#mytable_length');
    $('<button class="btn" onclick="cloneSelected()"><i style="color: blue; font-size: 16px;" class="bi bi-window-stack"></i></button>').appendTo('#mytable_length');
    
    var allPages = oTable.cells().nodes();

    $('table').on('click','#checkedAll', function(){
        if($(this).hasClass('editCheck')){
            $('input[type="checkbox"]',allPages).prop('checked',false);
        } else{
            $('input[type="checkbox"]',allPages).prop('checked',true);
        }
        $(this).toggleClass('editCheck');
    });

    // $("#checkedAll").change(function () {
    //     console.log("clicked")
    //     if (this.checked) {
    //         $(".editCheck").each(function () {
    //             this.checked = true;
    //         });
    //     } else {
    //         $(".editCheck").each(function () {
    //             this.checked = false;
    //         });
    //     }
    // });

    // $(".editCheck").click(function () {
    //     if ($(this).is(":checked")) {
    //         var isAllChecked = 0;

    //         $(".editCheck").each(function () {
    //             if (!this.checked)
    //                 isAllChecked = 1;
    //         });

    //         if (isAllChecked == 0) {
    //             $("#checkedAll").prop("checked", true);
    //         }
    //     }
    //     else {
    //         $("#checkedAll").prop("checked", false);
    //     }
    // });
});

$(function () {
    $('#editDate').datepicker({
        dateFormat: "dd-mm-yy",
        changeMonth: true,
        changeYear: true
    });
    $('#insertDate').datepicker({
        dateFormat: "dd-mm-yy",
        changeMonth: true,
        changeYear: true
    });
})

function insert() {
    var checkvalue = $('#insertDate').val();
    var checkName = $('#insertName').val();
    var checkActivity = $('#insertActivity').val();
    var checkDescription = $('#insertDescription').val();
    var checkHours = $('#insertHours').val();

    if (checkvalue == null || checkvalue == '') {
        console.log("date required");
        toastr.warning("Date is required");
    }
    else if (checkName == null || checkName == '') {
        console.log("name required");
        toastr.warning("Name is required");
    }
    else if (checkActivity == null || checkActivity == '') {
        console.log("activity required");
        toastr.warning("Activity is required");
    }
    else if (checkDescription == null || checkDescription == '') {
        console.log("Description required");
        toastr.warning("Description is required");
    }
    else if (checkHours == null || checkHours == '') {
        console.log("Hours required");
        toastr.warning("Hours spent is required");
    }
    else {

        var model = {
            DateOfActivity: $('#insertDate').val(),
            Name: $('#insertName').val(),
            Tower: $('#insertTower').val(),
            Activity: $('#insertActivity').val(),
            Description: $('#insertDescription').val(),
            Reference: $('#insertReference').val(),
            Priority: $('#insertPriority').val(),
            Hours: $('#insertHours').val(),
            ForwardedTeam: $('#insertForwardedTeam').val()
        }

        $.ajax(
            {
                type: "POST",
                url: "/Home/Add",
                data: model,
                success: function (_response) {
                    location.href = "/Home/Index";
                }
            }
        )
    }
}

function update(id) {

    var model = {
        Id: id,
        DateOfActivity: $('#editDate').val(),
        Name: $('#editName').val(),
        Tower: $('#editTower').val(),
        Activity: $('#editActivity').val(),
        Description: $('#editDescription').val(),
        Reference: $('#editReference').val(),
        Priority: $('#editPriority').val(),
        Hours: $('#editHours').val(),
        ForwardedTeam: $('#editForwardedTeam').val()
    }
    console.log(model);
    $.ajax(
        {
            type: "POST",
            url: "/Home/Edit",
            data: model,
            success: function (_response) {
                //window.location.href = "/Home/Index";
            }
        }
    )
}

function deleteSelected() {
    let tableRow;

    $(".editCheck").each(function () {
        if (this.checked == true) {
            tableRow = this.closest('tr');
            var id = tableRow.cells[0].innerText.trim();
            onDelete(id);
        }
    });
    if(!tableRow)
        toastr.error("select atleast one row!");
}

function onDelete(tempId) {
    var model = {
        Id: tempId,
        DateOfActivity: $('#editDate').val(),
        Name: $('#editName').val(),
        Tower: $('#editTower').val(),
        Activity: $('#editActivity').val(),
        Description: $('#editDescription').val(),
        Reference: $('#editReference').val(),
        Priority: $('#editPriority').val(),
        Hours: $('#editHours').val(),
        ForwardedTeam: $('#editForwardedTeam').val()
    }

    $.ajax(
        {
            type: "POST",
            url: "/Home/Delete",
            data: model,
            success: function (_response) {
                window.location.href = "/Home/Index";

            }
        }
    )
}

function cloneSelected(){
    let tableRow;
    $(".editCheck").each(function () {
        if (this.checked == true) {
            tableRow = this.closest('tr');

            var model = {
                DateOfActivity: tableRow.cells[2].innerText.trim(),
                Name: tableRow.cells[3].innerText.trim(),
                Tower: tableRow.cells[4].innerText.trim(),
                Activity: tableRow.cells[5].innerText.trim(),
                Description: tableRow.cells[6].innerText.trim(),
                Reference: tableRow.cells[7].innerText.trim(),
                Priority: tableRow.cells[8].innerText.trim(),
                Hours: tableRow.cells[9].innerText.trim(),
                ForwardedTeam: tableRow.cells[10].innerText.trim()
            }
            $.ajax(
                {
                    type: "POST",
                    url: "/Home/Add",
                    data: model,
                    success: function (_response) {
                        location.href = "/Home/Index";
                    }
                }
            )
        }
    });
    if(!tableRow)
        toastr.error("select atleast one row!");
}