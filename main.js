
nose_x=0;
nose_y=0;

img="";

function preload(){
    img= loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet= ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);
}

function modelloaded(){
    console.log("Model loaded");
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function take_snapshot(){
    save("myimage.png");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        nose_x= results[0].pose.nose.x;
        nose_y= results[0].pose.nose.y;
        console.log("Nose x= "+ results[0].pose.nose.x);
        console.log("Nose y= "+ results[0].pose.nose.y);
    }
}