document.getElementById("animate");
function setup() {
createCanvas (300,300,WEBGL);
  
}
function draw() {
ellipsoid(99,99,99,99);
rotateX(frameCount*0.10);
rotateY(frameCount*0.01);
box(100,100,100,100);
translate( 200 , 0 , 0);
ellipsoid(40,40,40,40);
translate( -400 , 0 , 0);
ellipsoid(40,40,40,40);
rotateX(frameCount*0.10);
rotateY(frameCount*0.0);
translate(200,200,0);
ellipsoid(40,40,40,40);
translate( 0,-400,0);
ellipsoid(40,40,40,40);
}