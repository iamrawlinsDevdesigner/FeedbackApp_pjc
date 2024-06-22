<?php
// Initialize the feedback message variable
$feedback = "";

// Check if the form was submitted using POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and store the form data
    $name = htmlspecialchars($_POST['name']);
    $message = htmlspecialchars($_POST['message']);
    
    // Create a feedback message
    $feedback = "Thank you, $name. Your message has been received.";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Feedback Form</title>
    <!-- Link to the CSS stylesheet -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>User Feedback Form</h1>
        <!-- Feedback form, using PHP_SELF to handle form submission on the same page -->
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post" id="feedbackForm">
            <label for="name">Name:</label>
            <!-- Input field for the user's name -->
            <input type="text" id="name" name="name" required>
            
            <label for="message">Message:</label>
            <!-- Text area for the user's message -->
            <textarea id="message" name="message" required></textarea>
            
            <!-- Submit button for the form -->
            <input type="submit" value="Submit">
        </form>
    </div>

    <!-- Modal popup for feedback message -->
    <div id="feedbackModal" class="modal">
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <p id="modalMessage"><?php echo $feedback; ?></p>
        </div>
    </div>

    <!-- Link to the JavaScript file -->
    <script src="script.js"></script>
</body>
</html>
