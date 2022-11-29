// 最終課題を制作しよう
let x,y,a,b,c,d,e,f,vx, vy,va,vb,vc,vd,ve,vf;
const g = 1; // 重力加速度
const vyMax = 30;
const vbMax = 30;
const vdMax = 30;
const vfMax = 30;
let angle;
let count;
let cycle;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  a = width / 2;
  b = height / 2;
  c = width / 2;
  d = height / 2;
  e = width / 2;
  f = height / 2;
  vx = 8;
  vy = 8;
  va = 16;
  vb = 16;
  vc = 24;
  vd = 24;
  ve = 32;
  vf = 32
  angle = 0
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
 
  stroke(255,255,0);
  fill(255,255,0);
  count = (count + 1) % cycle;
  size = sin(count*TWO_PI / 10)
  star(x, y, size * 50);
  x += vx;
  y += vy;

 
  // 重力（コメント機能でオンオフ切り替えて実行してみましょう）
  vy = constrain(vy + g, -vyMax, vyMax);

  // 端の処理パターン (1) 反対側から出てくる
  // if(x > width){ x = 0; }
  // else if(x < 0){ x = width; }
  // if(y > height){ y = 0; }
  // if(y < 0){ y = height; }

　// 端の処理パターン (2) 跳ね返る
  if(x < 0 || x > width){ vx = -1 * vx; }
  if(y > height){ vy = -1 * vy; }
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);

 
  stroke(255);
  fill(255);
  count = (count + 1) % cycle;
  size = sin(count*TWO_PI / 25)
  star(a, b, size * 100);
  a += va;
  b += vb;

 
  // 重力（コメント機能でオンオフ切り替えて実行してみましょう）
  vb = constrain(vb + g, -vbMax, vbMax);

  // 端の処理パターン (1) 反対側から出てくる
  // if(x > width){ x = 0; }
  // else if(x < 0){ x = width; }
  // if(y > height){ y = 0; }
  // if(y < 0){ y = height; }

　// 端の処理パターン (2) 跳ね返る
  if(a < 0 || a > width){ va = -1 * va; }
  if(b > height){ vb = -1 * vb; }
  a = constrain(a, 0, width);
  b = constrain(b, 0, height);


  stroke(0,0,255);
  fill(0,0,255);
  count = (count + 1) % cycle;
  size = sin(count*TWO_PI / 50)
  star(c, d, size * 150);
  c += vc;
  d += vd;

 
  // 重力（コメント機能でオンオフ切り替えて実行してみましょう）
  vd = constrain(vd + g, -vdMax, vdMax);

  // 端の処理パターン (1) 反対側から出てくる
  // if(x > width){ x = 0; }
  // else if(x < 0){ x = width; }
  // if(y > height){ y = 0; }
  // if(y < 0){ y = height; }

　// 端の処理パターン (2) 跳ね返る
  if(c < 0 || c > width){ vc = -1 * vc; }
  if(d > height){ vd = -1 * vd; }
  c = constrain(c, 0, width);
  d = constrain(d, 0, height);


  stroke(255,0,0);
  fill(255,0,0);
  count = (count + 1) % cycle;
  size = sin(count*TWO_PI / 100)
  star(e, f, size * 200);
  e += ve;
  f += vf;

 
  // 重力（コメント機能でオンオフ切り替えて実行してみましょう）
  vf = constrain(vf + g, -vfMax, vfMax);

  // 端の処理パターン (1) 反対側から出てくる
  // if(x > width){ x = 0; }
  // else if(x < 0){ x = width; }
  // if(y > height){ y = 0; }
  // if(y < 0){ y = height; }

　// 端の処理パターン (2) 跳ね返る
  if(e < 0 || e > width){ ve = -1 * ve; }
  if(f > height){ vf = -1 * vf; }
  e = constrain(e, 0, width);
  f = constrain(f, 0, height);
}





function star(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

