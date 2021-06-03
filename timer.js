/*
To do list
counts down from 50 to 0 using a variable x 
decrements the variable x 
delays 5 seconds between each call to the function setTimeOut() x
outputs the current time until launch x
outputs message when the current time = 0 x */ 

/*function countdowntimer(){
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
*/

/* Dice Roll  */

function playcraps(){
    //For the consloe to log
    console.log("Craps Game Started")
    // To Id the two diffent Dice
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    //Replaces the elements on the html file with the dice numbers
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    //Adds the two dice number
    var dieSum = die1 + die2;
    //Replaces the elements on the html file with teh dice total
    document.getElementById("diceSum").innerHTML = dieSum;
    //debates if you win or lose 
    if(dieSum == 7 || dieSum == 11){
        //Replaces the elements on the html file with the lose condition
        document.getElementById("crapsStatus").innerHTML = "Craps! You Lose";
        //Replaces the elements on the html file with the win condition 
    }else if (die1 == die2 && die1 % 2 ==0){
        document.getElementById("crapsStatus").innerHTML = "Double You Win";
    }else {
        ////Replaces the elements on the html file with retry condition
        document.getElementById("crapsStatus").innerHTML = "You didn't win or lose roll again"
    }
}

// Better Timer
function btrTimer(){
    console.log("btrTimer started")
    var currTime = 50;
    //the loop for the count down timer 
    for(var i = 0; i < 10; i++){
        //how the loop is shown on the html
        setTimeout(function(){
            document.getElementById("countdownstatus").innerHTML = currTime;
            currTime = currTime -5;
        },5000 * i);
    }
    //end of countdown timer shows a message 
    setTimeout(function(){
        document.getElementById("countdownstatus").innerHTML = "Blastoff!";
    },5000);
}

// Better Timer if statements 

function btrTimer(){
    console.log("btrTimer if's starts")
    var currTime = 50;
    for(var i = 0; i < 11; i++){
        if(i == 10){
            //  at end says blast off
            setTimeout(function(){
                document.getElementById("countdownstatus").innerHTML = "Blastoff!!";
                currTime = currTime -5;
            },5000 * i);
        } else if (i > 4){
            //less than half says less then half and current time
            setTimeout(function(){
            document.getElementById("countdownstatus").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime;
            currTime = currTime -5;
            },5000 * i);

        }
        else {
            // if not at zero or at half says current time
            setTimeout(function(){
                document.getElementById("countdownstatus").innerHTML = currTime;
                currTime = currTime -5;
                },5000 * i);
        }
    }
}