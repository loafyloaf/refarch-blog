var request = require('request');

function main(params) {
  
    var _url = "https://a7933289-4602-40a4-b61a-bdf7660edfce-bluemix:5f3b1d1b31b4ad90f85afcf7143afc5f93b508dd9c01352863e750945f62c099@a7933289-4602-40a4-b61a-bdf7660edfce-bluemix.cloudant.com/posts/_find";

    var options = {
      url: _url,
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({selector: {"_id": {"$gt": 0}}, fields: ["_id", "title", "abstract"]})
    };
    
    return new Promise(function(resolve, reject) {
      request(options, function(error, response, body) {
        if (error) {
          reject(error);
        }
        else {
          resolve({msg: response});
        }
      });
    });
}
