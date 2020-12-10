const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup(){
createCanvas(1500,800)
background("aqua")
    engine=Engine.create();
    world=engine.world;
    Engine.run(engine);
    
    d=new striker(200,600,43,43)
    dr=new rope(d.body,{x:200,y:600})
    p1=new platform(1200,665,500,20)
    //b11=new box(1300,550,50,50)
    b2=new box(1250,550,50,50)
    b3=new box(1200,550,50,50)
    b4=new box(1150,550,50,50)
    b5=new box(1110,550,50,50)
    b6=new box(1050,550,50,50)
    b1=new box(1000,550,50,50)
    
    r1=new box(1300,600,50,50)
    r2=new box(1200,500,50,50)
    r3=new box(1200,600,50,50)
    r4=new box(1150,600,50,50)
    r5=new box(1110,600,50,50)
    r6=new box(1050,600,50,50)
    r7=new box(1000,600,50,50)
    bro=new box(1100,500,50,50)
    bro1=new box(1150,500,50,50)
    bro2=new box(1050,500,50,50)
    bro3=new box(1100,460,50,50)

}


function draw(){
background("aqua")
Engine.update(engine);
d.display();
dr.display();
p1.display();
//b1.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
bro.display();
bro1.display();
bro2.display();
bro3.display();
//if(b11.body.speed>0){
  //  b11.display();
//}



r1.display();
r2.display();
r3.display();
r4.display();
r5.display();
r6.display();
r7.display();
textSize(30)
text("Drag the striker and release to shoot",200,50)
//line(p1x,p1y,p2x,p2y)
}

function mouseDragged(){
Matter.Body.setPosition(d.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){  
dr.fly();
}

function keyPressed(){
  if(keyCode === 32){
      dr.attach(d.body);
      
  }

}
