var client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

module.exports = {

  message: function(message, callback) {
    client.messages.create({
      body: message,
      to: process.env.STEVE,
      from: process.env.SOURCE,
    }, function(err, sms) {
      if(err) {
        console.log(err);
      }
      if (callback) callback;
    });
    }

}
