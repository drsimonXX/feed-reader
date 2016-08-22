# Feed Reader Testing

Feed Reader Testing is a project built in conjunction with Udacity staff and [Udacity.com's](http://www.udacity.com "Udacity") [Front-end nanodegree course](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001 "Udacity Front-End Nanodegree"). The project was built using HTML, CSS, JavaScript and jQuery by Udacity, and the testing was conducted by Danielle R. Simon using Jasmine. The purpose of the project was to learn testing techniques that can be used to ensure that a web application functions the way it is intended and to identify failures in code/functionality. 

## How To Launch the Project

Run the project by visiting [this] (https://drsimonxx.github.io/feed-reader) link in your browser. 

## How To Use the Project

Below, you will find a list of tests and suites that were required and are included in the project. The site (i.e. the link provided in the "How To Launch the Project" section of this README) displays the feeds and has a hidden menu near the top left for you to click and expand. On the menu, you will find a list of all the feeds included in the project. Clicking any of the feed list links will populate the browser window with the links available in that feed. Clicking on any of the links on the visible feed will take you to that link's site. 

Below the feed, you will see the Jasmine tests that exist and their results. All tests were required to pass and have been written to pass, and so the result is that all tests pass. This signifies that all site functionality being tested should function as expected.

## The Testing Process (Per Udacity)

1. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
2. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. Write a new test suite named `"The menu"`.
4. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
5. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
6. Write a test suite named `"Initial Entries"`.
7. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
8. Write a test suite named `"New Feed Selection"`.
9. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
10. No test should be dependent on the results of another.
11. Callbacks should be used to ensure that feeds are loaded before they are tested.
12. Implement error handling for undefined variables and out-of-bound array access.
13. When complete - all of your tests should pass. 
