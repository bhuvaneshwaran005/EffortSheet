// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var path = window.location.pathname;
var pathArray = path.split("/");
var action = pathArray[2];
(function () {
    console.log(action);
    pageLoad();
})();

function pageLoad(){
    
    var currentTr;
    var currentTrName;
    var currentTrActivity;
    var currentTrDescription;
    var currentTrReference;
    var currentTrPriority;
    var currentTrHours;
    var currentTrForwardedTeam;

    console.log("dom started")
    document.querySelectorAll("#tableRowDate").forEach(a => {
        a.addEventListener("click", function () {
            if (currentTr) {
                updateButton.click();
            }
            if (currentTrName) {
                updateButton.click();
            }
            if(currentTrActivity){
                updateButton.click();
            }
            if(currentTrDescription){
                updateButton.click();
            }
            if(currentTrReference){
                updateButton.click();
            }
            if(currentTrPriority){
                updateButton.click();
            }
            if(currentTrHours){
                updateButton.click();
            }
            if(currentTrForwardedTeam){
                updateButton.click();
            }
            currentTr = a;
            currentTr.insertAdjacentElement('beforebegin', editRowDate);
            currentTr.hidden = true;
            editDate.value = currentTr.innerText.trim();
            editRowDate.hidden = false;
        });
    });
    document.querySelectorAll("#tableRowName").forEach(a => {
        a.addEventListener("click", function () {
            if (currentTr) {
                updateButton.click();
            }
            if (currentTrName) {
                updateButton.click();
            }
            if(currentTrActivity){
                updateButton.click();
            }
            if(currentTrDescription){
                updateButton.click();
            }
            if(currentTrReference){
                updateButton.click();
            }
            if(currentTrPriority){
                updateButton.click();
            }
            if(currentTrHours){
                updateButton.click();
            }
            if(currentTrForwardedTeam){
                updateButton.click();
            }
            currentTrName = a;
            currentTrName.insertAdjacentElement('beforebegin', editRowName);
            currentTrName.hidden = true;
            editName.value = currentTrName.innerText.trim();
            editRowName.hidden = false;
        });
    });
    document.querySelectorAll("#tableRowActivity").forEach(a => {
        a.addEventListener("click", function () {
            if (currentTr) {
                updateButton.click();
            }
            if (currentTrName) {
                updateButton.click();
            }
            if(currentTrActivity){
                updateButton.click();
            }
            if(currentTrDescription){
                updateButton.click();
            }
            if(currentTrReference){
                updateButton.click();
            }
            if(currentTrPriority){
                updateButton.click();
            }
            if(currentTrHours){
                updateButton.click();
            }
            if(currentTrForwardedTeam){
                updateButton.click();
            }
            currentTrActivity = a;
            currentTrActivity.insertAdjacentElement('beforebegin', editRowActivity);
            currentTrActivity.hidden = true;
            editActivity.value = currentTrActivity.innerText.trim();
            editRowActivity.hidden = false;
        });
    });
    document.querySelectorAll("#tableRowDescription").forEach(a => {
        a.addEventListener("click", function () {
            if (currentTr) {
                updateButton.click();
            }
            if (currentTrName) {
                updateButton.click();
            }
            if(currentTrActivity){
                updateButton.click();
            }
            if(currentTrDescription){
                updateButton.click();
            }
            if(currentTrReference){
                updateButton.click();
            }
            if(currentTrPriority){
                updateButton.click();
            }
            if(currentTrHours){
                updateButton.click();
            }
            if(currentTrForwardedTeam){
                updateButton.click();
            }
            currentTrDescription = a;
            currentTrDescription.insertAdjacentElement('beforebegin', editRowDescription);
            currentTrDescription.hidden = true;
            editDescription.value = currentTrDescription.innerText.trim();
            editRowDescription.hidden = false;
        });
    });
    document.querySelectorAll("#tableRowReference").forEach(a => {
        a.addEventListener("click", function () {
            if (currentTr) {
                updateButton.click();
            }
            if (currentTrName) {
                updateButton.click();
            }
            if(currentTrActivity){
                updateButton.click();
            }
            if(currentTrDescription){
                updateButton.click();
            }
            if(currentTrReference){
                updateButton.click();
            }
            if(currentTrPriority){
                updateButton.click();
            }
            if(currentTrHours){
                updateButton.click();
            }
            if(currentTrForwardedTeam){
                updateButton.click();
            }
            currentTrReference = a;
            currentTrReference.insertAdjacentElement('beforebegin', editRowReference);
            currentTrReference.hidden = true;
            editReference.value = currentTrReference.innerText.trim();
            editRowReference.hidden = false;
        });
    });
    document.querySelectorAll("#tableRowPriority").forEach(a => {
        a.addEventListener("click", function () {
            if (currentTr) {
                updateButton.click();
            }
            if (currentTrName) {
                updateButton.click();
            }
            if(currentTrActivity){
                updateButton.click();
            }
            if(currentTrDescription){
                updateButton.click();
            }
            if(currentTrReference){
                updateButton.click();
            }
            if(currentTrPriority){
                updateButton.click();
            }
            if(currentTrHours){
                updateButton.click();
            }
            if(currentTrForwardedTeam){
                updateButton.click();
            }
            currentTrPriority = a;
            currentTrPriority.insertAdjacentElement('beforebegin', editRowPriority);
            currentTrPriority.hidden = true;
            editPriority.value = currentTrPriority.innerText.trim();
            editRowPriority.hidden = false;
        });
    });
    document.querySelectorAll("#tableRowHours").forEach(a => {
        a.addEventListener("click", function () {
            if (currentTr) {
                updateButton.click();
            }
            if (currentTrName) {
                updateButton.click();
            }
            if(currentTrActivity){
                updateButton.click();
            }
            if(currentTrDescription){
                updateButton.click();
            }
            if(currentTrReference){
                updateButton.click();
            }
            if(currentTrPriority){
                updateButton.click();
            }
            if(currentTrHours){
                updateButton.click();
            }
            if(currentTrForwardedTeam){
                updateButton.click();
            }
            currentTrHours = a;
            currentTrHours.insertAdjacentElement('beforebegin', editRowHours);
            currentTrHours.hidden = true;
            editHours.value = currentTrHours.innerText.trim();
            editRowHours.hidden = false;
        });
    });
    document.querySelectorAll("#tableRowForwardedTeam").forEach(a => {
        a.addEventListener("click", function () {
            if (currentTr) {
                updateButton.click();
            }
            if (currentTrName) {
                updateButton.click();
            }
            if(currentTrActivity){
                updateButton.click();
            }
            if(currentTrDescription){
                updateButton.click();
            }
            if(currentTrReference){
                updateButton.click();
            }
            if(currentTrPriority){
                updateButton.click();
            }
            if(currentTrHours){
                updateButton.click();
            }
            if(currentTrForwardedTeam){
                updateButton.click();
            }
            currentTrForwardedTeam = a;
            currentTrForwardedTeam.insertAdjacentElement('beforebegin', editRowForwardedTeam);
            currentTrForwardedTeam.hidden = true;
            editForwardedTeam.value = currentTrForwardedTeam.innerText.trim();
            editRowForwardedTeam.hidden = false;
        });
    });
    
    cancelButton.addEventListener("click", function () {
        console.log("cancel clicked");

        if (currentTr) {
            editRowDate.hidden = true;
            reference.insertAdjacentElement('beforebegin', editRowDate);
            currentTr.hidden = false;
        }
        if (currentTrName) {
            editRowName.hidden = true;
            reference.insertAdjacentElement('beforebegin', editRowName);
            currentTrName.hidden = false;
        }
        if(currentTrActivity){
            editRowActivity.hidden = true;
            reference.insertAdjacentElement('beforebegin',editRowActivity);
            currentTrActivity.hidden = false;
        }
        if (currentTrDescription) {
            editRowDescription.hidden = true;
            reference.insertAdjacentElement('beforebegin', editRowDescription);
            currentTrDescription.hidden = false;
        }
        if (currentTrReference) {
            editRowReference.hidden = true;
            reference.insertAdjacentElement('beforebegin', editRowReference);
            currentTrReference.hidden = false;
        }
        if (currentTrPriority) {
            editRowPriority.hidden = true;
            reference.insertAdjacentElement('beforebegin', editRowPriority);
            currentTrPriority.hidden = false;
        }
        if (currentTrHours) {
            editRowHours.hidden = true;
            reference.insertAdjacentElement('beforebegin', editRowHours);
            currentTrHours.hidden = false;
        }
        if (currentTrForwardedTeam) {
            editRowForwardedTeam.hidden = true;
            reference.insertAdjacentElement('beforebegin', editRowForwardedTeam);
            currentTrForwardedTeam.hidden = false;
        }
    });

    updateButton.addEventListener("click", function () {
        console.log("update clicked")

        if (currentTr) {
            editRowDate.hidden = true;
            currentTr.innerText = editDate.value;
            currentTr.hidden = false;
            reference.insertAdjacentElement('beforebegin', editRowDate);
        }
        if (currentTrName) {
            editRowName.hidden = true;
            currentTrName.innerText = editName.value;
            currentTrName.hidden = false;
            reference.insertAdjacentElement('beforebegin', editRowName);
        }
        if (currentTrActivity) {
            editRowActivity.hidden = true;
            currentTrActivity.innerText = editActivity.value;
            currentTrActivity.hidden = false;
            reference.insertAdjacentElement('beforebegin', editRowActivity);
        }
        if (currentTrDescription) {
            if(editDescription.value != ''){
                editRowDescription.hidden = true;
                currentTrDescription.innerText = editDescription.value;
                currentTrDescription.hidden = false;
                reference.insertAdjacentElement('beforebegin', editRowDescription);
            } else{
                toastr.warning("Description is required!");
            }
        }
        if (currentTrReference) {
            editRowReference.hidden = true;
            currentTrReference.innerText = editReference.value;
            currentTrReference.hidden = false;
            reference.insertAdjacentElement('beforebegin', editRowReference);
        }
        if (currentTrPriority) {
            editRowPriority.hidden = true;
            currentTrPriority.innerText = editPriority.value;
            currentTrPriority.hidden = false;
            reference.insertAdjacentElement('beforebegin', editRowPriority);
        }
        if (currentTrHours) {
            if(editHours.value != ''){
                editRowHours.hidden = true;
            currentTrHours.innerText = editHours.value;
            currentTrHours.hidden = false;
            reference.insertAdjacentElement('beforebegin', editRowHours);
            } else{
                toastr.warning("Hours spent is required!");
            }
        }
        if (currentTrForwardedTeam) {
            editRowForwardedTeam.hidden = true;
            currentTrForwardedTeam.innerText = editForwardedTeam.value;
            currentTrForwardedTeam.hidden = false;
            reference.insertAdjacentElement('beforebegin', editRowForwardedTeam);
        }
    });
}

