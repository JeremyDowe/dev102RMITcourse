// Dark mode checkbox (change) event
const darkmodeSwitch = document.querySelector('.OnOffSwitch');

darkmodeSwitch.addEventListener('change', function(event){
	 //event.target.checked TRUE or FALSE set the attribute on document body
   if (event.target.checked){
     document.body.setAttribute('data-theme', 'dark')
   } else {
     document.body.removeAttribute('data-theme')
   }
});

// OnScroll event listener for sticky navigation
const documentTop = window.pageYOffset;

window.addEventListener('scroll', function(event){
  let mouse_y = window.pageYOffset;
  let el = document.querySelector('nav');
  if (mouse_y > 180){
      el.style.position = 'fixed';
      el.classList.add('sticky');
      if (mouse_y == 520) {
          el.style.position = 'absolute';
          el.style.top = 0;
      }
  } else {
      el.style.position = 'absolute';
      el.classList.remove('sticky');
  }
});
