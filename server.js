const express = require('express')
const app = express()

app.listen(process.env.PORT || 3000, function (err) {
    console.log(`Listening on port 3000`);
    if (err)
        console.log(err);
})
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile('/public/pages/main.html', {root: __dirname })
});