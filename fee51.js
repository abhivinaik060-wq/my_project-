let name=prompt("What is your name?");
let isSure=confirm("Is your name " + name + "?");

if(isSure){
    alert("Welcome " + name + "!");
}else{
    alert("Please try again.");
}