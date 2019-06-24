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
  el.style.position = 'absolute';
  el.style.top = '-200px';
  if (mouse_y > 700 && mouse_y < (document.querySelector('footer').offsetTop)) {
      el.style.position = 'absolute';
      el.style.top = -1 * window.innerHeight + 'px';
  } else {
      el.style.top = '0px';
      el.classList.add('sticky');
      el.style.position = 'fixed';
  }
});

// OnScroll event listener for mainHeading
window.addEventListener('scroll', function(event){
  let mouse_y = window.pageYOffset;
  let elHeading = document.querySelector('.mainBannerHeading');
  let offSetYScroll = 128; // interger
  let centerObj = window.innerHeight*0.3332 - elHeading.style.height; // center elHeading
  if (mouse_y < offSetYScroll) {
    elHeading.style.top = centerObj + 'px';
  } else {
    elHeading.style.top = window.innerHeight/mouse_y * offSetYScroll + 'px';
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
