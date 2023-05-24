/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];


$(document).ready(function() {

  $('.error-text-empty').hide();
  $('.error-text-long').hide();

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    $('#tweets-container').empty(); //empties out tweet container so initial-tweets.json isn't rendered everytime
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
    }
  };

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

  // renderTweets(data);

  const loadTweets = function() {
    $.ajax('/tweets', {
      type: 'GET',
      dataType: 'JSON',
      success: tweets => renderTweets(tweets)
    });
  };

  loadTweets();

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
