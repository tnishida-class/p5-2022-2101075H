// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;

  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      console.log(i, j); 
       
      if((i+j)%2==0) {
        fill(255,255,255);
      }
      else{
        fill(125,125,125)
      }
   rect(i * 25, j * 25, 25, 25);

   if((i+j)%2==1&&j<3){
    fill(255,0,0)
    ellipse(i*25+12.5,j*25+12.5,20)
   }

   if((i+j)%2==1&&j>4){
    fill(0,0,0)
    ellipse(i*25+12.5,j*25+12.5,20)
   }
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}
