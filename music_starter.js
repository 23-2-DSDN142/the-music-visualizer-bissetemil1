let firstRun = true

//let surferOne;
let surferTwo;

let surfer1 = [];
// vocal, drum, bass, and other are volumes ranging from 0 to 100

function draw_one_frame(words, vocal, drum, bass, other, counter){
if (firstRun){

  // cloud.push(loadImage('cloud_0.png'));
  // cloud.push(loadImage('cloud_1.png'));
  // cloud.push(loadImage('cloud_2.png'));
  // cloud.push(loadImage('cloud_3.png'));
  // cloud.push(loadImage('cloud_4.png'));
  // cloud.push(loadImage('cloud_5.png'));

  surfer1.push(loadImage('surfer1_0.png'));
  surfer1.push(loadImage('surfer1_1.png'));
  surfer1.push(loadImage('surfer1_2.png'));
  surfer1.push(loadImage('surfer1_3png'));


  surferOne = loadImage('surfer1_0.png');
  baseLayer = loadImage('wave.png');
  surferTwo = loadImage('surfer2_0.png');


  firstRun = false
}

    background (140, 210, 245)
  
    image(baseLayer, 0, 0)
   // image(surferOne, vocal,vocal)
    image(surferTwo, bass,bass)
   
    
    // var VocalFrame = int(map(vocal, 0,100, 0,3));
    // push();
    // scale(0.6);
    // image(cloud[VocalFrame], width/10, height/10);
    // pop();

    var BassFrame = int(map(bass, 0,100, 0,3));
    push(3);
    scale();
    image(surfer1[BassFrame], width/10, height/10);
    

  







    }
    








