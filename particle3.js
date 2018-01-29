 function Particle() 
 {
  // this.pos.x = this.prev.x = random(width);
  // this.pos.y = this.prev.y = random(height);
  this.pos  = createVector(random(width),random(height));
  this.prev  = createVector();
  this.prev = this.pos;
  this.integrate = function() 
  {
    var velocityX = (this.pos.x - this.prev.x) * damping;
    var velocityY = (this.pos.y - this.prev.y) * damping;

    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;
    this.pos.x += velocityX;
    this.pos.y += velocityY;



    }

  this.attract = function(x, y) 
  {
    var dx = x - this.pos.x;
    var dy = y - this.pos.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    this.pos.x += dx / distance;
    this.pos.y += dy / distance;
  }

  this.show = function()
  {
    stroke(255);
    strokeWeight(5);
    point(this.pos.x,this.pos.y);
  }
}