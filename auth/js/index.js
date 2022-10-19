const express = require("express");
const server = express();
const mongoose = require("mongoose");

const authRouter = require("./router/auth.js");

mongoose.connect("mongodb://dbUser:myPassword@SERVER_IP:DB_PORT", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("몽고DB 연결");
})

server.use(express.json());

server.use("/auth", authRouter);

server.listen(3001, () => {
    console.log("3001번 포트로 서버 실행중...");
});