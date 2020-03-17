//On Ready
$(document).ready(function(){

    //Save Button functionality


    //Hour Updater
    function hourUpdater(){
        //gets the current number of hours
        var currentHour = 12 //moment().hours();

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

    //Loading Local Storage saved


    //Displaying current day on the page 
});