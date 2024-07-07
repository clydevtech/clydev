<?php
session_start();

header("Access-Control-Allow-Origin: *");
// Allow requests with the following methods
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
// Allow requests with the following headers
header("Access-Control-Allow-Headers: Content-Type");
use PHPMAILER\PHPMailer\PHPMailer;
use PHPMAILER\PHPMailer\Exception;
// require 'phpmailer/src/Exeception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';


//For opportunities

if(isset($_POST["opportunity"])) {
    $email = $_POST["email"];
    $role = $_POST["role"];

    // File upload handling
    $uploadDir = 'uploads/'; // Specify the directory where files will be uploaded
    $fileName = basename($_FILES["file"]["name"]); // Get the file name
    $uploadFile = $uploadDir . $fileName; // Construct the full path for the uploaded file

    // Move the uploaded file to the uploads directory
    if (move_uploaded_file($_FILES["file"]["tmp_name"], $uploadFile)) {
        // Email sending with attachment
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'parmarsunny125@gmail.com'; // Replace with your email address
        $mail->Password = 'ncuezgyhpntamxmi'; // Replace with your email password
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;
        $mail->setFrom('parmarsunny125@gmail.com'); // Replace with your email address
        $mail->addAddress('clydevtech@gmail.com');
        $mail->isHTML(true);
        $mail->Subject = "File Upload and Role Information";
        $mail->Body = "Email: $email <br> Role: $role <br> Attached File: $fileName";
        $mail->addAttachment($uploadFile); // Add the uploaded file as an attachment

        if ($mail->send()) {
            echo "<script>alert('Thank you for contacting us!');</script>";
            echo "<script>window.location.href = 'index.php';</script>";
            exit();
        } else {
            echo "<script>alert('Failed to send email.');</script>";
        }
        // if ($mail->send()) {
        //     $_SESSION['opportunity_success'] = "Your application has been submitted successfully!";
        // } else {
        //     $_SESSION['opportunity_error'] = "Failed to send email. Please try again.";
        // }
    } else {
        echo "<script>alert('Failed to upload file.');</script>";
    }
        // } else {
        //     $_SESSION['opportunity_error'] = "Failed to upload file. Please try again.";
        // }
        // header("Location: index.php");
        // exit();
    }



//For contact us


if(isset($_POST["send"])){
    $name = $_POST["fullName"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host='smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'parmarsunny125@gmail.com';
    $mail->Password = 'ncuezgyhpntamxmi';

    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('parmarsunny125@gmail.com');
    $mail->addAddress('clydevtech@gmail.com');
    $mail->isHTML(true);
    $mail->Subject = $_POST['subject'];
    $mail->Body = "Sender's Name: $name <br> Sender's Email: $email <br> Message: $message";
    
    $mail->send();
    echo"
    <script>
    alert('Sent success');
    document.location.href = 'index.php';
    </script>
    ";
    // if ($mail->send()) {
    //     $_SESSION['contact_success'] = "Your message has been sent successfully!";
    // } else {
    //     $_SESSION['contact_error'] = "Failed to send message. Please try again.";
    // }

    // header("Location: index.php");
    // exit();


    };



?>
