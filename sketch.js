//Variable for all the games
let game = 0;

//Variables for the Color Game
let x;
let y;
let b = 100;
let c = 150;
let x1 = 100;
let x2 = 100;
let x3 = 100;
let x4 = 100;
let y1 = 150
let y2 = 250;
let y3 = 350;
let y4 = 450;


//Variables for math game
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let Strings = ["+", "-"]
let rn;
let rs;
let rn2;
let quest1 = false;
let wr1, wr2, wr3;
let fn = 11;
let answer = 0;
let wrnumbers = Array.from(Array(100).keys());
let answerbutton;
let answeredcor = 0;
let answerRect;
let wrn2;
let wrn3;
let wrn4;


//Variables shapeDiff game
let words = ["Triangle", "Square", "Circle"]
let rnu;
let w;
let z;
let word;
var img;
var img2;
let fnu = 3;
let tri = false;
let sqr = false;
let crc = false;
let count = 0;


//Preload Images
function preload(){
  babyOnIcon = loadImage('BabyOnIcon.png');
  img = loadImage('Red check.jpg');
  img2 = loadImage('green check.jpg');
}

//function creates canvas and adds babyOn image 
function setup() {
  canvas = createCanvas(600,800);
  background(255, 255, 255);
  //loads images in
  image(babyOnIcon, 60, 135, 400, 100);
  createGUIButtons();
}
function draw(){
  //Color Game
  if ( game == 1){
    background(255);
  
  image(img, 225, 450, 150 , 150)
  //right side
  fill('blue');
  circle(100,150,50);
  fill('red');
  circle(100,250,50)
  fill('green')
  circle(100, 350, 50)
  fill('purple')
  circle(100,450,50)
    
  //left side
  fill('green');
  circle(500,150,50);
  fill('purple');
  circle(500,250,50)
  fill('blue')
  circle(500, 350, 50)
  fill('red')
  circle(500,450,50)
  //line ( 100, 150, 500, 350)
  
  line ( 100,150, x1,y1)
  line ( 100,250, x2,y2)
  line ( 100,350, x3,y3)
  line ( 100,450, x4,y4)
  
  x = mouseX;
  y = mouseY;
  
  line( b, c, x, y)
  if( mouseIsPressed && x > 490 && x < 510 && y > 340 && y < 360 && b == 100 && c == 150){
    fill('black')
    x1 = 500;
    y1 = 350;
    b = 100;
    c = 250;
  }else if ( mouseIsPressed && x > 490 && x < 510 && y > 440 && y < 460 && b == 100 && c == 250){
    fill('black')
    x2 = 500;
    y2 = 450;
    b = 100;
    c = 350;
  }else if ( mouseIsPressed && x > 490 && x < 510 && y >140 && y < 160 && b == 100 && c == 350){
    fill('black')
    x3 = 500
    y3 = 150
    b = 100
    c = 450
    
}else if (mouseIsPressed && x > 490 && x < 510 && y > 240 && y < 260 && b == 100 && c == 450){
    fill('purple')
    x4 = 500
    y4 = 250
    
  }
  
  //
  if (x1 == 500 && y1 == 350 && x2 == 500 && y2 == 450 && x3 == 500 && y3 == 150 && x4 == 500 && y4 == 250){
    background(255)
    image(img2, 225, 450, 150 , 150)
    //right side
  fill('blue');
  circle(100,150,50);
  fill('red');
  circle(100,250,50)
  fill('green')
  circle(100, 350, 50)
  fill('purple')
  circle(100,450,50)
  
  //left side
  fill('green');
  circle(500,150,50);
  fill('purple');
  circle(500,250,50)
  fill('blue')
  circle(500, 350, 50)
  fill('red')
  circle(500,450,50)
  
  // lines
  fill('black')
  line ( 100, 150, 500,350)
  line ( 100, 250, 500,450)
  line ( 100, 350, 500,150)
  line ( 100, 450, 500,250)
  }
}
 
  //Math Game
  if ( game == 2){
    if( answeredcor == 3){
      finalSetup();
    }
  }
  
  //Shape Game
  if ( game == 3){
  //Big red check
  image(img, 400, 400, 200, 200)
  
  //Triangle
  fill('black');
  triangle(80, 110, 50, 230, 190, 190);
  //Square
  fill('black');
  square(350,50, 125)
  //Circle
  fill('black');
  circle(225, 320, 125);
  
  w = mouseX
  z = mouseY
  
  //triangle
  if(mouseIsPressed && word == "Triangle" && w > 70 && w < 210 && z > 120 && z < 240 ){
    tri = true;
    count++;
    
    //Deleting the world from the array
    words.splice(rnu,1);
    
    //New random number
    fnu = fnu -1;
    rnu = int(random(0,fnu))
    word = words[rnu];
    
    //Setting the shapes again
    background(255);
    fill('black');
    triangle(80, 110, 50, 230, 190, 190);
    square(350,50, 125);
    circle(225, 320, 125);
    
    //Changing the text
    textSize(32);
    text("Tap the " + word, 10, 40);
    
    // add green check
    text("Triangle: ", 10, 450);
    image(img2, 130, 410, 60, 60);
    
    //check if the others shapes were alredy selected
    if(sqr){
       text("Square: ", 10, 500 );
       image(img2, 120, 460, 60, 60);
    } 
    if (crc){
      text("Circle: ", 10, 550);
      image(img2, 105, 510, 60, 60);
    } 
    if (sqr == false){
      text("Square: ", 10, 500 );
      image(img, 120, 460, 60, 60);
    } 
    if (crc == false){
      text("Circle: ", 10, 550);
      image(img, 105, 510, 60, 60);
    }
  }
  
  //Circle
  if(mouseIsPressed && word == "Circle" && w > 175 && w < 275 && z > 270 && z < 370){
    crc = true
    count++;
    
    //Deleting the world from the array
    words.splice(rnu,1);
    
    fnu = fnu -1;
    rnu = int(random(0,fnu))
    word = words[rnu];
    
    //Setting the shapes again
    background(255);
    fill('black');
    triangle(80, 110, 50, 230, 190, 190);
    square(350,50, 125);
    circle(225, 320, 125);
    
    //Changing the text
    textSize(32);
    text("Tap the " + word, 10, 40);
    
    //add green check
    text("Circle: ", 10, 550);
    image(img2, 105, 510, 60, 60);
    
    //check if the others shapes were alredy selected
    if(sqr){
       text("Square: ", 10, 500 );
       image(img2, 120, 460, 60, 60);
    }
    if (sqr == false){
      text("Square: ", 10, 500 );
      image(img, 120, 460, 60, 60);
    } 
    if (tri){
      text("Triangle: ", 10, 450);
      image(img2, 130, 410, 60, 60);
    }
    if (tri == false){
      text("Triangle: ", 10, 450);
      image(img, 130, 410, 60, 60);
    }
  }
  
  //square
  if (mouseIsPressed && word == "Square" && w > 350 && w < 475 && z > 50 && z < 175){
    sqr = true
    count++; 
    
    //Deleting the world from the array
    words.splice(rnu,1);
    
    fnu = fnu -1;
    rnu = int(random(0,fnu))
    word = words[rnu];
    
    //Setting the shapes again
    background(255);
    fill('black');
    triangle(80, 110, 50, 230, 190, 190);
    square(350,50, 125);
    circle(225, 320, 125);
    
    
    //Changing the text
    textSize(32);
    text("Tap the " + word, 10, 40);
    
    //add green check
     text("Square: ", 10, 500 );
     image(img2, 120, 460, 60, 60);
    
    //check if the others shapes were alredy selected
    if (tri){
      text("Triangle: ", 10, 450);
      image(img2, 130, 410, 60, 60);
    }
    if (tri == false){
      text("Triangle: ", 10, 450);
      image(img, 130, 410, 60, 60);
    }
    if (crc){
      text("Circle: ", 10, 550);
      image(img2, 105, 510, 60, 60);
    }
    if (crc == false){
      text("Circle: ", 10, 550);
      image(img, 105, 510, 60, 60);
    }
    
  }
  
  //game is done
  if( count == 3) {
    //Setting the shapes again
    background(255);
    fill('black');
    triangle(80, 110, 50, 230, 190, 190);
    square(350,50, 125);
    circle(225, 320, 125);
  
    //Text
    text("Triangle: ", 10, 450);
    text("Square: ", 10, 500 );
    text("Circle: ", 10, 550);
    image(img2, 130, 410, 60, 60); //tri
    image(img2, 120, 460, 60, 60); //sqr
    image(img2, 105, 510, 60, 60); //crc
    
    //End text
    textSize(32);
    text("You got all shapes rights", 10, 40);
    
    //Big green check
    image(img2, 400, 400, 200, 200)
  }
    
  }
}

