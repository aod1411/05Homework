$(document).ready(function(){

    // getting current day from moment.js
    $('#currentDay').text(moment().format("dddd, MMMM Do"))
$(".saveBtn").on('click', function(event){
    event.preventDefault();

    // getting use text value from each time block using 'this'
var userText = $(this).siblings(".description").val();
// getting each parents id to save as the key 
var time = $(this).parent().attr('id');

// saving our events to localStorage with the time block as the key and the user text area as the value
localStorage.setItem(time, userText);

// adding class of show to show that the task has been saved to localStorage
$('.notification').addClass("show")

// setting a timer for 5 seconds to remove the notification
setTimeout(function(){
    $('.notification').removeClass("show")
}, 5000)
})

function keepCurrentTime(){
var currentHour = moment().hours();
console.log("OUR CURRENT HOUR",currentHour)


$('.time-block').each(function(){
    // taking the id of each time block and removing the hour- so on the number is left and using parseInt to make it an integer so we can test it against our current hour
    var timeBlockHour = parseInt($(this).attr('id').split('-')[1])

console.log("OUR TIMEBLOCK ", timeBlockHour)

// testing our time blocks against the current hour of the day via moment.js to add classes of past, present, futre
if(timeBlockHour < currentHour){
    $(this).addClass("past")
} else if (timeBlockHour === currentHour){
    $(this).removeClass("past")
    $(this).addClass("present")
} else {
    $(this).removeClass("past")
    $(this).removeClass("present")
    $(this).addClass("future")
}

})


}

keepCurrentTime();

$("#hour-9 .description").val(localStorage.getItem('hour-9'))
$("#hour-10 .description").val(localStorage.getItem('hour-10'))
$("#hour-11 .description").val(localStorage.getItem('hour-11'))
$("#hour-12 .description").val(localStorage.getItem('hour-12'))
$("#hour-13 .description").val(localStorage.getItem('hour-13'))
$("#hour-14 .description").val(localStorage.getItem('hour-14'))
$("#hour-15 .description").val(localStorage.getItem('hour-15'))
$("#hour-16 .description").val(localStorage.getItem('hour-16'))
$("#hour-17 .description").val(localStorage.getItem('hour-17'))
})