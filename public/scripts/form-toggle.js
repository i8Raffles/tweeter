$(document).ready(function() {

  $('.nav-area').on('click', function() {
    $('.new-tweet').slideToggle('slow');
    $('#tweet-text').focus();
  });
});
