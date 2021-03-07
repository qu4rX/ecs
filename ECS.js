//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction(); scrollFunction1()};

function scrollFunction1() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px 10px";
    document.getElementById("navbar").style.transition = "300ms";
    document.getElementById("logo").style.fontSize = "10px";
} else {
    document.getElementById("navbar").style.padding = "7px 10px";
    document.getElementById("navbar").style.transition = "300ms";
    document.getElementById("logo").style.fontSize = "15px";
  }
}