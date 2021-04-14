const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }
    else{
        background("white");
    }


    Engine.update(engine);

    


}

async function getTime(){
    var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json()
    var dateTime = responseJson.datetime;
    console.log(responseJson);
    
    var hour = dateTime.slice(11,13)
    console.log(hour);
    if (hour>=01 && hour<=3   ){
        bg="sunrise.png"
    }
    if(hour>=4 && hour<=5){
        bg="sunrise2.png"
    }
    if(hour>=6 && hour<=7){
        bg="sunrise3.png"
    }
    if(hour>=8 && hour<=9){
        bg="sunrise4.png"
    }
    if(hour>=10 && hour<=11){
        bg="sunrise5.png"
    }
    if(hour>=12 && hour<=13){
        bg="sunrise6.png"
    }
    if(hour>=14 && hour<=15){
        bg="sunset7.png"
    }
    if(hour>=16 && hour<=17){
        bg="sunset8.png"
    }
    if(hour>=18 && hour<=19){
        bg="sunset9.png"
    }
    if(hour>=20 && hour<=22){
        bg="sunset10.png"
    }
    if(hour>=22 && hour<=24){
        bg="sunset11.png"
    }

    backgroundImg = loadImage(bg)
    }
