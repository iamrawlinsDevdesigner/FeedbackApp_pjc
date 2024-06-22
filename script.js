// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the form and response elements
    const form = document.getElementById("feedbackForm");
    const response = document.getElementById("response");

    // Add an event listener for the form's submit event
    form.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Create a FormData object with the form data
        const formData = new FormData(form);
        // Create a new XMLHttpRequest
        const xhr = new XMLHttpRequest();
        // Open a POST request to the form's action URL
        xhr.open("POST", form.action, true);

        // Define what happens when the response is loaded
        xhr.onload = function() {
            if (xhr.status === 200) {
                // Update the response element with the server's response
                response.textContent = xhr.responseText;
                // Reset the form
                form.reset();
            } else {
                // Display an error message if something went wrong
                response.textContent = "An error occurred. Please try again.";
            }
        };

        // Send the form data
        xhr.send(formData);
    });
});
