Let’s create a simple web page that accepts user input via a form, processes 
it with PHP, and uses JavaScript and CSS for interactivity and styling.

--------------
Fixing modal error
--------------
The issue arises because the PHP script is responding with the entire HTML page instead of just the feedback message. When the JavaScript code receives this full HTML page as the response, it inserts it into the modal, causing the unintended display.

To fix this, we need to adjust the PHP script to return only the feedback message when handling an AJAX request. We can do this by checking for an X-Requested-With header to differentiate between normal form submission and AJAX requests. Here's how you can adjust the code:
