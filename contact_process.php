<?php

    $to = "weikangho1995@gmail.com";
    $from = $_REQUEST['email'];
    $first_name = $_REQUEST['fname'];
    $last_name = $_REQUEST['lname'];
    $subject = $_REQUEST['subject'];
    $number = $_REQUEST['number'];
    $cmessage = $_REQUEST['message'];

    $headers = "From: $from";
	$headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $from . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $subject = "Sky Delemen Suites : $subject";

    $logo = 'http://wethemez.com/test-html/consultplus/img/logo-black.png';
    $link = '#';

	$body = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Express Mail</title></head><body>";
	$body .= "<table style='width: 100%;'>";
	$body .= "<thead style='text-align: center;'><tr><td style='border:none;' colspan='2'>";
	$body .= "<a href='{$link}'><img src='{$logo}' alt=''></a><br><br>";
	$body .= "</td></tr></thead><tbody><tr>";
	$body .= "<td style='border:none;'><strong>Name :</strong> {$first_name} {$last_name}</td></tr>";
	$body .= "<tr><td style='border:none;'><strong>Email :</strong> {$from}</td></tr>";
	$body .= "<tr><td style='border:none;'><strong>Contact :</strong> {$number}</td></tr>";
	$body .= "<br><br>";
	$body .= "<tr><td style='border:none;'><strong>Message :</strong></td></tr>";
	$body .= "<tr><td></td></tr>";
	$body .= "<tr><td colspan='2' style='border:none;'>{$cmessage}</td></tr>";
	$body .= "</tbody></table>";
	$body .= "</body></html>";

    $send = mail($to, $subject, $body, $headers);

?>