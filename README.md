# Tweeter Project

Tweeter is a simple, single-page Twitter clone.
A single-page application that allows you to tweet whatever you want(as long as it's under 140 characters)!

## Final Product

!["Screenshot of Desktop view"](https://github.com/i8Raffles/tweeter/blob/master/docs/Desktop-page.PNG?raw=true)
!["Screenshot of tablet view"](https://github.com/i8Raffles/tweeter/blob/master/docs/Tablet-view.PNG?raw=true)
!["Screenshot of text field hidden"](https://github.com/i8Raffles/tweeter/blob/master/docs/text-field-hidden.PNG?raw=true)
!["Screenshot of mobile view"](https://github.com/i8Raffles/tweeter/blob/master/docs/mobile-view.PNG?raw=true)

## Dependencies

- Express
- body-parser
- chance
- md5
- Node 5.10.x or above

## Getting Started

1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
3. Go to <http://localhost:8080/> in your browser.

## Using Tweeter

### Writing Tweets

Simply click on the text area under Compose Tweets and you can begin writing your message, when you're done clicking the TWEET button will add the tweet in a box right under the text field.

There's no need to refresh the page, every tweet appears almost immediately after posting!

Clicking on the Write a new tweet or the red double arrow on the right will toggle the text area on or off.

If you've scrolled down, a circular button with a double arrow pointing up will appear, clicking that will immediately take you to the top of the page and have the text area focused, ready to type yet another tweet!

### Reading Through Tweets

Two already loaded tweets from none other than the legendary Descartes and Newton are already present and all subsequent tweets that you post will begin appearing, newest to oldest, from top to bottom.

### Responsive Design

If you're browsing on a laptop/desktop, the text field and list of tweets will appear on the right while your profile will appear on the left. Any smaller than that such as a tablet or mobile, they will all appear in a column from top to bottom with the navbar on top, followed by your profile, then the text field and finally a collection of all the tweets.

### Tweet Validation

- If you try to post an empty tweet, an error will appear letting you know to add at least one letter before tweeting.
- If you're about to write a thesis or a gigantic essay, there's a character counter on the bottom right that will turn red if your tweet goes over the limit. Trying to tweet something that goes over the limit will prompt you with an error stating that your tweet is too long.
