var prompt = require('prompt')
var awesomephone = require('awesome-phonenumber')
prompt.start()

prompt.get(['phonenumber'], function (err, result) {

  if (err || !result) {
    console.error('YOU MUST PROVIDE A PHONE NUMBER')
  }

  var phone = new awesomephone(result.phonenumber)

  if (!phone.isValid()) {
    console.log('----------------')
    console.error('ERROR... NOT A VALID PHONE NUMBER WHATSOEVER!', { input_received: result.phonenumber })
    console.log('----------------')
    return
  }

  if (!phone.isMobile()) {
    console.log('----------------')
    console.error('ERROR... IS A PHONENUMBER, BUT NOT MOBILE!', { input_received: result.phonenumber })
    console.log('----------------')
    return
  }
  
  console.log('----------------')
  console.log('SUCCESS!', { input_received: result.phonenumber })
  console.log('----------------')

});
