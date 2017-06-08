var gameMode = 0;  // 0 = welcome screen, 1 = game screen; 2 = score screen; 3 = timeout screen; 4 = youlose
var images = [];
var DrakeNumber;
var score = 0;
var t;
var Drake;
var img;

function preload() {
  for (var i = 1; i <= 21; i++) {
    img = loadImage(i + ".jpg");
    images[i] = img;
  }  
}

function setup() {
  createCanvas(800, 600);
  console.log(images);
  noLoop();
}

function draw() {
  if (gameMode == 0) {
    // display welcome screen
    background(225, 0, 0);
    textFont("Georgia")
    textSize(50);
    fill(0, 0, 0);
    text("Welcome to Drake or Fake!", 90, 280);
    textSize(30);
    text("Press any key to begin.", 240, 320);

  } else if (gameMode == 1) {
    // display game screen
    background(225, 0, 0);
    text("score = " + score, 340, 575);
     setTimeout(function() {
       gameMode = 2;
     }, 60000);
     DrakeNumber = parseInt(random(1, 21));
     img = images[DrakeNumber];
     img.resize(0, 400);
     image(img, 40, 40);
     //text(DrakeNumber, 200, 200);

   } else if (gameMode == 2) {
     // display score screen
     background(255);
     text("what is this screen?", 10, 100);
   } else if (gameMode == 3) {
    // display timeout screen
    background(255);
    text("T to the I to the M to the E", 10, 100);

   } else if (gameMode == 4) {
    // display youlose screen
    background(200, 50, 50);
    textSize(50);
    text("Wrong choice! You lose.", 120, 280);
    textSize(30);
    text("Press the D button to play again.", 200, 315);
      }
    }

function keyTyped() {
  if (gameMode == 0) {
    //keys to listen for in welcome screen
    gameMode = 1;
    redraw();
  } else if (gameMode == 1) {
    //keys to listen for in game screen
    if (key == 'd') {
      console.log(DrakeNumber);
      var Drake = "DRAKE!"
      console.log(Drake)
       if (DrakeNumber >= 12) {
         score = score + 1;
         console.log("CORRECT SELECTION!");
         gameMode = 1;
         redraw();
       } else {
         score = 0;
         console.log("INCORRECT SELECTION!");
         gameMode = 4;
         redraw();
       }
    } else if (key == 'f') {
        console.log(DrakeNumber)
        var Drake = "FAKE!"
        console.log(Drake)
      if (DrakeNumber < 12) {
         score = score + 1;
         console.log("CORRECT SELECTION!");
         gameMode = 1;
         redraw();
       } else {
         score = 0;
         console.log("INCORRECT SELECTION!");
         gameMode = 4;
         redraw();
       }
    } else {
      console.log("invalid key");
    }
  } else if (gameMode == 4) {
    //keys to listen for in youlose screen
    if (key == 'd') {
      console.log("restarting");
      gameMode = 0;
      redraw();
    } else if (key == 'b') {
      console.log("bee movie");
    } else {
      console.log(key + " is an invalid key");
    }
  }
}
