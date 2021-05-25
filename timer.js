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


/* Dice Roll  */

function playcraps(){
    //For the consloe to log
    console.log("Craps Game Started")
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    var dieSum = die1 + die2;
    document.getElementById("diceSum").innerHTML = dieSum;
    if(dieSum == 7 || dieSum == 11){
        document.getElementById("crapsStatus").innerHTML = "Craps! You Lose";
    }else if (die1 == die2 && die1 % 2 ==0){
        document.getElementById("crapsStatus").innerHTML = "Double You Win";
    }else {
        document.getElementById("crapsStatus").innerHTML = "You didn't win or lose roll again"
    }
}