$(document).ready(function () {
    //console.log("jquery dom")
    var oTable = $('#mytable').on('page.dt', function () {
        cancelButton.click();
        if($("#checkedAll").is(":checked"))
            $("#checkedAll").click();
        //console.log('Page' ); 
    }).DataTable({
        //stateSave: true,
        "dom": 'l<"toolbar">frtip'
    });

    
    $('<button class="insert-margin btn" data-toggle="tooltip" data-placement="top" title="Click to Save" onclick="saveSelected()"><i style="color: blueviolet; font-size: 16px;" class="bi bi-check-square-fill"></i></button>').appendTo('#mytable_length');
    $('<button class="btn" data-toggle="tooltip" data-placement="top" title="Click to Clone" onclick="cloneSelected()"><i style="color: blue; font-size: 16px;" class="bi bi-window-stack"></i></button>').appendTo('#mytable_length');
    $('<button class="btn" data-toggle="tooltip" data-placement="top" title="Click to Delete" onclick="deleteSelected()"><i style="color: red; font-size: 16px;" class="bi bi-trash"></i></button>').appendTo('#mytable_length');
    $('<button class="btn" data-toggle="tooltip" data-placement="top" title="Click to Download"><i style=" font-size: 16px;" class="bi bi-download"></i></button>').appendTo('#mytable_length');
    $('<button type="button" id="filterButton" data-toggle="tooltip" data-placement="top" title="Advance filter" class="btn" onclick="openModal()"><i style="color: darkblue; font-size: 16px;" class="bi bi-funnel-fill"></i></button>').appendTo('#mytable_length');

    
    //var allPages = oTable.cells().nodes();

    $("#checkedAll").change(function () {
        console.log("clicked")
        if (this.checked) {
            $('input[type="checkbox"]').prop('checked', true);

        } else {
            $('input[type="checkbox"]').prop('checked', false);
        }
    });

    $(".editCheck").click(function () {
        if ($(this).is(":checked")) {
            var isAllChecked = 0;

            $(".editCheck").each(function () {
                if (!this.checked)
                    isAllChecked = 1;
            });

            if (isAllChecked == 0) {
                $("#checkedAll").prop("checked", true);
            }
        }
        else {
            $("#checkedAll").prop("checked", false);
        }
    });


});

