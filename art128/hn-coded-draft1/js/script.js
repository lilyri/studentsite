 
document.addEventListener("DOMContentLoaded", function() {
  
  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
  }

    //TOGGLE MENU NAV VIA ADDING/REMOVING A DATA-ATTRIBUTE
    const menubutton = document.querySelector('.menu-button');
    const menunav = document.querySelector('.toggle-nav'); 
    menubutton.addEventListener('click', function() {
      if (menunav.getAttribute('data-navstate') === 'open') { 
            // if ture do this
          menunav.setAttribute('data-navstate', 'closed');
      } else {
            // else (if false) do this
          menunav.setAttribute('data-navstate', 'open');
      }
    });
  
  });