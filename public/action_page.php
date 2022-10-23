<?php
$userName = $_POST['name'];
$userEmail = $_POST['email'];
$messageSubject = $_POST['subject'];
$message = $_POST['message'];

$to = 'bcitcomputingclub@gmail.com';
$body = "";

$body .= "From: ".$userName. "\r\n";
$body .= "Email: ".$userEmail. "\r\n";
$body .= "Message: ".$message. "\r\n";

    mail($to, $messageSubject, $message);
?>