var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //criar um plano de fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criar um arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // mover o chão
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //mover o arco
  bow.y = World.mouseY;
  
   // soltar a flecha quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }

  redBalloon();
  
  drawSprites();
}


// criar flechas para o arco
 function createArrow() {
  if(keyDown("space")){
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -15;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  }

}


function redBalloon() {
  if(frameCount%60 === 0){
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
   //mude o valor do balão aleatório para 4
  var select_balloon = Math.round(random(1,4));
  switch(select_balloon){
  case 1: red.addImage(red_balloonImage) ;//chamar o balãovermelho
  break;
  case 2: red.addImage(blue_balloonImage) ;//chamar o balãoazul
  break;
  case 3: red.addImage(green_balloonImage) ;//chamar o balãoverde
  break;
  case 4: red.addImage(pink_balloonImage) ;//chamar o balãorosa
  break;

  default: break;
 }
 }            
 }

function blueBalloon() {
  //crieSprite para o balão 
  //adicioneImagem para o balão
  //adicione velocidade para fazer o balão se mover
  //mudar a dimensão do balão
  //atribua tempo de vida ao balão}
}

function greenBalloon() {
  //crieSprite para o balão
  //adicioneImagem para o balão
  //adicione velocidade para fazer o balão se mover
  //mudar a dimensão do balão
  //atribua tempo de vida ao balão}
}

function pinkBalloon() {
  //crieSprite para o balão
  //adicioneImagem para o balão
  //adicione velocidade para fazer o balão se mover
  //mudar a dimensão do balão
  //atribua tempo de vida ao balão}
}