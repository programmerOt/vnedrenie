<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;


require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';


// require 'PHPMailerAutoload.php';



$mail = new PHPMailer();
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'PHPMailer/language');
$mail->IsHTML(true);



$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;
 
 $mail->Host = 'ssl://smtp.yandex.ru';
 $mail->Port = 465;
 $mail->Username = 'DVK.standart@yandex.ru';
 $mail->Password = 'ftbctyoyqtuovgmd';


//от кого письмо
$mail->setFrom('DVK.standart@yandex.ru');

//кому письмо 
$mail->addAddress('e.efremova@dvkgost.ru');
$mail->AddBCC('s.babaev@dvkgroupp.ru');
$mail->AddBCC('d.mihaylovichev@dvkgroupp.ru');

//tema pis'ma

$mail->Subject = 'Заявка с сайта внедрение-исо';

$body='<h1>Заявка с формы</h1>';


if(trim(!empty($_POST['tel']))){
    $body.='<p>telefon'.$_POST['tel'].'</p>';
}


$mail->Body=$body;
// $mail->send();
if(!$mail->send()){
    $message = "Ошибка!mail";
} else{
    $message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-type: application/json');

echo json_encode($response);

?>
