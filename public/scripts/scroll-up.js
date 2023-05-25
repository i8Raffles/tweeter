$(document).ready(() => {

  //scroll detection on the window
  $(window).scroll(function() {

    //if already at the top of the window, show the new-tweet form and hide scroll up button
    if ($(window).scrollTop() === 0) {
      $('.scroll-up').fadeOut('fast');

      //if not at the top then show the scroll up button
    } else {
      $('.scroll-up').fadeIn('fast');
    }
  });

  //when scroll up is clicked, scroll to top of window, slide down tweet form and focus on the text field
  $('.scroll-up').click(() => {
    $(window).scrollTop(0);
    $('.new-tweet').slideDown('fast');
    $('#tweet-text').focus();
  });
});