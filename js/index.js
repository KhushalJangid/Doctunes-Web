$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > ($(window).height()*0.8));
  });
});

var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accordian-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

document.querySelector('#navbar-toggle').addEventListener("click",()=>{
  var drawer = document.querySelector('#nav-content');
  var icon = document.querySelector('#icon');
  if (drawer.attributes.collapsed.value == "true") {
    icon.classList.remove('down');
    icon.classList.add('up');
    drawer.classList.add("navbar-expanded");
    drawer.classList.remove("navbar-collapsed");
    drawer.attributes.collapsed.value = "false";
}else{
  icon.classList.add('down');
    icon.classList.remove('up');
  drawer.classList.remove("navbar-expanded");

    drawer.classList.add("navbar-collapsed");
    drawer.attributes.collapsed.value = "true";
}

});
