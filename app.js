const express = require('express');
const app = express();
let port = process.env.PORT || 3000;

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/lib'));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
})



app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
})