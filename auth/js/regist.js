const sendit = function(){
    const userpw = document.getElementById('userpw');
    const email = document.getElementById('email');

    const expEmailText = /^[A-Za-z0-9\.\-]+@[A-za-z0-9\.\-]+\.[A-Za-z0-9\.\-]+$/;

    if(email.value == ''){
        alert('이메일을 입력하세요.');
        email.focus();
        return false;
    }

    if(userpw.value == ''){
        alert('비밀번호를 입력하세요.');
        userpw.focus();
        return false;
    }

    if(userpw.value.length < 8){
        alert('비밀번호를 8자이상 입력하세요.');
        userpw.focus();
        return false;
    }

    if(!expEmailText.test(email.value)){
        alert('이메일 형식을 확인하세요.');
        email.focus();
        return false;
    }

    return true;
}