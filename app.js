var data = require('./data');

data().then(function (body) {
	console.log(body);
}, function (error) {
	console.log(error);
})