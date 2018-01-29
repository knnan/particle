var p =[] ;
var no =500;
var attractors =[] ;
var attracter;
var limit;

function setup()
{
	createCanvas(800,800);
	// limit = createSlider(0,50,1);

// limit.position(10,10);
for (var i = 0;i< no;i++)
{
	p[i] = new Particle();
}

attracter = createVector(width/2,height/2);
	// background(255);
}

function mousePressed()
{
attractors.push(createVector(mouseX,mouseY));

}
function draw()
{
	background(51);
	stroke(0,255,0);
	strokeWeight(4);

// for (var i = 0;i< attractors.length;i++)
// {

// }
	attracter.x = mouseX;
	attracter.y = mouseY;
	point(attracter.x,attracter.y);
	for ( i = 0;i< p.length;i++)
	{
// for (var j = 0;j< attractors.length;j++)
// {

// }
		p[i].attract(attracter);
		p[i].update();
		p[i].show();
	}

	
}