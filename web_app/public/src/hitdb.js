var querystring = require('querystring');
var request = require('request');

//var form = {
//    username: 'usr',
//    password: 'pwd',
//    opaque: 'opaque',
//    logintype: '1'
//};

//var formData = querystring.stringify(form);
//var contentLength = formData.length;

function hitdb() { 
  request({
    headers: {
      //'Content-Length': contentLength,
      'Content-Type': 'application/json'
    },
    uri: 'https://service.us.apiconnect.ibmcloud.com/gws/apigateway/api/0c8f59e1d1d5405e25c88917bb965b2defd073b8ed3b5717183d253c13758c1a/api/addPost',
    //body: formData,
    method: 'POST'
  }, function (err, res, body) {
    //it works!
  });
}
