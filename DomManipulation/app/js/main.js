
var colorScheme = [
          "#1A597A", "#1277A1", "#1FBAD1", "#87C761", "#FF9970"
      ]
      
var sections = [
  {
      id: 'loader',
      bg: colorScheme[0]
  },
  {
      id: 'home',
      bg: colorScheme[1]
  },
  {
      id: 'grid',
      bg: colorScheme[2]
  },
  {
      id: 'alphabet',
      bg: colorScheme[3]
  }
];

var slideshowInner,
    currSlideIndex = 0;

function init () {
    console.log('init!');
    var wrapperEl = document.getElementById('wrapper');
    
    slideshowInner = document.createElement('div');
    slideshowInner.className = "slideshowInner";
    wrapperEl.appendChild(slideshowInner);
    
    for(var i=0; i<sections.length; i++){
        var newDiv = document.createElement('div');
        newDiv.id = sections[i].id;
        newDiv.innerHTML = sections[i].id;
        newDiv.className = "slide";
        // newDiv.style.background = "#FF0000";
        newDiv.style.backgroundColor = sections[i].bg;
        slideshowInner.appendChild(newDiv);
        
        sections[i].domElem = newDiv;
    }
    
    document.body.addEventListener('click', nextSlide);
    // $('.slide').on('click', nextSlide);
    
    window.onresize = resize.bind(this);
    resize.call(this);
}

function gotoSlideById(id){
    for(var i=0; i<sections.length; i++){
        if(sections[i].id == id){
            gotoSlide(i);
        }
    }
}

function gotoSlide(num){
    currSlideIndex = num;
    // slideshowInner.style.top = (-num*window.innerHeight)+'px';
    console.log('currSlideIndex: '+currSlideIndex);
    TweenMax.to(slideshowInner, 0.75, {top: (-num*window.innerHeight)+'px', ease: Expo.easeInOut})
}

function nextSlide(){
    gotoSlide( (currSlideIndex+1)%sections.length );
}
function prevSlide(){
    gotoSlide( (currSlideIndex-1+sections.length)%sections.length );
}

function resize(){
    var w = window.innerWidth,
        h = window.innerHeight;
        
    var heightOverNum = h/sections.length,
        widthOverNum = w/sections.length;
    
    for(var i=0; i<sections.length; i++){
        sections[i].domElem.style.height = h+'px';
        sections[i].domElem.style.top = (h*i)+"px";
        
        // sections[i].domElem.style.width = widthOverNum+"px";
        // sections[i].domElem.style.left = (widthOverNum*i)+"px";
    }
    
}

// call init on document ready
$(init);
