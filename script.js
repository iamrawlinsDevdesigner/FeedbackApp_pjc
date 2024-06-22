// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the form and modal elements
    const form = document.getElementById("feedbackForm");
    const modal = document.getElementById("feedbackModal");
    const modalMessage = document.getElementById("modalMessage");
    const closeBtn = document.querySelector(".close-btn");

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
                // Update the modal message with the server's response
                modalMessage.textContent = xhr.responseText;
                // Show the modal
                modal.style.display = "block";
                // Reset the form
                form.reset();
            } else {
                // Display an error message if something went wrong
                modalMessage.textContent = "An error occurred. Please try again.";
                modal.style.display = "block";
            }
        };

        // Send the form data
        xhr.send(formData);
    });

    // Add an event listener for the close button
    closeBtn.addEventListener("click", function() {
        // Hide the modal
        modal.style.display = "none";
    });

    // Add an event listener for clicks outside the modal
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            // Hide the modal if the user clicks outside of it
            modal.style.display = "none";
        }
    });
});
