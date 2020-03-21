//On Ready
$(document).ready(function(){

    //Save Button functionality
    $('.saveBtn').on('click', function(){
        //get nearby values
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr('id');

        // //save to localStorage
        localStorage.setItem(time, value);
    });

    //Hour Updater
    function hourUpdater(){
        //gets the current number of hours
        var currentHour = moment().hours();

        //loop over time blocks
        $(".time-block").each(function(){
            var blockHour = parseInt($(this).attr('id').split("-")[1]);
            
            //check to see if we have passed time
            if(blockHour < currentHour){
                $(this).addClass("past");
            }
            else if(blockHour === currentHour){
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else{
                $(this).removeClass("past, present");
                $(this).addClass("future");
            }
        })
    }

    //Calling HourUpdater
    hourUpdater();

    var interval = setInterval(hourUpdater, 15000);

    //Loading Local Storage saved
    $('#hour-9 .description').val(localStorage.getItem("hour-9"));
    $('#hour-10 .description').val(localStorage.getItem("hour-10"));
    $('#hour-11 .description').val(localStorage.getItem("hour-11"));
    $('#hour-12 .description').val(localStorage.getItem("hour-12"));
    $('#hour-13 .description').val(localStorage.getItem("hour-13"));
    $('#hour-14 .description').val(localStorage.getItem("hour-14"));
    $('#hour-15 .description').val(localStorage.getItem("hour-15"));
    $('#hour-16 .description').val(localStorage.getItem("hour-16"));
    $('#hour-17 .description').val(localStorage.getItem("hour-17"));

    //Displaying current day on the page 
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
});