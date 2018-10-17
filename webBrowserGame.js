function wolfGame () {

  var r = confirm("Lets play a game?")
  if (r === true){
    var x = prompt("Choose a role: hunter or Prey?")
    if (x === "hunter"){
        var t = confirm("Noooooo! Run now!") 
        if(t === true){
            alert("I survive")
        }
        else {alert("you are dead")}
     }
    else if (x === "prey"){
        var w = confirm("grab a sword?")
        if (w === true){
            alert("you win")
        }
        else {alert("NOOOOOOOOOO!")}
    }
}
  else {
      var y = alert("you have no choice!!!")

    }
}
// HOW TO RETURN TO PREV CODES?
console.log(wolfGame());