function openModal(){
    console.log("modal opened");
    $('#myModal').show();
}
function closeModal(){
    console.log("modal closed");
    $('#myModal').hide();
}

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
    $('#minDate').datepicker({
        dateFormat: "dd-mm-yy",
        changeMonth: true,
        changeYear: true
    });
    $('#maxDate').datepicker({
        dateFormat: "dd-mm-yy",
        changeMonth: true,
        changeYear: true,
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
            tableRow.remove();
            if($("#checkedAll").val() == 'on'){
                $("#checkedAll").prop('checked',false);
            }
        }
    });
    if (!tableRow)
        toastr.error("select atleast one row to delete!");
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
                var rowCount = $("#mytable tr").length;
                console.log(rowCount);
                        if(rowCount <= 2){
                            if(action == "Index")
                                location.href = "/Home/Index";
                            else
                                location.href = "/Home/Filter";
                        }
            }
        }
    )
}

function cloneSelected() {
    let tableRow;
    $(".editCheck").each(function () {
        if (this.checked == true) {
            tableRow = this.closest('tr');
            //updateButton.click();

            $(this).prop('checked',false);

            if($("#checkedAll").val() == 'on'){
                $("#checkedAll").prop('checked',false);
            }

            var $tableBody = $('#mytable').find("tbody")
            var $trLast = $tableBody.find("tr:last")

            var $tr    = $(this).closest('tr');
            var $clone = $tr.clone();
            $clone.find(':text').val('');
            $clone.find(':checkbox:checked').prop('checked',false);
            $trLast.after($clone);

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
                        var rowCount = $("#mytable tr").length;
                        if(rowCount > 11){
                            if(action == "Index")
                                location.href = "/Home/Index";
                            else
                                location.href = "/Home/Filter";
                                
                        }
                    },
                    error: function(_response){
                        toastr.warning("Save before clone this row!");
                    }
                }
            )
        }
    });
    if (!tableRow)
        toastr.error("select atleast one row to clone!");
}

