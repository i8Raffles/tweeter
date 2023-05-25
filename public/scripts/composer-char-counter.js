//implementation of character counter on the compose tweet form
$(document).ready(function() {
  $("#tweet-text").on('input', function() {
    const tweetLength = $('#tweet-text').val().length;
    const maxCharacters = 140;
    const counter = $(this).closest('form').find('.counter');

    counter.text(maxCharacters - tweetLength);
    //if tweet length crosses limit, add a class to the counter, remove the class if under limit
    //use css to add color to the counter if this class is present
    (tweetLength > 140) ? counter.addClass('over-char-limit'): counter.removeClass('over-char-limit');
  });
});