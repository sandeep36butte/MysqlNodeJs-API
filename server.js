var express = require('express');
var app = express();

app.get('/',function(req,res){
    console.log("Send Message on Get Request");
    res.send("Main File");
});
app.set('port',process.env.PORT || 3000);
var server = app.listen(app.get('port'),function(){
    console.log("Express server listening on Port :"+server.address().port);
});