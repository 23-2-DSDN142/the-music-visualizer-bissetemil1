let firstRun = true
let baseLayer;


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
  baseLayer = loadImage('wave.png');

  firstRun = false
  }

  background(20)
  image( baseLayer, 0,0)




}

