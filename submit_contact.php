<?php
// Define the path to your TXT file (must be writable by the web server)
$file = 'contact_submissions.txt';

// Collect and sanitize the POST data
$name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
$email = isset($_POST['email']) ? strip_tags(trim($_POST['email'])) : '';
$message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

if ($name && $email && $message) {
    $entry = "Name: $name\nEmail: $email\nMessage: $message\n---\n";
    file_put_contents($file, $entry, FILE_APPEND);
    echo "<p>Thank you for contacting us!</p>";
    echo "<p><a href='contact.html'>Back to Contact Form</a></p>";
} else {
    echo "<p>All fields are required. Please go back and try again.</p>";
}
?>