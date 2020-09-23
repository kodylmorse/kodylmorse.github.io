// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 50) {
    document.getElementById("mainlogo").style.width = "54px";
  } else {
    document.getElementById("mainlogo").style.width = "54px";
  }
} 