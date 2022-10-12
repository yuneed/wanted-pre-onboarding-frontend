<?php
    $email = $_POST["email"];
    $userpw = $_POST["userpw"];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입 완료</title>
</head>
<body>
    <p>이메일 : <?=$email?></p>
    <p>비밀번호 : <?=$userpw?></p>
</body>
</html>