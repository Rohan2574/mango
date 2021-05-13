class Launcher{
    constructor(body1,point2){
        var option = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.09,
            length: 7
        }
        this.launcher = Constraint.create(option)
        this.pointB=point2
        World.add(world,this.launcher)  
    }
    display(){
        if(this.launcher.bodyA){
            var p1=this.launcher.bodyA.position
            var p2 = this.pointB
            strokeWeight(3)
            line(p1.x,p1.y,p2.x,p2.y)
        }
        
    }
    fly(){
        this.launcher.bodyA=null
    }
    attach(body){
     this.launcher.bodyA=body
    }
}  