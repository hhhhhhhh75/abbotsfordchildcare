<?php 
$parentsName = $_POST["pname"];
$parentsEmail = $_POST["email"];
$parentsPhoneNumber = $_POST["tel"];
$childsName = $_POST["cname"];
$childsBirthday = $_POST["cbday"];
$program = $_POST["program"];
$startDate = $_POST["startDate"];
$questions = $_POST["questions"];

$emailContent = "Parents Name: " . $parentsName . "\n" .
                "Parents Email: " . $parentsEmail . "\n" .
                "Parents Phone Number" . $parentsPhoneNumber . "\n" .
                "Childs Name: " . $childsName . "\n" .
                "Childs Birthday: " . $childsBirthday . "\n" .
                "Program: " . $program . "\n" .
                "Start Date: " . $startDate . "\n" .
                "Other Questions: " . $questions .  "\n";
$subject = "Inquire Form";
$to = "whoever@wherever.com";

mail($to, $subject, $emailContent);

?>