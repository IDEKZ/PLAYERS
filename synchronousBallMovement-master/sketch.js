var canvas, database;
var position;
var gameState=0
var playerCount;
var form, player,game

function setup(){
  console.log(database);
  createCanvas(500,500);
  database = firebase.database();
  game=new Game()
  game.getState()
  game.start();
}

function draw(){
  
}