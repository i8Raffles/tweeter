//toggles the compose tweet form in and out of view when top right area is clicked
$(document).ready(function() {

  $('.nav-area').on('click', function() {
    $('.new-tweet').slideToggle(300);
    $('#tweet-text').focus();
  });
});

