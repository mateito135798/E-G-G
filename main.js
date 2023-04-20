var video="";
    var stats="";
var hola=[]
function preload() {
video=createVideo("video.mp4");
video.hide()}

function setup() {
canvas=createCanvas(480,380);
canvas.center()
}
function draw() {
image(video,0,0,480,380);
if (stats!="") {
objectDetector.detect(video,E_G_G);
   for (var i= 0; i < hola.length; i++) {
 document.getElementById("eggsstatus").innerHTML="status : detecting objects";
document.getElementById("eggnum").innerHTML="NUMERO DE OBJETOS :  "+hola.length
        fill("green");
porcentaje=floor(hola[i].confidence*100);
text(hola[i].label+porcentaje,hola[i].x,hola[i].y+20);
noFill();
stroke("green");
rect(hola[i].x,hola[i].y,hola[i].width,hola[i].height);
    


}
}
function idonno() {
   objectDetector=ml5.objectDetector("cocossd",modelolisto);
   document.getElementById("eggstatus").innerHTML="eggstatus : detectando objetos";
}
function modelolisto() {
    console.log("model strated");
stats=true;
video.volume(0);
video.speed(1);
video.loop();
}

function E_G_G(error,resultados){
if (error) {
   console.error("'(error type) error  "+ error) 
} else {
    console.warn(resultados);
hola=resultados
}
}

