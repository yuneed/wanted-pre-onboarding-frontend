const express = require('express');
const bodyParser = require('body-parser');
const fs = express('fs');

const app = express();
//const router = express.Router();

app.use(bodyParser.urlencoded({extended: false}));

// signin.html 페이지 보여준다.
app.get('/signin', (req, res) => {
    fs.readFile('signin.html', 'utf-8', (err, data) => {
        if(err){
            console.log(err);
        }else{
            res.writeHead(200, {'content-type':'text/html'});
            res.end(data);
        }
    })
});

app.post('/signin', (req, res) => {
    const email = req.body.email;
    const userpw = req.body.userpw;

    console.log(`email:${email}, userpw:${userpw}`);
})

app.listen(3000, () => {
    console.log('3000번 포트로 서버 실행중..');
})