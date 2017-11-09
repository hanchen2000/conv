var config = require('../config');
var express = require('express');
var bodyParser = require('body-parser');
var watson = require('watson-developer-cloud');

var router = express.Router();
var jsonParser = bodyParser.json();

var conversation = watson.conversation(config.watson.conversation);

router.post('/', jsonParser, function(req, res, next) {
conversation.message({
'input': req.body.input,
'context': req.body.context,
'workspace_id': config.watson.conversation.workspace_id
},
function(err, response) {
if (err) {
console.log('error:', err);
} else {
console.log(JSON.stringify(response, null, 2));
res.json(response);
}
});
});

module.exports = router;
