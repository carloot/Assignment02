function setup() {
 createCanvas(500,500);
 angleMode (DEGREES);
 frameRate(20); 
  background(50,50,170);
}

function draw() {
  
  translate(width/2,height/2);
  rotate(frameCount*3);
 stroke('#FFFFFF');
  line(200,0,200+cos(frameCount*4)*100,200+sin(frameCount*4)*100);
  
  stroke('#FF4D00');
  line(100,0,cos(frameCount*4)*100,sin(frameCount*4)*100);
  if(frameCount == 360) {
  noLoop();
}

}