const express = require('express')
const app = express()

app.listen(process.env.PORT || 5000, function (err) {
    if (err)
        console.log(err);
})
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile('/public/pages/main.html', {root: __dirname })
});