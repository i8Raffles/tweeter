/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  //hiding errors when page is initially rendered
  $('.error-text-empty').hide();
  $('.error-text-long').hide();

  //escape function to account for string literals in tweet input
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //rendering tweets
  const renderTweets = function(tweets) {

    //empties out tweet container so initial-tweets.json isn't rendered everytime a new tweet is made
    $('#tweets-container').empty();

    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
    }
  };

  //create new tweet element
  const createTweetElement = function(tweet) {
    const $tweet = $(`
      <article class="tweet">
        <header class="tweet-header">
          <div class="user-profile">
            <img class="user-icon" src="${tweet.user.avatars}"></img>
            <h4 class="user-name">${tweet.user.name}</h4>
          </div>
          <div>
            <h4 class="user-handle">${tweet.user.handle}</h4>
          </div>
        </header>
        <div class="tweet-text">
          ${escape(tweet.content.text)}   
        </div>
        <footer class="tweet-footer">
          <span class="tweet-date">${timeago.format(tweet.created_at)}</span>
          <div class="tweet-response">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>
      </article>
  `);
    return $tweet;
  };

  //loading tweets
  const loadTweets = function() {
    //using reverse on the loaded tweets to show latest ones at the top and older ones at the bottom
    $.ajax('/tweets', {
      type: 'GET',
      dataType: 'JSON',
      success: tweets => renderTweets(tweets.reverse())
    });
  };

  loadTweets();

  //preventing default behaviour on form submission
  $('form').on('submit', (event) => {
    event.preventDefault();
    const maxCharacters = 140;
    let inputLength = $('#tweet-text').val().length;

    $(".error-text-empty").slideUp("slow");
    $(".error-text-long").slideUp("slow");

    if (!inputLength) {
      $(".error-text-empty").slideDown("slow");
      return;
    }
    if ((maxCharacters - inputLength) < 0) {
      $(".error-text-long").slideDown("slow");
      return;
    }

    //posting tweets
    $.ajax('/tweets', {
      type: "POST",
      data: $('form').serialize(),
      success: () => {
        loadTweets();
        $('form').find("#tweet-text").val("");
        $('form').find(".counter").val(maxCharacters);
      }
    });
  });
});
