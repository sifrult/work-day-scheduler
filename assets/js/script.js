var date = $('#currentDay');
var saveBtn = $('.saveBtn');

var todaysDate = dayjs().format('dddd MMM DD, YYYY');
date.text(todaysDate);

$(function () {
    saveBtn.on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

//     // TODO: Add code to apply the past, present, or future class to each time
//     // block by comparing the id to the current hour. HINTS: How can the id
//     // attribute of each time-block be used to conditionally add or remove the
//     // past, present, and future classes?

    var currentHour = dayjs().format('H');
    console.log(currentHour);


    $(".time-block").each(function() {
        var hourNow = $(this).attr("id").replace('hour-', '');
        console.log (hourNow);

        if (hourNow < currentHour) {
            $(this).addClass("past");
        }

        if (hourNow === currentHour) {
            $(this).addClass("present");
        }
    })




//     // TODO: Add code to get any user input that was saved in localStorage and set
//     // the values of the corresponding textarea elements. HINT: How can the id
//     // attribute of each time-block be used to do this?



});
