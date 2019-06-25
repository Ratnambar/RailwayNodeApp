const request = require("request");
const key_credentials = require("../config/api_key.json");

var get_train_route = trainNumber => new Promise(
	(resolve, reject) => {
		var api_url = "https://api.railwayapi.com/v2/route/"
					+ "train/" +trainNumber
					+ "/apikey/" +key_credentials.apiKey;
		
		console.log("Restfull API to be called:", api_url);

		request.get(api_url, (error, response, body) => {
			if(error)
				reject(error);
			try {
				resolve(JSON.parse(body));
			} catch(e) {
				reject(e);
			}
		});
	});

module.exports = { get_train_route };