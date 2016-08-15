var request = require('request');
var url = 'http://api.worldbank.org/countries/gb/indicators/EN.ATM.CO2E.GF.ZS?date=1995:2011&format=json';

module.exports = function () {
	return new Promise(function (resolve, reject) {
		request({
			url: url,
			json: true
		}, function (error, response, body) {
			if (error) {
				reject('Unable to retrieve data');
			} else {
				resolve(body[1]);
			}
		});
	})
}