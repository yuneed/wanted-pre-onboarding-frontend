const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use((req, res) => {
    const email = req.body.email;
    const userpw = req.body.userpw;

    console.log(`email:${email}, userpw:${userpw}`);

    res.writeHead(200, {'content-type':'text/html;charset=utf-8'});
    res.write('<h2>익스프레스 서버에서 응답한 메세지</h2>');
    res.write(`<p>이메일 : ${email}</p>`);
    res.write(`<p>비밀번호 : ${userpw}</p>`);
    res.end();
});

app.listen(3000, () => {
    console.log('3000번 포트로 서버 실행중...');
})