function saveSelected() {

    let tableRow;
    $(".editCheck").each(function () {
        if (this.checked == true) {
            tableRow = this.closest('tr');
            updateButton.click();

            $(this).prop('checked',false);
            if($("#checkedAll").val() == 'on'){
                $("#checkedAll").prop('checked',false);
            }

            var id = tableRow.cells[0].innerText.trim();
            var dateOfActivity = tableRow.cells[2].innerText.trim();
            var name = tableRow.cells[3].innerText.trim();
            var tower = tableRow.cells[4].innerText.trim();
            var activity = tableRow.cells[5].innerText.trim();
            var description = tableRow.cells[6].innerText.trim();
            var reference = tableRow.cells[7].innerText.trim();
            var priority = tableRow.cells[8].innerText.trim();
            var hours = tableRow.cells[9].innerText.trim();
            var forwardedTeam = tableRow.cells[10].innerText.trim();


            if (id != 'ID') {

                var model = {
                    Id: id,
                    DateOfActivity: dateOfActivity,
                    Name: name,
                    Tower: tower,
                    Activity: activity,
                    Description: description,
                    Reference: reference,
                    Priority: priority,
                    Hours: hours,
                    ForwardedTeam: forwardedTeam
                }
                console.log(model);
                $.ajax(
                    {
                        type: "POST",
                        url: "/Home/Edit",
                        data: model,
                        success: function (_response) {
                            //location.href = "/Home/Index";
                        }
                    }
                )
            }
        }
    });
    if (!tableRow)
        toastr.error("select atleast one row to save!");
}

