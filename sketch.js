var hr;
var mn
var sec
var secAngle;
var mnAngle;
var hrAngle;


function setup() {
  createCanvas(500,500);
  angleMode(DEGREES)

 // hr=hour()
 // mn=minute()
 // sec=second()
}

function draw() {
  background("black"); 

  hr=hour()
  mn=minute()
  sec=second()

  //text('Current hour:' + hr, 50, 450);
  //text('Current minute:' + mn, 150, 450);
  //text('Current second:' + sec, 270, 450);

  text('time:'+hr,350,100)
  text(':'+mn,390,100)
  text(':'+sec,410,100)

  textSize(20)
  text('TICK TOCK CLOCK!!',50,450)

  translate(200,200)

  noFill()
  //second
  stroke("red")
  strokeWeight(7)
  //translate(200,200)
  secAngle=map(sec,0,60,0,360)
  arc(0,0,300,300,0,secAngle);

  //minute
  stroke("green")
  strokeWeight(7)
  //translate(200,200)
  mnAngle=map(mn,0,60,0,360)
  arc(0,0,280,280,0,mnAngle)

  //hour
  stroke("blue")
  strokeWeight(7)
  //translate(200,200)
  hrAngle=map(hr%12,0,12,0,360)
  arc(0,0,260,260,0,hrAngle)
 
  push()
  rotate(secAngle)
  stroke("red")
  strokeWeight(5)
  //translate(200,200)
  line(0,0,100,0)
  pop()

  push()
  rotate(mnAngle)
  stroke("green")
  strokeWeight(5)
 // translate(200,200)
  line(0,0,75,0)
  pop()

  push()
  rotate(hrAngle)
  stroke("blue")
  strokeWeight(5)
 // translate(200,200)
  line(0,0,50,0)
  pop()

  drawSprites()
}