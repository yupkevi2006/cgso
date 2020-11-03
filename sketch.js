var PLAY = 1;
var END = 0;
var LOBBY = 2;
var gamestate = "play";
var Runner, Green, Red, Blue, Yellow, BG, Diamond, Cloud, GameOver;
var Runner_Image, BG_Image, GreenCoin, BlueCoin, RedCoin, YellowCoin, DiamondImage, Cloud_Image;
var score = 0;
function preload() {
  Runner_Image = loadImage("RUN.png");
  footsteps = loadSound("transportation_aircraft_commercial_jet_pass_low_external_011.mp3");
  BG_Image = loadImage("bGG.png");
  RedCoin = loadImage("Red.png");
  GreenCoin = loadImage("Green.png");
  YellowCoin = loadImage("Yellow.png");
  BlueCoin = loadImage("Blue.png");
  Cloud_Image = loadImage("clouds.png");
  DiamondImage = loadImage("diamond.png");
  GameOverImage = loadImage("gameOver.png");
  Crash = loadSound("score-hit-game-01-sound-effect-41387940.mp3");
  Won = loadImage("YouWin.png");
}

function setup() {
  createCanvas(400, 500);
  BG = createSprite(200, 200, 400, 400);
  BG.addImage(BG_Image);
  BG.scale = 4;
  Runner = createSprite(200, 350, 20, 20);
  Runner.addImage(Runner_Image);
  Runner.scale = 0.5;
  boundary1 = createSprite(0,200,5,400);
 boundary2 = createSprite(400,200,5,400);
  score = 0;
  footsteps.loop();
  
  CloudGroup = new Group();
  RedGroup = new Group();
  GreenGroup = new Group();
  YellowGroup = new Group();
  BlueGroup = new Group();
  DiamondGroup = new Group();
}

function draw() {
  background("white");

  
  if(gamestate === "play") {
    text("Score: ", 200,200);
    
 boundary1.visible = "false";
 boundary2.visible = "false";
  
  spawnGreen();
  spawnYellow();
  spawnBlue();
  spawnRed();
  spawnCloud();
  spawnDiamond();

 Runner.collide(boundary1);
  Runner.collide(boundary2);
     BG.velocityY = 1;

  if (BG.y > 220) {
    BG.y = 200;
  }

  if (keyDown("LEFT_ARROW")) {
    Runner.velocityX = -13;
  }
  if (keyDown("RIGHT_ARROW")) {
    Runner.velocityX = 13;
  }
  if (keyDown("SHIFT")) {
    Runner.velocityX = 0;
  }
  }
  if(CloudGroup.isTouching(Runner)) {
    gamestate = "end";
  }
  if(DiamondGroup.isTouching(Runner)) {
    Win = createSprite(200,200);
    Win.addImage(Won);
    Win.scale = 0.4;
    Runner.velocityX = 0;
    CloudGroup.SetVelocityXEach = 0;
    GreenGroup.SetVelocityYEach = 0;
    YellowGroup.SetVelocityYEach= 0;
    RedGroup.SetVelocityYEach = 0;
    BlueGroup.SetVelocityYEach = 0;
    DiamondGroup.SetVelocityYEach = 0;
    BG.destroy();
    Runner.destroy();
    CloudGroup.destroyEach();
    GreenGroup.destroyEach();
    YellowGroup.destroyEach();
    RedGroup.destroyEach();
    BlueGroup.destroyEach();
    DiamondGroup.destroyEach();
  }
  
  if(GreenGroup.isTouching(Runner)) {
    GreenGroup.destroyEach();
    Crash.play();
  }
  if(RedGroup.isTouching(Runner)) {
    RedGroup.destroyEach();
    Crash.play();
  }
  if(BlueGroup.isTouching(Runner)) {
    BlueGroup.destroyEach();
    Crash.play();
  }
  if(YellowGroup.isTouching(Runner)) {
    YellowGroup.destroyEach();
    Crash.play();
  }
  
  if(gamestate === "end") {
    
    
    GameOver = createSprite(200,200);
  GameOver.addImage(GameOverImage);
  GameOver.scale = 0.2;
    Runner.velocityX = 0;
    CloudGroup.SetVelocityXEach = 0;
    GreenGroup.SetVelocityYEach = 0;
    YellowGroup.SetVelocityYEach= 0;
    RedGroup.SetVelocityYEach = 0;
    BlueGroup.SetVelocityYEach = 0;
    DiamondGroup.SetVelocityYEach = 0;
    GameOver.visible = "true";
    BG.destroy();
    Runner.destroy();
    CloudGroup.destroyEach();
    GreenGroup.destroyEach();
    YellowGroup.destroyEach();
    RedGroup.destroyEach();
    BlueGroup.destroyEach();
    DiamondGroup.destroyEach();
  }
  drawSprites();
}

function spawnGreen() {
  if (frameCount % 100 === 0) {
    var Green = createSprite(200, -50);
    Green.addImage(GreenCoin);
    Green.x = Math.round(random(10, 390));
    Green.velocityY = 4;
    Green.scale = 0.2;
    GreenGroup.add(Green);
  }
}
function spawnBlue() {
  if (frameCount % 700 === 0) {
    var Blue = createSprite(200, -50);
    Blue.addImage(BlueCoin);
    Blue.x = Math.round(random(10, 390));
    Blue.velocityY = 8;
    Blue.scale = 0.2;
    BlueGroup.add(Blue);
  }
}
function spawnYellow() {
  if (frameCount % 400 === 0) {
    var Yellow = createSprite(200, -50);
    Yellow.addImage(YellowCoin);
    Yellow.x = Math.round(random(10, 390));
    Yellow.velocityY = 6;
    Yellow.scale = 0.2;
    YellowGroup.add(Yellow);
  }
}
function spawnRed() {
  if (frameCount % 1200 === 0) {
    var Red = createSprite(200, -50);
    Red.addImage(RedCoin);
    Red.x = Math.round(random(10, 390));
    Red.velocityY = 10;
    Red.scale = 0.2;
    RedGroup.add(Red);
  }
}
function spawnCloud() {
  if (frameCount % 250 === 0) {
    var Cloud = createSprite(200, -50);
    Cloud.addImage(Cloud_Image);
    Cloud.x = Math.round(random(50, 390));
    Cloud.velocityY = 6;
    Cloud.scale = 0.2;
    CloudGroup.add(Cloud);
  }
}
function spawnDiamond() {
  if (frameCount % 3000 === 0) {
    var Diamond = createSprite(200, -50);
    Diamond.addImage(DiamondImage);
    Diamond.x = Math.round(random(10, 40));
    Diamond.velocityY = 6;
    Diamond.scale = 0.1;
    DiamondGroup.add(Diamond);
  }
}
