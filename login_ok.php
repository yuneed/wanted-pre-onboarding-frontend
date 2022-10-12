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
    <title>로그인</title>
</head>
<body>
<?php
    if(){
        echo "<h2>로그인</h2>";
        echo "<p>{$email}님 로그인 되었습니다.</p>";
    }else{
        echo "<script>alert('로그인 실패! 아이디 또는 비밀번호를 확인하세요');history.back();</script>";
    }
?>

</body>
</html>