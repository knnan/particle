var damping = 0.999;
var part = [];
function setup()
{
	createCanvas(600,600);
	for(var i=0; i<30;i++)
	{
		part[i] = new Particle();
	}
}



function draw()
{
	background(51);
	for(var i=0; i<30;i++)
	{
		part[i].attract(mouseX,mouseY);
		part[i].integrate();
		part[i].show();
	}

}