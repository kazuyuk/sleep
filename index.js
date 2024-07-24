const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/sleep', (req, res) => {
    setTimeout(() => {
        res.send('Slept for 5 seconds!');
    }, 5000);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
