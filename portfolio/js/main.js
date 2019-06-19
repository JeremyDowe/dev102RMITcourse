const viewport_h = window.outerHeight || document.documentElement.clientHeight;
const viewportsOnPage = document.querySelectorAll('.viewport');

function viewportSetHeightFunc() {
  for(i=0;i<viewportsOnPage.length;i++){
    viewportsOnPage[i].style.height = 978 + 'px';
  }
};

function blurFunc(element) {
  const logo = document.querySelector(element);
  let myTimeOut = setTimeout(function(){
    logo.style.filter = 'blur(0px)';
    logo.style.WebkitFilter = 'blur(0px)';
    logo.style.opacity = '1';
  },500);
};

//call the func.
viewportSetHeightFunc();

// OnScroll event listener for sticky navigation
window.addEventListener('scroll', function(event){
  let mouse_y = window.pageYOffset;
  let el = document.querySelector('nav');
  if (mouse_y > 580) {
      el.style.position = 'absolute';
      el.classList.add('sticky');
      if (mouse_y <= viewport_h * 2) {
          el.style.position = 'fixed';
          el.style.top = window.innerHeight;
      }
  } else {
    el.style.position = 'absolute';
    el.classList.remove('sticky');
  }
});

window.addEventListener('resize', function(event){
  const viewportsOnPage = document.querySelectorAll('.viewport');
  viewportsOnPage.forEach(function(elems, index){
      elems.style.height = event.srcElement.outerHeight + 'px';
  });
});

// Dark mode checkbox (change) event
const darkmodeSwitch = document.querySelector('.OnOffSwitch');

darkmodeSwitch.addEventListener('change', function(event){
	 //event.target.checked TRUE or FALSE set the attribute on document body
   if (event.target.checked){
     document.body.setAttribute('data-theme', 'dark');
   } else {
     document.body.removeAttribute('data-theme');
   };
});

window.addEventListener('load', function(event){
    blurFunc('#logo');
});
