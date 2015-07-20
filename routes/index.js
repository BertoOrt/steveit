var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var twilio = require('../lib/twilio');
var client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH);


router.get('/', function(req, res, next) {
  
  client.messages.list({
}, function(err, data) {
	res.render('index', {title: "Steveit", message: data.messages})
});
});

router.post('/', function(req, res, next) {
  unirest.post('https://hooks.slack.com/services/'+process.env.UNKNOWN_TOKEN+'/'+process.env.SLACK_TOKEN)
  .send('payload={"text": "'+ req.body.question +'", "channel": "@sabrams86", "username": "steve it", "icon_emoji": ":trollface:"}')
  .end(function (response) {
    var newMessage = req.body.question;
    twilio.message(newMessage);
    res.redirect('/');
  });
});

module.exports = router;
