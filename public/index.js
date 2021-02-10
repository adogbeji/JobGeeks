// jshint esversion:6

// ALERT MESSSAGE - HOME PAGE

// This code allows dismissal of multiple alert messages without using 'onclick' on each span tag


// Get all elements with class="closebtn"
const close = document.getElementsByClassName('closebtn');
let i;

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
  // When someone clicks on a close button
  close[i].onclick = function(){

    // Get the parent of <span class="closebtn"> (<div class="alert-box">)
    const div = this.parentElement;

    // Set the opacity of div to 0 (transparent)
    div.style.opacity = '0';

    // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
    setTimeout(function(){ div.style.display = 'none'; }, 600);
  };
}
