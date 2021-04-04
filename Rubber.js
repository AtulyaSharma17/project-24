class Rubber{
	constructor(x,y,r){
	
	var options={
		restitution:0.8,
		friction:1,
		density:1
	}
	this.body=Bodies.circle(710,370,40,options);
	this.radius=40;
	World.add(world,this.body);
}
	
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipseMode(RADIUS);
            strokeWeight(2);
            stroke("white");
            fill("blue");
            ellipse(0,0,40);
			pop()

		
	}

}