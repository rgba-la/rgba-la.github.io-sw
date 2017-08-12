<?php

if( isset($_POST['name']) && isset($_POST['email']) && isset($POST['message']) ) {
   $n = $_POST['name'];
   $e = $_POST['email'];
   $m = nl2br($_POST['message']);
   $to = "geraldine.morales02@gmail.com";
   $from = $e;
   $subject = 'Contact Form Message';
   $message = '<b>Name:</b> '.$n.' <br><b>Email:</b> '.$e.' <p>'.$m.'</p>';
   $headers = "From: $from\n";
   $headers .= "MIME-VERSION: 1.0\n";
   $headers .= "Content-type: text\html; charset=iso-8859-1\n";
   if( mail($to, $subject, $message, $headers) ) {
      echo "success";
   } else {
      echo "The server failed to send the message. Please try again later."
   }

}

?>
