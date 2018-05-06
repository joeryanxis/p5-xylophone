var serial; 
var portName = 'COM8';
var noteC,noteD,noteE,noteF,noteG,noteA,noteB,noteCc;
var i = 255, o, phylloC = 18;
var phylloN = 0, phylloAngle = 137.5;
var ballX = 0, ballY = 0, speedX = 3, speedY = 3;
var ball2X = 700, ball2Y = 500, speed2X = 4, speed2Y = 6;
var ball3X = 400, ball3Y = 2, speed3X = 5, speed3Y = 5;
var ball4X = 200, ball4Y = 200, speed4X = 6, speed4Y = 3;
var bigness = 50;
var posX = 100;
var posY = 400;
var pos2X = 700;
var pos2Y = 600;
var pos3X = 500;
var pos3Y = 200;
var pos4X = 300;
var pos4Y = 200;
var stars = [];
var drops= [];
var rays= [];
var modeC = false, modeD = false, modeE = false, modeF = false, modeG = false, modeA = false, modeB = false, modeCc = false;
var count = 0;
let x = 0,
    y = 0,
    orig_x = 400,
    orig_y = 300;

let scale = 5.2;
let z = 0, j = 1;
let R = 10,
  r = 70,
  p = 50,
  l = p/r,
  k = r/R;



function setup() {
  createCanvas(1350, 660);
	background('black');
  serial = new p5.SerialPort();

  serial.on('connected', serverConnected);
  serial.on('open', portOpen);
  serial.on('data', serialEvent);
  serial.on('error', serialError);
  serial.on('close', portClose);

  serial.open(portName);
	for(var s = 0; s < 500; s++){
  	stars[s] = new Star();
  }
  for(var d = 0; d < 500; d++){
    drops[d] = new Drop();
  }
  for(var ray = 0; ray < 500; ray++){
    rays[ray] = new Ray();
  }
	//rect(30,30,55,55,10);
  rectMode(CENTER);
  drawKeys();

  
}

function draw() {

    if(noteC > 1){
      modeC = true;
      modeD = false;
      modeE = false;
      modeF = false;
      modeG = false;
      modeA = false;
      modeB = false;
      modeCc = false;
    }
    if(noteD > 1){
      modeC = false;
      modeD = true;
      modeE = false;
      modeF = false;
      modeG = false;
      modeA = false;
      modeB = false;
      modeCc = false;
    }
    if(noteE > 100){
      modeC = false;
      modeD = false;
      modeE = true;
      modeF = false;
      modeG = false;
      modeA = false;
      modeB = false;
      modeCc = false;
    }
    if(noteF > 100){
      modeC = false;
      modeD = false;
      modeE = false;
      modeF = true;
      modeG = false;
      modeA = false;
      modeB = false;
      modeCc = false;
    }
    if(noteG > 1){
      modeC = false;
      modeD = false;
      modeE = false;
      modeF = false;
      modeG = true;
      modeA = false;
      modeB = false;
      modeCc = false;
    }
    if(noteA > 1){
      modeC = false;
      modeD = false;
      modeE = false;
      modeF = false;
      modeG = false;
      modeA = true;
      modeB = false;
      modeCc = false;
    }
    if(noteB > 100){
      modeC = false;
      modeD = false;
      modeE = false;
      modeF = false;
      modeG = false;
      modeA = false;
      modeB = true;
      modeCc = false;
    }
    if(noteCc > 1){
      modeC = false;
      modeD = false;
      modeE = false;
      modeF = false;
      modeG = false;
      modeA = false;
      modeB = false;
      modeCc = true;
    }
    if(modeC == true){
      drawKeys();
      flashBlue();
    }
    if(modeD == true){
      drawKeys();
      flashGreen();
    }
    if(modeE == true){
      //drawKeys();
      flashYellow();
    }
    if(modeF == true){
      drawKeys();
      flashOrange();
    }
    if(modeG == true){
      //drawKeys();
      flashRed();
    }
    if(modeA == true){
      //drawKeys();
      flashPurple();
    }
    if(modeB == true){
      drawKeys();
      flashWhite();
    }
    if(modeCc == true){
      //drawKeys();
      flashCyan();
    }
}


