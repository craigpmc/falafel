

var Falafel = require('./');

// Start the server
var apptalk = new Falafel().wrap({
	directory: __dirname+'/exampleTwo',
	//aws: require('./aws.json')
});

exports.apptalk = apptalk;




// FOR TESTING:
// ------------

var util = require('util');
//
// Send some exac
// apptalk([{
//   "id": "123-def",
//   "header": {
//     "message": "list_persons"
//   },
//   "body": {
//     "access_token": "50349efe7fc91a5566b3f4ccc5a4c815ac98e400"
//   }
// }], {}, function (err, result) {
//     console.log(err, result);
//
// 	console.log(util.inspect(result, false, null));
//
// });


// REQUEST: Sample body, base 64 encoded
// apptalk([{
//   "id": "123-def",
//   "header": {
//     "message": "webhook_request"
//   },
//   "body": {
// 		"input": {
//     	"access_token": "50349efe7fc91a5566b3f4ccc5a4c815ac98e400"
// 		},
// 		"http": {
// 			"headers": {
// 				"Content-Type": ["application/json"]
// 				// "Content-Type": ["application/x-www-form-urlencoded"]
// 			},
// 			"body": {
// 				"id":123,
// 				"name":"Chris Houghton"
// 			},
// 			// "body": "Zm9vW2Jhcl09YmF6",
// 			"form": []
// 		}
//   }
// }], {}, function (err, result) {
//
// 	console.log('error', err);
// 	console.log(util.inspect(result, false, null));
//
// });


// RESPONSE: Sample workflow data
// apptalk([{
//   "id": "123-def",
//   "header": {
//     "message": "webhook_response"
//   },
//   "body": {
// 		"input": {
//     	"access_token": "50349efe7fc91a5566b3f4ccc5a4c815ac98e400"
// 		},
// 		"http": {
// 			"headers": {
// 				"Content-Type": ["application/json"]
// 			},
// 			"body": 'eyJpZCI6MTIzLCJuYW1lIjoiQ2hyaXMgSG91Z2h0b24ifQ==',
// 			"form": []
// 		},
// 		"reply": {
//       "some_data": "from the workflow",
//       "or_perhaps": "no data in case of fire_and_forget and acknowledge"
//     }
//   }
// }], {}, function (err, result) {
//
// 	console.log('error', err);
// 	console.log(util.inspect(result, false, null));
//
// });
