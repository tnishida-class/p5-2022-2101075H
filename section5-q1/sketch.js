// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46",0,0,255,100,200);
}

function balloon(t,a,b,c,x,y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  fill(a,b,c);
  rect(x, y, w + x, h + y);
  fill(255);
  text(t,x + w / 2,y + h / 2);
}
