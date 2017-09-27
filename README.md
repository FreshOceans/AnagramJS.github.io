#**AnagramJS Process**


###**The beginning**
After spending a couple of hours learning about AngularJS with the official documentation to youtube to free online tutorials, I discovered how my experience with Ruby on Rails helped me understand how AngularJS functions as a MVC. At that point I knew what I wanted to do with the App I just needed to learn and adapt the syntax for AngularJS. Stackoverflow would be my greatest ally along with the official documentation for deeper logic.



###**AngularJS**
I was glad this project involved AngularJS because it was next on my list to learn and create a meaningful project. This was a crash course on it and I was interested in the challenge.
I broke down the app requirements (MVP) in order to better understand the goal:
    1. String from an input on the screen.
    2. Dynamically display an anagram of that string (every time a new letter or symbol is added) = 2-way data binding
    3. A "reroll" button (to change the current anagram).
    4. Add Clear Button (just makes sense to add).

The AngularJS (AJS) 2-way data binding was simple and easy to integrate with ng-model linked to ng-bind with instant onscreen update.
The issue I ran into was how to apply a function to the ng-model in order for the ng-bind to be different.
For instance:
    ng-model="javascript" -> ng-bind="tpircsavaj"
    The arrow represents the function in which the ng-model's string is split then sorted by random and then joined back together.

I set a timebox to find a solution to my problem, but I just ended up just tackling this issue logically on my own. I knew each individual part because I had used it before, I just needed to piece them together in AngularJS.
After some time I was able to get the basic requirement done, but a new issue was created:
    *Error: $rootScope:infdig
    Infinite $digest Loop*
This would be the last issue for me to resolve.


I originally had used npm to install a AngularJS project through its website instructions, but after some time was not ready to use components nor did I think it was necessary for this simple project. I decided to go back to basics with:
    index.html
    app.js
    style.CSS



###**CSS Style**
I knew from the beginning I was going to use bootstrap4 because it is new technology I want to improve with as well as quick easy styling for a MVP in a short time period. The bootstrap system would allow me to focus on the new framework I needed to quickly learn and implement. I know I wanted a clean & simple design to allow the user to quickly understand the app in order for them to use it effectively.
