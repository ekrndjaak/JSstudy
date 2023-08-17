const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let messages = [];

app.get('/', (req, res) => {
    res.render('index', { messages });
});

app.post('/', (req, res) => {
    const message = req.body.message;
    messages.push(message);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
