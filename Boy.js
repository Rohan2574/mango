class Boy
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.w=50;
        this.y=50;
		this.image=loadImage("image/boy.png");
		this.body=Bodies(this.x, this.y, this.w,this.y, options)
		World.add(world, this.body);

	}
	display()
	{
			var boypos=this.body.position;		
			push()
			translate(boypos.x, boypos.y);
			
			fill(255,0,255)
			imageMode(CENTER);
			
			image(this.image, 0,0,this.w, this.h)
			pop()
			
	}

}