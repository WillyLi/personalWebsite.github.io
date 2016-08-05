<?php
if($_POST){
    $name = $_POST['form_name'];
    $email = $_POST['form_email'];
    $message = $_POST['form_msg'];

//send email
    mail("wanttobe0618@gmail.com", "51 Deep comment from" .$email, $message);
}
?>