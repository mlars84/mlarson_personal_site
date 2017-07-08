const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');

app.set('port', (process.env.PORT || 3333));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.use('/', index);


app.listen(app.get('port'), function(){
    console.log('Listening on port: ', app.get('port'));
});
