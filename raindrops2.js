function Ray() {
  this.x = random(-500,-50);
  this.y = random(height);
  this.z = random(0, 10);
  this.len = map(this.z, 0, 20, 1, 100);
  this.xspeed = map(this.z, 0, 20, 1, 20);

  this.fall = function() {
    this.x = this.x + this.xspeed;
    var grav = map(this.z, 0, 20, 0, 0.2);
    this.xspeed = this.xspeed + grav;

    if (this.x > width) {
      this.x = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  }

  this.show = function() {
    var thick = map(this.z, 0, 20, 1, 1);
    var r,g,b;
    r = random(255);
    b = random(255);
    g = random(255);
    strokeWeight(thick);
    stroke(r, g, b);
    line(this.x, this.y, this.y, this.y+this.len);
  }
}