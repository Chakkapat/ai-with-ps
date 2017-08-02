function setup() {
    createCanvas(500, 500)
}

function draw() {
    background(0, 255, 0)
    var size = 100;
    fill(255,0,0);
    rect(0,0,255,255)
    rect(width/2 - size/2, 
         height/2-size/2, size, size)
}