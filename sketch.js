function preload() {
  // put preload code here
}

var colorList = ['#ffc532',
                 '#ffd56d',
                 '#8eedd8',
                 '#b8f2e5',
                 '#59a896',
               '#e2a109'];


                 function polygon(x, y, radius, npoints) {
                   var angle = TWO_PI / npoints;
                   beginShape();
                   for (var a = 0; a < TWO_PI; a += angle) {
                     var sx = x + cos(a) * radius;
                     var sy = y + sin(a) * radius;
                     vertex(sx, sy);
                   }
                   endShape(CLOSE);
                 }

  function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
  background('#fceecc');
  frameRate(5);


}

function draw() {
  // put drawing code here
  for(var x = 2; x < windowWidth + 40; x += 80) {
    for(var y = 2; y < windowHeight + 40; y += 69) {

      noStroke();
      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(color(colorHex));
      polygon(x, y, 40, 6);
    }
  }

}
