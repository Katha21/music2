music1 = " ";

function preload(){
    music1 = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.hide();
}

function draw(){
    image(camera,0,0,600,500);
}