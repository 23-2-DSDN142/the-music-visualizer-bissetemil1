let firstRun = true
let baseLayer;
let surfer1 = [];
let surfer2 = [];
let wave = [];
// vocal, drum, bass, and other are volumes ranging from 0 to 100

function draw_one_frame(words, vocal, drum, bass, other, counter){
 if (firstRun){

  surfer1.push(loadImage('surfer1_0.png'));
  surfer1.push(loadImage('surfer1_1.png'));
  surfer1.push(loadImage('surfer1_2.png'));
  surfer1.push(loadImage('surfer1_3png'));

  surfer2.push(loadImage('surfer2_0.png'));
  surfer2.push(loadImage('surfer2_1.png'));
  surfer2.push(loadImage('surfer2_2.png'));
  surfer2.push(loadImage('surfer2_3.png'));

    baseLayer = loadImage('wave_0.png');

  firstRun = false
 }


    background (140, 210, 245);
    image(baseLayer, 0, 0);

    var BassFrame = int(map(bass, 0,100, 0,3));
    push();
    scale();
    image(surfer1[BassFrame], width/10, height/10);
    
    var  BassFrame = int(map(bass, 0,100, 0,3));
    push();
    scale();
    image(surfer2[BassFrame], width/10, height/10);


    var sunSize = map(drum, 0,100, 40,150);
  

  //sun
    noStroke();
    fill(255, 213, 0)
    ellipse(width/10, height/8, sunSize+100);
    fill(255, 213, 0, 50)
    ellipse(width/10, height/8, sunSize+160);
    fill(255, 213, 0, 25)
    ellipse(width/10, height/8, sunSize+240);
    fill(255, 213, 0, 15)
    ellipse(width/10, height/8, sunSize+300);


    fill(6, 115, 122)
    textFont('Gill Sans'); // please use CSS safe fonts
    rectMode(CENTER)
    textSize(32);

    //display "words"
    textAlign(CENTER);
    textSize(vocal);
    text(words, width/10, height/3);



    }
    