//method creates gui buttons
function createGUIButtons(){
  let c = color('purple');
  fill(c);
  
  //Math game
  basicMathRect = rect(60, 310, 400, 40);
  basicMath = createButton('Basic Mathematics'); 
  basicMath.position(155, 314); 
  basicMath.mouseClicked(basicMathPressed); 
  basicMath.style("font-family", "Georgia"); 
  basicMath.style("font-size", "20px"); 
  
  //Color game
  colorCoorRect = rect(60, 370, 400, 40);
  colorCoord = createButton('Color Coordination'); 
  colorCoord.position(155, 374); 
  colorCoord.mouseClicked(colorCoordPressed); 
  colorCoord.style("font-family", "Georgia"); 
  colorCoord.style("font-size", "20px"); 
  
  //ShapeDiff game
  shapeDifRect = rect(60, 250, 400, 40);
  shapeDif = createButton('Shape Differentiation'); 
  shapeDif.position(143, 255); 
  shapeDif.mouseClicked(shapeDifPressed); 
  shapeDif.style("font-family", "Georgia"); 
  shapeDif.style("font-size", "20px"); 
}
function createBackButton(){
  backButton = createButton('Back');
  backButton.position(40, 575);
  backButton.style("font-family", "Georgia"); 
  backButton.style("font-size", "25px"); 
  backButton.style('background-color', color(255, 0 , 0)); 
  backButton.mouseClicked(backButtonPressed); 
}
function coverRectangles(){
  fill(255, 255, 255);
  rect(100, 100, 100, 100); 
}
function resetButton(){
  resetB = createButton("Reset");
  resetB.position(500,575);
  resetB.style("font-family", "Georgia"); 
  resetB.style("font-size", "25px"); 
  resetB.style('background-color', color('Purple')); 
  resetB.mouseClicked(resetButtonPressed); 
}

