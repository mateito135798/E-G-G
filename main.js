var video="";
    var stats="";
function preload() {
video=createVideo("video.mp4");
video.hide()}

function setup() {
canvas=createCanvas(480,380);
canvas.center()
}
function draw() {
image(video,0,0,480,380)
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