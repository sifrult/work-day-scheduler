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
    var currentHour = dayjs().get('hour');
    console.log(currentHour);

    // Adds classes depending on which hour of the day it is currently
    $(".time-block").each(function() {
        var hourNow = parseInt($(this).attr("id").replace('hour-', ''));

        if (hourNow < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        } else if (hourNow == currentHour) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        } else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    })

    // Grabs previously saved items from local storage
    $("#hour-8 .description").text(localStorage.getItem("hour-8"));
    $("#hour-9 .description").text(localStorage.getItem("hour-9"));
    $("#hour-10 .description").text(localStorage.getItem("hour-10"));
    $("#hour-11 .description").text(localStorage.getItem("hour-11"));
    $("#hour-12 .description").text(localStorage.getItem("hour-12"));
    $("#hour-13 .description").text(localStorage.getItem("hour-13"));
    $("#hour-14 .description").text(localStorage.getItem("hour-14"));
    $("#hour-15 .description").text(localStorage.getItem("hour-15"));
    $("#hour-16 .description").text(localStorage.getItem("hour-16"));
    $("#hour-17 .description").text(localStorage.getItem("hour-17"));

    if (currentHour === 1) {
        localStorage.clear("hour-8");
    }

});
