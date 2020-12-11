class Form{
constructor(){
}

display(){
var title=createElement("h4");
title.html("Car Game")
title.position(150,0)
var input =createInput("ENTER YOUR NAME") 
input.position(150,160)
var button=createButton("PRESS WHEN READY");
button.position(250,200);
var greeting=createElement("h5")
button.mousePressed(function(){
input.hide()
button.hide()
var name =imput.value()
playerCount+=1;
player.update(name)
player.updateCount(playerCount)
greeting.html("hello"+name)
greeting.position(200,200)
})
}
}