const express = require('express');
const app = express();
let path = require('path');
app.listen(process.env.PORT || 2000, function (err) {
    if (err)
        console.log(err);
})
app.use(express.static(path.join(__dirname)));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+ '/index.html'))
})