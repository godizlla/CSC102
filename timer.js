/*
To do list
counts down from 50 to 0 using a variable x 
decrements the variable x 
delays 5 seconds between each call to the function setTimeOut() x
outputs the current time until launch x
outputs message when the current time = 0 x */ 

function countdowntimer(){
    console.log("Countdown Started");
    var currTime = 50;
    document.getElementById("countdownstatus").innerHTML = currTime;
    currTime = currTime - 5;
    setTimeout(function(){
        //The Action After Timeout
        document.getElementById("countdownstatus").innerHTML = currTime;
    currTime = currTime - 5;
    }, 5000);

    //45
    setTimeout(function(){
        //The Action After Timeout
        document.getElementById("countdownstatus").innerHTML = currTime;
    currTime = currTime - 5;
    }, 10000);

    //40
    setTimeout(function(){
        //The Action After Timeout
        document.getElementById("countdownstatus").innerHTML = currTime;
    currTime = currTime - 5;
    }, 15000);

    //35
    setTimeout(function(){
        //The Action After Timeout
        document.getElementById("countdownstatus").innerHTML = "WoW We Waited For 50 Seconds" ;
    currTime = currTime - 5;
    }, 50000);
}