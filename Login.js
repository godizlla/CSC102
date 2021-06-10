function checkCreds(){
    //check if started or not
    console.log("Checking has Started")
    //grabbing input from hmtl and make it to var for java
    var fristname = document.getElementById("fName").value;
    var lastname = document.getElementById("lName").value;
    var codenumber = document.getElementById("codeID").value;

    var fullname = fristname + " " + lastname;

    //Shows that all inputs are made
    console.log("Fist name is: " + fristname + ", last name is: " + lastname + ", and code ID is: " + codenumber);
    console.log("Full name " + fullname)

    if(fullname.length > 20){
        document.getElementById("loginStaus").innerHTML = "Full name has too many characters! Please try again..."
    }else if (codenumber > 999){
        document.getElementById("loginStaus").innerHTML = "Invaded Code"
    }else {
        alert("Welcome Back" + fullname);
        location.replace("index.html");
    }

}