const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({extended: false}));

// http://127.0.0.1:3000/auth/signup -> 이렇게 요청했을때 (postman으로 요청하면 이쪽으로 간다~)
// ---------------------    -> 여기까지가 router.route('/(에 해당한다)')
router.route('/auth/signup').post((req, res) => {
    console.log('회원가입 호출!!');
});

router.route('/auth/signin').post((req, res) => {
    console.log('로그인 호출!!');
});


// 이것들을 express에 등록시키자
app.use('/', router);

// 아무것도 페이지가 호출되지 않으면 이게 호출된다. router가 실행된거는 실행되지 않고
app.all('*', (req, res) => {
    res.status(404).send('<h2>페이지를 찾을 수 없습니다.</h2>') //페이지가 없는 것을 호출했을 경우에~ 페이지가 있으면 200이 전달
})

app.listen(3000, () => {
    console.log('3000번 포트로 서버 실행중..');
})