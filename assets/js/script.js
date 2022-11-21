var date = $('#currentDay');
var saveBtn = $('.saveBtn');

var todaysDate = dayjs().format('dddd MMM DD, YYYY');
date.text(todaysDate);

$(function () {
    // Saves description on click
    saveBtn.on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    // Current hour of the day
    var currentHour = dayjs().format('H');

    // Adds classes depending on which hour of the day it is currently
    $(".time-block").each(function() {
        var hourNow = parseInt($(this).attr("id").replace('hour-', ''));
        console.log (hourNow);

        if (hourNow < currentHour) {
            $(this).addClass("past");
        }

        else if (hourNow == currentHour) {
            $(this).addClass("present");
        }

        else {
            $(this).addClass("future");
        }
    })

    // Grabs previously saved items from local storage
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

});
