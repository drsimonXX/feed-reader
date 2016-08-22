/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
		it('has an URL defined', function() {
			for(var i in allFeeds) {
				expect(allFeeds[i].url).toBeDefined();
				expect(allFeeds[i].url.length).not.toBe(0);
			}
		});

        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
		it('has a name defined', function() {
			for(var i in allFeeds) {
				expect(allFeeds[i].name).toBeDefined();
				expect(allFeeds[i].name.length).not.toBe(0);
				expect(typeof allFeeds[i].name).toBe('string');
			}
		});
    });

		/* test suite named "The menu" */
	describe('The Menu', function() {
		 /* a test that ensures the menu element is
         * hidden by default. 
         */
		it('is hidden by default', function() {
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});

         /* a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
		it('menu changes visibility on click', function() {
			var menuIcon = $('.menu-icon-link');
			
			menuIcon.click();
			expect($('body').hasClass('menu-hidden')).toBe(false);
			menuIcon.click();
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});
	});

    	/* Write a new test suite named "Initial Entries" */
	describe('Initial Entries', function() {

        /* a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
		// wait for async call to finish 
		beforeEach(function(done) {
			loadFeed(0, function() {
				done();
			});
		});
		
		it('feed container has at least one entry', function() {
			expect($('.entry').length).toBeGreaterThan(0); 
		});
	});

    /* a new test suite named "New Feed Selection" */
	describe('New Feed Selection', function() {

        /* a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * loadFeed() is asynchronous.
         */
		// wait for async calls to finish 
		beforeEach(function(done) {
            loadFeed(1, function() {
                firstFeed = $('.feed').html();
                loadFeed(2, function() {
                    done();
                });
            });        
        });
		
		// reload the first entry
		afterEach(function() {
			loadFeed(0);
		});
		
		it('displays content changes', function() {
			expect(firstFeed).toBeDefined();
			
			secondFeed = $('.feed').html();
			
			expect(secondFeed).toBeDefined();
			
			expect(firstFeed).not.toBe(secondFeed);
		});
	});
}());
