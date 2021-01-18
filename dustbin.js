class Dustbin{

    constructor(x,y,wideth,height){

var options ={
   'isStatic': true

}
this.body1=Bodies.rectangle(x,y,width,height,options);
World.add(world,this.body1);
this.body2=Bodies.rectangle((x-(width/2)),(y-(height*2)),width,height,options);
World.add(world,this.body2);
this.body3=Bodies.rectangle((x-(width/2)),(y-(height*2)),width,height,options);

World.add(world,this.body3);
this.body1.width=width;
this.body1.height=height;
    }

display(){
fill("white");
rect(this.body1.position.x,this.body1.position.y)
rect(this.body2.position.x-(this.body2.width/2,this.body2.height))
rect(this.body3.position.x-(this.body3.width/2,this.body3.height))



}




}