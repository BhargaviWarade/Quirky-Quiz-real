var canvas;
var backgroundImage, car1_img, car2_img, track;
var database, gameState,pointsUpdate;
var form, player, playerCount;
var question,question2,question3,question4,question5;
var startButtonImg;
var muteButton,muteButtonImg;
var bgMusic; 
var coco,cocoS;
var background1;
var resetImg;
var clapM;

function preload() {
  background1 = loadImage("assets/BackgroundImg.jpg");
  backgroundImage = loadImage("assets/QuestionBg.jpg");
  //startButtonImg = loadImage("assets/play.png");
  bgMusic = loadSound("assets/Background_sound.mp3");
  coco = loadImage("assets/Coco.gif");
  cocoS = loadImage("assets/cocoSad.gif");
  resetImg = loadImage("assets/reset.png");
  clapM = loadSound("assets/Clapping.wav");


}

function setup() {
  canvas = createCanvas(800,500);
  database = firebase.database();

  // Creating mute button
   muteButton = createImg('assets/Mute_button.png');
   muteButton.position(710,35);
   muteButton.size(60,60);
   muteButton.mouseClicked(mute);

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);

  fill("White");
  textSize(45);
  //Font f1,f2,
  text("Qu!rky Quiz",285,100);
  
  if (playerCount === 2) {
    question.display();
    game.update(1);
  }

  if (gameState === 1) {
    question.display();
    question2.display();
    Question3.display();
   // game.start();
    
  }

  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function mute()
{
  if(bgMusic.isPlaying())
     {
      bgMusic.stop();
     }
     else{
      bgMusic.play();
     }
}

