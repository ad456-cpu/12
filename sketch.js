const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//defining the background
var backgroundImg;
//creating an array for the snow
var letsnow =[];



function preload(){
  // loading the background image
  backgroundImg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(800,400);
}

function draw() {
  //craeting the background
  background(backgroundImg);
    
  drawSprites();
}