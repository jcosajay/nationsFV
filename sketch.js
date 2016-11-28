var nations;
var myfont;

var inputMouse = 0;
var inputRange = 0;

var colors = [];

var value = 0;

function preload(){
  nations = loadJSON("nations.json");
  myFont = loadFont('HelveticaNeue-Thin.otf');
}





function setup() {
  
  colors = [color(70,137,102),color(255,240,165),color(255,176,59),color(182,73,38),color(142,40,0),color(25,108,137)];
  createCanvas(1250,800);
  angleMode(DEGREES);
  inputRange = width/2
}

function draw(){
  
  background(300);
  noStroke();
  
   textSize(36);
   fill('black');
   
   push();
   translate(50,300);
   rotate(-90);
   text("Life Expectancy",0,0);
   pop();
  
  text("Income",650,675);
  text("Life Expectancy Vs Income",650,50);
  
  textSize(20);
  textAlign(LEFT);
  text("America", 145, 675);
  text("Europe & Central Asia", 145, 700);
  text("Sub-Saharan Africa", 145, 725);
  text("Middle East & North Africa", 350, 675);
  text("East Asia & Pacific", 350, 700);
  text("South Asia", 350, 725);
  
  text("0 Million", 811, 675);
  text("400 Million", 811, 716);
  
  textFont(myFont);
  
  
  //textSize(36);
  //fill(130,140,100);
  

  
  inputMouse = constrain(mouseX,width/2,width) - width/2;
  
  
  textSize(150);
  textAlign(LEFT);
  text(floor(map(inputMouse,0,width/2,1800,2009)),width*0.6,height*0.7)
  
  
  
   textSize(20);
   stroke('white');
   textAlign(CENTER);
 
  
  //dataEllipse(width/2,height/2,0,"population",inputMouse,inputRange);
  for(var i = 0;i < 100;i++){
    var tempY = dataReturn(i,"lifeExpectancy",height-20,0,inputMouse,inputRange);
    var tempX = dataReturn(i,"income",150,width-20,inputMouse,inputRange);
    fill(i*2,200 - (i*3),i*9);
    dataEllipse(tempX,tempY,i,"population",20,50,inputMouse,inputRange);
  }
  
  stroke('black');
  fill(100);
  line (100,100,100,640);
  line (100,640,950,640);
     for(var i = 150; i < 1000; i+=50){
     
      line(i,600,i,640);

      
      var incomeNumber = round(map(i,150,1000,0,100));
      push();
      translate(i-5,615);
      rotate(-90);
      text(incomeNumber + " K",0,0);
      pop();
      
     }
     
     
    for(var i = 100; i < 650; i+=60){
     
     
      line(95,i,100,i);

      textSize(15)
      var lifeExpectancyNumber = round(map(i,1000,0,0,90));
      push();
      translate(75,i+5);
      //rotate(-90);
      text(lifeExpectancyNumber,0,0);
      pop();
      
     }
     
      noStroke();
      fill(colors[0]);
     ellipse(135, 669, 10, 10);
     
      fill(colors[1]);
     ellipse(135, 693, 10, 10);
     
     fill(colors[2]);
     ellipse(135, 717, 10, 10);
     
     fill(colors[3]);
     ellipse(341, 669, 10, 10);
     
     fill(colors[5]);
     ellipse(341, 693, 10, 10);
     
     fill(colors[4]);
     ellipse(341, 717, 10, 10);
      
      
     fill(100);
     ellipse(785, 669, 10, 10);
     ellipse(785, 709, 50, 50);
          
     
  //fill(value);
  //rect(25, 25, 50, 50);
  
  
  
  
  /////////////////////////////////////////////////////////////
}

  function dataEllipse(xpos,ypos,nationNumber,property,minSize,maxSize,inputPos,inputMax){
  
  var category = "nations[" + nationNumber + "]." + property;
  
  var inputPropLength = eval(category + ".length - 1");
  
  var inputProp = map(inputPos,0,inputMax,0,inputPropLength);
  
  inputProp = floor(inputProp);
  
  inputProp = constrain (inputProp,0,inputPropLength);
  
  var propName = "region";
  var region = eval("nations[" + nationNumber + "]." + propName);
  
    switch(region){
    case "America":
      fill(colors[0]);
    break;
      
    case "Europe & Central Asia":
      fill(colors[1]);
    break;
    
    case "Sub-Saharan Africa":
      fill(colors[2]);
    break;
    
    case "Middle East & North Africa":
      fill(colors[3]);
    break;
    
    case "East Asia & Pacific":
      fill(colors[4]);
    break;
    
    case "South Asia":
      fill(colors[5]);
    break;
    
    default:
      fill(0);
    break;
  }
  
  var visualizeProp = eval(category + "[inputProp][1]");
  
  visualizeProp = map(visualizeProp,0,140000000,minSize,maxSize);
  
  ellipse(xpos,ypos,visualizeProp,visualizeProp);
  
  fill(255);
  
  /* var nations = nations;
  var name = name;
  var countries = eval(category + "[nations][name]");
  
  //text(countries);
  
  */
  }

  function dataReturn (nationNumber,property,minRange,maxRange,inputPos,inputMax){
     var category = "nations[" + nationNumber + "]." + property;
     var inputPropLength = eval(category + ".length - 1");
       var inputProp = map(inputPos,0,inputMax,0,inputPropLength);
       inputProp = floor(inputProp);
       inputProp = constrain(inputProp,0,inputPropLength);
       var visualizeProp = eval(category + "[inputProp][1]");
        var propertyMax = 0;
        
        if(property == "lifeExpectancy"){
          propertyMax = 90;
        }
        if(property == "income"){
          propertyMax =80000;
        }
        visualizeProp = map(visualizeProp,0,propertyMax,minRange,maxRange);
          
          return visualizeProp;
  }
  

  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  //fill(130,140,100);
  //mouseX and map it onto the number of one the entries
  //floor rids decimals
  //constrain to limit postion,box
  
  //how many entries of population
  /////////
  /*
  var inputPopLength = nations[0].population.length - 1;
  
  var inputPop = map(mouseX,0,width,0,inputPopLength);
  inputPop = floor(inputPop);
  inputPop = constrain (inputPop,0,inputPopLength);
  
  var angolaPop = nations[0].population[inputPop][1];
  
 
  
  ////////////////
  
  var inputLifeLength = nations[0].lifeExpectancy.length - 1;
  
  
  var inputLife = map(mouseX,0,width,0,inputLifeLength);
  inputLife = floor(inputLife);
  inputLife = constrain (inputLife,0,inputLifeLength);
  
  var angolaLife = nations[0].lifeExpectancy[inputLife][1];
  
  //println(angolaLife);


  
  /////////////////
  var inputInLength = nations[0].income.length - 1;
  
  
  var inputIn = map(mouseX,0,width,0,inputInLength);
  inputIn = floor(inputIn);
  inputIn = constrain (inputIn,0,inputInLength);
  
  var angolaIn = nations[0].income[inputIn][1];
  
   //printIn(angolaLife);
  /////////////////////////////////////////////////////////////////
  
  
  
  
  
  
  
  
  
  
    var inputPopLength = nations[124].population.length - 1;
  
  var inputPop = map(mouseX,0,width,0,inputPopLength);
  inputPop = floor(inputPop);
  inputPop = constrain (inputPop,0,inputPopLength);
  
  var italyPop = nations[124].population[inputPop][1];
  
 
  
  ////////////////
  
  var inputLifeLength = nations[124].lifeExpectancy.length - 1;
  
  
  var inputLife = map(mouseX,0,width,0,inputLifeLength);
  inputLife = floor(inputLife);
  inputLife = constrain (inputLife,0,inputLifeLength);
  
  var italyLife = nations[124].lifeExpectancy[inputLife][1];
  
  //println(angolaLife);


  
  /////////////////
  var inputInLength = nations[124].income.length - 1;
  
  
  var inputIn = map(mouseX,0,width,0,inputInLength);
  inputIn = floor(inputIn);
  inputIn = constrain (inputIn,0,inputInLength);
  
  var italyIn = nations[124].income[inputIn][1];
  
  
  //////////////////////////////////////////////////////////////
  
  
  
  
  
  
  
  
  
    var inputPopLength = nations[171].population.length - 1;
  
  var inputPop = map(mouseX,0,width,0,inputPopLength);
  inputPop = floor(inputPop);
  inputPop = constrain (inputPop,0,inputPopLength);
  
  var singaporePop = nations[171].population[inputPop][1];
  
 
  
  ////////////////
  
  var inputLifeLength = nations[171].lifeExpectancy.length - 1;
  
  
  var inputLife = map(mouseX,0,width,0,inputLifeLength);
  inputLife = floor(inputLife);
  inputLife = constrain (inputLife,0,inputLifeLength);
  
  var singaporeLife = nations[171].lifeExpectancy[inputLife][1];
  
  //println(angolaLife);


  
  /////////////////
  var inputInLength = nations[171].income.length - 1;
  
  
  var inputIn = map(mouseX,0,width,0,inputInLength);
  inputIn = floor(inputIn);
  inputIn = constrain (inputIn,0,inputInLength);
  
  var singaporeIn = nations[171].income[inputIn][1];
  
  
  
  */
  //////////////////////

  
  
  
  
  
  
  
  
  
  
  /*
  textAlign(CENTER);
  fill(255);
  text(nations[0].population[inputPop][0],width*.5,height*.10);
  /////////////////////////////////
   // var angolaIncome = nations[0].income[inputPop][1];
  angolaPop = map(angolaPop,0,12707546,0,250);
  fill(130,140,100);
  ellipse(width*.25,height*.25,angolaPop,angolaPop);
  textAlign(CENTER);
  fill(255);
  text(nations[0].population[inputPop][1],width*.25,height*.25);
  
  angolaLife = map(angolaLife,0,50,0,250);
  fill(111,150,200);
  ellipse(width*.5,height*.25,angolaLife,angolaLife);
  fill(255);
  text(nations[0].lifeExpectancy[inputLife][1],width*.5,height*.25);
  
  angolaIn = map(angolaIn,0,5055,0,250);
   fill(211,250,300);
   ellipse(width*.75,height*.25,angolaIn,angolaIn);
   fill(255);
   text(nations[0].income[inputIn][1],width*.75,height*.25);
   
   
   //////////////////////////////////////////////
  italyPop = map(italyPop,0,58145321,0,250);
  fill(130,140,100);
  ellipse(width*.25,height*.5,italyPop,italyPop);
  textAlign(CENTER);
  fill(255);
  text(nations[124].population[inputPop][1],width*.25,height*.5);
  
  italyLife = map(italyLife,0,80,0,250);
  fill(111,150,200);
  ellipse(width*.5,height*.5,italyLife,italyLife);
  fill(255);
  text(nations[124].lifeExpectancy[inputLife][1],width*.5,height*.5);
  
  italyIn = map(italyIn,0,26160,0,250);
   fill(211,250,300);
   ellipse(width*.75,height*.5,italyIn,italyIn);
   fill(255);
   text(nations[124].income[inputIn][1],width*.75,height*.5);
   
   
   //////////////////////////////////////////////////
  singaporePop = map(singaporePop,0,4608167,0,250);
  fill(130,140,100);
  ellipse(width*.25,height*.75,singaporePop,singaporePop);
  textAlign(CENTER);
  fill(255);
  text(nations[171].population[inputPop][1],width*.25,height*.75);
  
  singaporeLife = map(singaporeLife,0,80,0,250);
  fill(111,150,200);
  ellipse(width*.5,height*.75,singaporeLife,singaporeLife);
  fill(255);
  text(nations[171].lifeExpectancy[inputLife][1],width*.5,height*.75);
  
  singaporeIn = map(singaporeIn,0,43526,0,250);
   fill(211,250,300);
   ellipse(width*.75,height*.75,singaporeIn,singaporeIn);
   fill(255);
   text(nations[171].income[inputIn][1],width*.75,height*.75);
   

  
 // printIn(inputPop);
//.59  

  */
