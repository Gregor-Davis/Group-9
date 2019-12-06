

mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

////////////////////////////
