const express = require("express");
const constants = require("../constants/constants.json");
const railway = require("../models/railway_api.js");
const routes = constants.routes;
var router = express.Router();



router.get(routes.TRAIN_ROUTE, (req, res) => {
	console.log(`Get Request for ${routes.TRAIN_ROUTE} Received.`);
	data = {
		"app_data": constants.app_data,
		"page_title": constants.pages.TRAIN_ROUTE.page_title,
		"form_fields": {
			"action_url": routes.RAILWAY_API + routes.TRAIN_ROUTE,
			...constants.pages.TRAIN_ROUTE.form_fields
		}
	};
	res.render("train_route", data);
});

router.post(routes.TRAIN_ROUTE, (req, res) => {
	console.log(`Post Request for ${routes.TRAIN_ROUTE} Received.`);
	var train_number = constants.pages.TRAIN_ROUTE.form_fields.FIELD_TRAIN_NUMBER;
	railway.get_train_route(req.body[train_number])
		.then(result => {
			data = {
				"app_data": constants.app_data,
				"page_title": constants.pages.TRAIN_ROUTE.page_title,
				"form_fields": {
					"action_url": routes.RAILWAY_API + routes.TRAIN_ROUTE,
					...constants.pages.TRAIN_ROUTE.form_fields
				},
				"results": result
			};
			res.render("train_route", data);
		})
		.catch(error => {
			console.log(error);
			res.send(error);
		});
});

module.exports = router;