// Buttons for the games
function handEyePressed(){ 
  removeElements(); //removes all elements and canvas
}
function basicMathPressed(){
  removeElements(); //removes all elements (buttons etc) and canvas
  game = 2;
  setupMath(); 
  createBackButton();
  //basicMathPressed = true;
}
function colorCoordPressed(){
  removeElements(); //removes all elements (buttons etc) and canvas
  game = 1;
  createBackButton();
  resetButton();
}
function backButtonPressed(){
  game = 0;
  removeElements();
  background(255)
  setup(); 
  backButton.hide(); 
}
function shapeDifPressed(){
  removeElements(); //removes all elements (buttons etc) and canvas
  shapeSetup();
  game = 3;
  createBackButton(); 
  resetButton();
}
function resetButtonPressed(){
  //Reset variables for the Color Game
  if(game == 1){
  b = 100;
  c = 150;
  x1 = 100;
  x2 = 100;
  x3 = 100;
  x4 = 100;
  y1 = 150
  y2 = 250;
  y3 = 350;
  y4 = 450;
  }
  
   //Reset Variable for the Math game and setup
  if ( game == 4 ){
    answeredcor = 0;
    setupMath();
  }
  
  //Reset variables for the Shape Diff game and reset setup for the Shape Diff game
  if ( game == 3 ){
    words = ["Triangle", "Square", "Circle"]
    tri = false;
    sqr = false;
    crc = false;
    count = 0;
    fnu = 3;
    shapeSetup();
  }
}

