var express = require('express');
var router = express.Router();
var url = require('url');
/* GET users listing. */
router.get('/', function(req, res, next) {
  var url_parts = url.parse(req.url, true);
  var param = url_parts.query;
  var workflowId = param.workflowId;
  console.log(workflowId);
  res.set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:9000',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'GET, PUT, POST, OPTIONS, PATCH',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers',
    //'Access-Control-Expose-Headers': 'flow_id',
    //'flow_id': flow_id
  });
  console.log(req.body);
  console.log(req.headers);
  if (workflowId == 123) {
    res.send({
    "pageTitle": "Express mock up",
    "contentType": "personal info",
    "content":{
      "firstName": "Agent",
      "lastName": "007",
      "primaryAddress": "London",
      "currentAddress": "Casino Royale",
      "accupation": "intelligence officer",
      "phoneNo": "Unknown",
      "dob": "11 November 1921",
      "citizenship": "England"
    }
  });
  } else {
    res.send(
      {'workflowId':workflowId, 
      'message':'use /application?workflowId=123 to fetch schema'
      })
  }

});
router.post('/', function(req, res, next) {
  var flow_id = Math.floor(Math.random()*1000);
  
  res.set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:9000',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'GET, PUT, POST, OPTIONS, PATCH',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers',
    //'Access-Control-Expose-Headers': 'flow_id',
    //'flow_id': flow_id
  });
  console.log(req.body);
  console.log(req.headers);
  res.send({'workflowId': flow_id});

});
router.put('/', function(req, res, next) {
  var flow_id = Math.floor(Math.random()*1000);
  
  res.set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:9000',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'GET, PUT, POST, OPTIONS, PATCH',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers',
    //'Access-Control-Expose-Headers': 'flow_id',
    //'flow_id': flow_id
  });
  console.log(req.body);
  console.log(req.headers);
  res.send({'workflowId': flow_id});

});


module.exports = router;
