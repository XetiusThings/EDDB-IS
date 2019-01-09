var request = require('request');

class EDDB {
	getMessage() {
		var data = '';
		request('https://eddb.io/archive/v6/systems_populated.jsonl', function(error, response, body) {
			if (!error && response.statusCode == 200) {
				data = body;
			}
		});
		return data;
	}
}

module.exports = EDDB;
