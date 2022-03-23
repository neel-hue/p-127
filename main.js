a="bjiml.mp3";
b="Eminem-LoseYourSelf.mp3";
song = "";
function preload() {
    song = loadSound(b);
}

function c() {
    song.play();
}


function setup() {
    y = createCanvas(400, 400);
    y.position(565, 250);
    v = createCapture(VIDEO);
    v.hide();


    // m = ml5.poseNet(v,modelLoaded);
    //m.on('pose',gotposes);
}

function draw() {
    image(v, 0, 0, 400, 400);
}

