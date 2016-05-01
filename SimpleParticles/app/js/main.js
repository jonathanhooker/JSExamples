
var wrapperEl;
    
function init () {
    console.log('init!');
    wrapperEl = document.getElementById('wrapper');
    
    document.body.addEventListener('mousemove', onClickFn);
    
    window.onresize = resize.bind(this);
    resize.call(this);
}

// e is short for event, the object that is passed with the mouse event
function onClickFn(e){
    var mX = e.clientX,
        mY = e.clientY;
       
    // calling a bunch of logs will make things run slow! 
    // console.log('onClickFn! '+mX+', '+mY);
    
    // lets create a random offset
    var distance = 50,
        xOffset = (Math.random()*2-1)*distance,
        yOffset = (Math.random()*2-1)*distance;
    
    var newRing = new Ring(document.body, mX+xOffset, mY+yOffset);
    newRing.animate();
}

function resize(){
    var w = window.innerWidth,
        h = window.innerHeight;
        
}

// call init on document ready
$(init);


// ---------------- RINGS -------------

function Ring(container, xPos, yPos){
    var outerDiv = document.createElement('div'),
        innerDiv = document.createElement('div');
    
    // create outer div, basically just a container
    outerDiv.style.position = "absolute";
    outerDiv.style.left = xPos+'px';
    outerDiv.style.top = yPos+'px';
    
    // create inner div, this is what you see
    innerDiv.style.position = "absolute";
    innerDiv.style.border = "2px solid #ff0000";
    innerDiv.style.top = innerDiv.style.left = "0px";
    innerDiv.style.width = "0px";
    innerDiv.style.height = "0px";
    innerDiv.style.borderRadius = "1000px";
    
    // add them to the DOM
    outerDiv.appendChild(innerDiv);
    container.appendChild(outerDiv);
    
    function cleanUp(){
      outerDiv.removeChild(innerDiv);
      container.removeChild(outerDiv);
    }
    function animate(){
      TweenLite.to(innerDiv, 1, {opacity:0, width: 100, height: 100, top:-50, left:-50, onComplete:cleanUp});
    }
    
    // object exports aka public variables
    this.animate = animate;
}

// wierd context example
var data = {id:"jump"};
var data2 = {id:"dive"};
var id = "mainWindow";

function whatIsId(){
  console.log(this.id);
}

whatIsId.call(data);
whatIsId.call(data2);
whatIsId();
    




