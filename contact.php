<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Replace contact@example.com with your real receiving email address
  $receiving_email_address = 'errorbroken.cs@gmail.com';

  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $subject = htmlspecialchars($_POST['subject']);
  $message = htmlspecialchars($_POST['message']);

  // Process the form data or send email here

  // Example: Sending email using the mail() function
  $to = $receiving_email_address;
  $headers = "From: $name <$email>" . "\r\n";
  $headers .= "Reply-To: $email" . "\r\n";
  $headers .= "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
  $message = "
    <p><strong>Name:</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Subject:</strong> $subject</p>
    <p><strong>Message:</strong> $message</p>
  ";

  if (mail($to, $subject, $message, $headers)) {
    echo json_encode(array('status' => 'success', 'message' => 'Your message has been sent. Thank you!'));
  } else {
    echo json_encode(array('status' => 'error', 'message' => 'Sorry, there was an error sending your message. Please try again later.'));
  }
}
?>
