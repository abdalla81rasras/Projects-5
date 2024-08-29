$(function () {
    $('.pop-button').popover({
      trigger: 'focus'
    });
  });
  
  $('.popover-header').click(function() {
      $('.pop-button').popover('hide');
  });

function popup() {
var popup = document.getElementById("Popup");
popup.classList.toggle("show");
}