$(document).ready(function() {
  $("#tweet-text").on('input', function() {
    const tweetLength = $('#tweet-text').val().length;
    const maxCharacters = 140;
    const counter = $(this).closest('form').find('.counter');

    counter.text(maxCharacters - tweetLength);

    (tweetLength > 140) ? counter.addClass('over-char-limit'): counter.removeClass('over-char-limit');
  });
});