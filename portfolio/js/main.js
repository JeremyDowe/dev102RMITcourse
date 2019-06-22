const viewport_h = window.outerHeight || document.documentElement.clientHeight;
const viewportsOnPage = document.querySelectorAll('.viewport');

function viewportSetHeightFunc() {
  for(i=0;i<viewportsOnPage.length;i++){
    viewportsOnPage[i].style.height = window.innerHeight + 'px';
  }
};

function blurFunc(element) {
  const logo = document.querySelector(element);
  let myTimeOut = setTimeout(function(){
    logo.style.filter = 'blur(0px)';
    logo.style.WebkitFilter = 'blur(0px)';
    logo.style.opacity = 1;
  },500);
};

//call the func.
viewportSetHeightFunc();

// OnScroll event listener for sticky navigation
window.addEventListener('scroll', function(event){
  let mouse_y = window.pageYOffset;
  let el = document.querySelector('nav');
  let elHeading = document.querySelector('.mainBannerHeading');
  if (mouse_y > 1 && mouse_y < 399) {
      el.style.position = 'absolute';
      el.style.top = '-200px';
  } else if (mouse_y > 400 && mouse_y < (window.innerHeight*3)) {
      el.style.top = '0px';
      el.classList.add('sticky');
      el.style.position = 'fixed';
      elHeading.style.top = (-1 * (mouse_y/2)+window.innerHeight/2) + 'px';
      console.log('this first part called');
  } else {
      el.style.top = '0px';
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
     window.location.hash = 'darkmode';
   } else {
     document.body.removeAttribute('data-theme');
     window.location.hash = '';
   };
});

window.addEventListener('load', function(event){
    blurFunc('#logo');
    if (window.location.hash.substring(1) == 'darkmode'){
      document.body.setAttribute('data-theme', 'dark');
      document.getElementById('myOnOffSwitch').checked = true;
    }
});
