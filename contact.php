<?php

// Getting all form values
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$subject = htmlspecialchars($_POST['subject']);
$message = htmlspecialchars($_POST['message']);

if (!empty($email) && !empty($name)) {
    // if user entered email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

        $receiver = "your-mail@gmail.com"; // your email where you want to receive your contact form messages
        $subject = "$subject"; // Subject of email
        // merging all user contacting value to body variable. /n for new line
        $body = "Name: $name\nEmail: $email\nSubject: $subject \n\nMessage: \n$message \n\nRegards, \n$name";
        $sender = "From: $email"; // sender email
        // mail() is php in build function to send mail
        if (mail($receiver, $subject, $body, $sender)) {
            echo "Your message has been sent";
        } else {
            echo "Sorry, failed to send your message!";
        }
    } else {
        // // if user enter wrong format of email
        echo "Enter a valid Email adress!";
    }
} else {
    echo "Email and name is required!";
}
