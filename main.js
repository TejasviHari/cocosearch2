status="";
objects=[];

function setup(){
    canvas=createCanvas(380,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,300);
    video.hide();
}

function draw(){
    image(video,0,0,380,300);
}

function start(){
    objectDetector=ml5.objectDetector("cocossd",modeloaded);
   document.getElementById("status").innerHTML="Status:Detcting Objects";
}

function modeloaded(){
    console.log("Model loaded!");

    status=true;
    objectDetector.detect(video,gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}