function drawKeys(){
  
  noStroke();
  fill('blue');
  rect(width/16,height/2,width/8,height,5);
  fill('green');
  rect(3*width/16,height/2,width/8,height*.95,5);
  fill('yellow');
  rect(5*width/16,height/2,width/8,height*.9,5);
  fill('orange');
  rect(7*width/16,height/2,width/8,height*.85,5);
  fill('red');
  rect(9*width/16,height/2,width/8,height*.8,5);
  fill('purple');
  rect(11*width/16,height/2,width/8,height*.75,5);
  fill('aliceblue');
  rect(13*width/16,height/2,width/8,height*.70,5);
  fill('cyan');
  rect(15*width/16,height/2,width/8,height*.65,5);
}
function flashBlue(){  
  fill(0,o,i);
  i = i-3;
  o = i;
  rect(width/16,height/2,width/8,height,5);
  if(i < 200){
    i=255;
  }
  	for(var s = 0; s < stars.length; s++){
    stars[s].update();
    stars[s].show();
}

}
function flashGreen(){  
  //print("green");
  fill(0,i,0);
  i = i-3;
  rect(3*width/16,height/2,width/8,height*.95,5);
  if(i < 200){
    i=255;
  }
  for (var j = 0; j < drops.length; j++) {
    drops[j].fall();
    drops[j].show();
	}

  noStroke();
}
function flashYellow(){  
  fill(i,i,0);
  i = i-3;
  rect(5*width/16,height/2,width/8,height*.9,5)
  if(i < 200){
    i=255;
  }
	colorMode(HSB);
  
  var phylloA = phylloN*phylloAngle;
  var phylloR = phylloC * sqrt(phylloN);

  var phylloX = phylloR * cos(phylloA) + width/2;
  var phylloY = phylloR * sin(phylloA) + height/2;

  //stroke(1);
  fill(phylloA % 256, 255,255);
  ellipse(phylloX,phylloY,12,12);
  //ellipse(phylloX/2,phylloY/2,12,12);
  //ellipse(1.5*phylloX,1.5*phylloY,12,12);
  //ellipse(phylloX/1.5,phylloY/1.5,12,12);
  //ellipse(1.2*phylloX,1.2*phylloY,12,12);
  
  phylloN++;
  if(phylloN == 500){
    phylloAngle = phylloAngle + 0.5;
    phylloN = 0;
    //print("1000");
  }
  colorMode(RGB);
}
function flashOrange(){ 

  
  fill(i,o,0);
  o=i-90;
  i = i-3;
  
  rect(7*width/16,height/2,width/8,height*.85,5);
  if(i < 200){
    i=255;
  }
  var r,g,b, startX, startY;
  r = random(255);
  b = random(255);
  g = random(255);  
  fill(r,g,b);
  ellipse(ballX,ballY,75,75);
  ellipse(ball2X,ball2Y,75,75);
  ellipse(ball3X,ball3Y,75,75);
  ellipse(ball4X,ball4Y,75,75);

  
  
  if(ballX > width){
    speedX = -speedX;
  }
  if(ballX < 0){
    speedX = -speedX;
  }
  if(ballY > height){
    speedY = -speedY;
  }
  if(ballY < 0){
    speedY = -speedY;
  }
  ballX = ballX + speedX;
  ballY = ballY + speedY;
  ////////////////////////////////////////////////////////////////////////////
  if(ball2X > width){
    speed2X = -speed2X;
  }
  if(ball2X < 0){
    speed2X = -speed2X;
  }
  if(ball2Y > height){
    speed2Y = -speed2Y;
  }
  if(ball2Y < 0){
    speed2Y = -speed2Y;
  }
  ball2X = ball2X + speed2X;
  ball2Y = ball2Y + speed2Y;
  ///////////////////////////////////////////////////////////////////////////
  if(ball3X > width){
    speed3X = -speed3X;
  }
  if(ball3X < 0){
    speed3X = -speed3X;
  }
  if(ball3Y > height){
    speed3Y = -speed3Y;
  }
  if(ball3Y < 0){
    speed3Y = -speed3Y;
  }
  ball3X = ball3X + speed3X;
  ball3Y = ball3Y + speed3Y;
  /////////////////////////////////////////////////////////////////////////////
  if(ball4X > width){
    speed4X = -speed4X;
  }
  if(ball4X < 0){
    speed4X = -speed4X;
  }
  if(ball4Y > height){
    speed4Y = -speed4Y;
  }
  if(ball4Y < 0){
    speed4Y = -speed4Y;
  }
  ball4X = ball4X + speed4X;
  ball4Y = ball4Y + speed4Y;
}
function flashRed(){  

  var r,g,b;
  r=random(255);
  g=random(255);
  b=random(255);
  fill(r,g,b);
  ellipse(posX,posY,bigness,bigness);
  ellipse(pos2X,pos2Y,bigness,bigness);
  ellipse(pos3X,pos3Y,bigness,bigness);
  ellipse(pos4X,pos4Y,bigness,bigness);
  bigness = bigness+1;
  if(bigness > 200){
     posX = random(800);
  	 posY = random(600);
     pos2X = random(800);
  	 pos2Y = random(600);
     pos3X = random(800);
  	 pos3Y = random(600);
     pos4X = random(800);
  	 pos4Y = random(600);
     bigness = 50;
    drawKeys();
  }
	fill(i,0,0);
  i = i-3;
  rect(9*width/16,height/2,width/8,height*.8,5);
  if(i < 200){
    i=255;
  }
  
}
function flashPurple(){  
  fill(i,0,i);
  i = i-3;
  rect(11*width/16,height/2,width/8,height*.75,5);
  if(i < 200){
    i=255;
  }
	var r,g,b;
  r=random(255);
  g=random(255);
  b=random(255);
  fill(r,g,b);
  ellipse(posX,posY,bigness,bigness);
  ellipse(pos2X,pos2Y,bigness,bigness);
  ellipse(pos3X,pos3Y,bigness,bigness);
  ellipse(pos4X,pos4Y,bigness,bigness);
  bigness = bigness-1;
  if(bigness < 0){
     posX = random(800);
  	 posY = random(600);
     pos2X = random(800);
  	 pos2Y = random(600);
     pos3X = random(800);
  	 pos3Y = random(600);
     pos4X = random(800);
  	 pos4Y = random(600);
     bigness = 200;
     drawKeys();
  }
}
function flashWhite(){  
  
  if(i < 200){
    i=255;
  }
  for (var k = 0; k < rays.length; k++) {
    rays[k].fall();
    rays[k].show();
  }
  noStroke()
  fill(i,i,i);
  i = i-3;
  rect(13*width/16,height/2,width/8,height*.70,5);
}
function flashCyan(){  
  
  x = width/2;
  y = height/2;

  x += scale*R*((1-k)*Math.cos(z) + l*k*cos(z*((1-k)/k)));
  y += scale*R*((1-k)*Math.sin(z) + l*k*sin(z*((1-k)/k)));

  var r,g,b;
  r = random(255);
  g = random(255);
  b = random(255);
  stroke(r,g,b);
  line(orig_x, orig_y, x, y);
  r = random(255);
  g = random(255);
  b = random(255);
  fill(r,g,b);
  ellipse(x, y, 25);
  
  orig_x = x;
  orig_y = y;

  z+= 0.1;
  fill(0,i,i);
  i = i-3;
  rect(15*width/16,height/2,width/8,height*.65,5);
  if(i < 200){
    i=255;
  }
}





function serverConnected(){
	console.log('connected to the server');
}

function portOpen(){
  console.log('the serial port opened!');
}


function serialEvent(){
	//receive serial data here
  
  //read a string from the serial port
  var inString = serial.readLine();//reading ascii
  
  //check if we actually have data
  if(inString.length > 0){
  	//create an array and split it at the commas
    var sensorArray = split(inString, ",");
    
    //separate array into individual variables
    noteC = Number(sensorArray[0]);
    noteD = Number(sensorArray[1]);
    noteE = Number(sensorArray[2]);
    noteF = Number(sensorArray[3]);
    noteG = Number(sensorArray[4]);
    noteA = Number(sensorArray[5]);
    noteB = Number(sensorArray[6]);
    noteCc = Number(sensorArray[7]);
      
    //double check
    //print(noteC+","+sensor2);
  }
}

function serialError(err){
  console.log('something went wrong with the port. ' + err);
}

function portClose(){
  console.log('the port was closed');
}

// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 print(i + " " + portList[i]);
 }
}