//Functions for the Math games
function mathButtons(){
  
  //Right Answer Button
  answerbutton = createButton(answer); 
  answerbutton.position(250, 255); 
  answerbutton.size(100, 50)
  
  // First Wrong Answer Button
  rn2 = int(random(0, 100))
  if (rn2 != answer){
  wrn2 = rn2;
  } else{
    rn2 = int(random(0, 100))
  }
  wrn2 = createButton(wrn2); //create
  wrn2.mouseClicked(wrn2Pressed);
  wrn2.position(250, 300); 
  wrn2.size(100, 50) //size of button
  
  //Second Wrong Answer Button
  rn2 = int(random(0, 100))
  if (rn2 != answer){
  wrn3 = rn2;
  } else{
    rn2 = int(random(0, 100))
  }
  wrn3 = createButton(wrn3); 
  wrn3.mouseClicked(wrn3Pressed);
  wrn3.position(250, 350);
  wrn3.size(100, 50)
  
  //Third Wrong Answer Button
  rn2 = int(random(0, 100))
  if (rn2 != answer){
  wrn4 = rn2;
  } else{
    rn2 = int(random(0, 100))
  }
  wrn4 = createButton(wrn4); 
  wrn4.mouseClicked(wrn4Pressed);
  wrn4.position(250, 400);
  wrn4.size(100, 50)
  
}
  //Functions for Wrong Answers Pressed
  function wrn2Pressed(){
    background(255);
    textSize(32);
    text("What is " + wr1 + wr2 + wr3 + "?",205, 200);
    text(20);
    text("Try again", 220, 100)
}
  function wrn3Pressed(){
    background(255);
    textSize(32);
    text("What is " + wr1 + wr2 + wr3 + "?",205, 200);
    text(20);
    text("Try again", 220, 100)
}
  function wrn4Pressed(){
    background(255);
    textSize(32);
    text("What is " + wr1 + wr2 + wr3 + "?",205, 200);
    text(20);
    text("Try again", 220, 100)
}
function checkmarks(){
  answerbutton.mouseClicked(AnswerPressed);
}
function AnswerPressed(){
    quest1 = true
    if (quest1 == true){
    if (answeredcor < 4){
      setupMath();
      textSize(20);
      text("The answer was correct, next question:", 120, 100)
    }
      answeredcor++;
        if (answeredcor == 3) { 
        finalSetup();
        }
  }
} 
function setupMath(){
  
  
  background(255, 255, 255)
  
  rn = int(random(0, fn))
  wr1 = numbers[rn];
  rn2 = int(random(0, fn))
  wr3 = numbers[rn2];
  rs = int(random(0, 2));
  wr2 = Strings[rs];
  
  if (wr2 == "+"){
    answer = wr1 + wr3;
    
  } if (wr2 == "-"){
    answer = wr1 - wr3
  }
  

  mathButtons();
  checkmarks();
  
  textSize(32);
  text("What is " + wr1 + wr2 + wr3 + "?",205, 200);
  
  
}
function nextQuestion(){
  rn = int(random(0, fn))
  wr1 = numbers[rn];
  rn2 = int(random(0, fn))
  wr3 = numbers[rn2];
  rs = int(random(0, 2));
  wr2 = Strings[rs];
  
  if (wr2 == "+"){
    answer = wr1 + wr3;
    
  } if (wr2 == "-"){
    answer = wr1 - wr3
  }
  
  
  mathButtons();
  checkmarks();
  textSize(32);
  text("what is " + wr1 + wr2 + wr3 + "?",175, 200);
}
function finalSetup(){
  game = 4;
  removeElements();
  background('white');
  textSize(20);
  text("You answered all 3 questions right",150, 250);
  text("Congrats!", 250, 300)
  createBackButton();
  resetButton();
}


//Function for the Shape Diff game
function shapeSetup(){
  
  background(255);
  
  //Pick first word
  rnu = int(random(0,fnu));
  word = words[rnu];
  fill('black')
  textSize(32);
  text("Tap the " + word, 10, 40);
  
  //Confirmation of shape;
  fill('black')
  textSize(32);
  text("Triangle: ", 10, 450);
  text("Square: ", 10, 500 );
  text("Circle: ", 10, 550);
  //red check in each
  image(img, 130, 410, 60, 60); //tri
  image(img, 120, 460, 60, 60); //sqr
  image(img, 105, 510, 60, 60); //crc
}
  
 
