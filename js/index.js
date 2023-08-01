$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > ($(window).height() * 0.8));
  });
});

var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("accordian-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

document.querySelector('#navbar-toggle').addEventListener("click", () => {
  var drawer = document.querySelector('#nav-content');
  var icon = document.querySelector('#icon');
  drawer.childNodes.forEach((node) => {

    node.addEventListener("click", () => {
      icon.classList.add('down');
      icon.classList.remove('up');
      drawer.classList.remove("navbar-expanded");
      drawer.classList.add("navbar-collapsed");
      drawer.attributes.collapsed.value = "true";
    });
  });
  if (drawer.attributes.collapsed.value == "true") {
    icon.classList.remove('down');
    icon.classList.add('up');
    drawer.classList.add("navbar-expanded");
    drawer.classList.remove("navbar-collapsed");
    drawer.attributes.collapsed.value = "false";
  } else {
    icon.classList.add('down');
    icon.classList.remove('up');
    drawer.classList.remove("navbar-expanded");
    drawer.classList.add("navbar-collapsed");
    drawer.attributes.collapsed.value = "true";
  }

});

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

function download() {
  var userAgent = navigator.userAgent || window.opera;
  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod|Macintosh|Apple/.test(userAgent) && !window.MSStream) {
    console.log("ios");
    window.open('https://apps.apple.com/us/app/doctunes-pdf-text-to-speech/id6443713628');
  } else {
    console.log("android");
    window.open('https://play.google.com/store/apps/details?id=com.boss.audiobookconverter');

  }
}
