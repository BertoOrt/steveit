var express = require('express');
var router = express.Router();
var unirest = require('unirest');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {
  unirest.post('https://hooks.slack.com/services/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')
  .send('payload={"text": "'+ req.body.question +'", "channel": "@sabrams86", "username": "steve it", "icon_emoji": ":trollface:"}')
  .end(function (response) {
  res.redirect('/');
  });
});

module.exports = router;