function download(){
    console.log("download started");
    $.ajax(
        {
            type: "GET",
            url: "/Home/Download",
            success: function (_response) {
                location.href = "/Home/Download";
                console.log("download completed!");
            }
        }
    )
}

function filter(){
    closeModal();
    var model = {
        Id: 1,
        startDate : $('#minDate').val(),
        endDate : $('#maxDate').val(),
        Name : $('#empName').val()
    }
    $.ajax({
        type:"POST",
        url: "/Home/PostFilter",
        data: model,
        success: function(data){
            console.log("filtered!");
            location.href = "/Home/Filter"
        }
    })
}


 // $('table').on('click', '#checkedAll', function () {

    //     if ($(this).hasClass('editCheck')) {
    //         $('input[type="checkbox"]', allPages).prop('checked', false);
    //     } else {
    //         $('input[type="checkbox"]', allPages).prop('checked', true);
    //     }
    //     $(this).toggleClass('editCheck');
    // });



    
            // if (!dateOfActivity) {
            //     console.log('update date:' + editDate.value);
            //     dateOfActivity = editDate.value;
            //     updateButton.click();
            //     name = tableRow.cells[4].innerText.trim();
            //     tower = tableRow.cells[5].innerText.trim();
            //     activity = tableRow.cells[6].innerText.trim();
            //     description = tableRow.cells[7].innerText.trim();
            //     reference = tableRow.cells[8].innerText.trim();
            //     priority = tableRow.cells[9].innerText.trim();
            //     hours = tableRow.cells[10].innerText.trim();
            //     forwardedTeam = tableRow.cells[11].innerText.trim();
            // }
            // let nameFix1 = 'select\nAnantha\nArthi\nBala\nBhuvanesh\nJayakrishnan\nVignesh';
            // let nameFix2 = "select\n                        Anantha\n                        Arthi\n                        Bala\n                        Bhuvanesh\n                        Jayakrishnan\n                        Vignesh";
            // if (name == nameFix1 || name == nameFix2) {
            //     console.log('update name:' + editName.value);
            //     name = editName.value;
            //     updateButton.click();
            //     tower = tableRow.cells[6].innerText.trim();
            //     activity = tableRow.cells[7].innerText.trim();
            //     description = tableRow.cells[8].innerText.trim();
            //     reference = tableRow.cells[9].innerText.trim();
            //     priority = tableRow.cells[10].innerText.trim();
            //     hours = tableRow.cells[11].innerText.trim();
            //     forwardedTeam = tableRow.cells[12].innerText.trim();
            // }