function Particle()
{
	this.pos  = createVector(random(width),random(height));
	// this.pos = createVector(200,100);
	this.velocity = p5.Vector.random2D();
	this.acc = createVector();
	this.r = 4;
	this.easing = random(1);


	this.update = function()
	{
		this.velocity.add(this.acc);
		this.pos.add(this.velocity);
		this.velocity.limit(13);
		this.acc.mult(0);
	}

	this.attract = function(target)
	{
		var force = p5.Vector.sub(target,this.pos);
		var dist = force.magSq();

		force.normalize();
		var strength = 1000/dist;
		dist = constrain(dist,1,500);
		// force.setMag(strength)

		this.acc = (force);

		

		

	}


	this.show = function()
	{
		fill(255);
		stroke(255);
		strokeWeight(4);
		point(this.pos.x, this.pos.y);
		// ellipse(this.pos.x,this.pos.y,this.r,this.r);

	}
}