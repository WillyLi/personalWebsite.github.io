<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

//send email
    mail("wanttobe0618@gmail.com",  $email, $message);
}
?>