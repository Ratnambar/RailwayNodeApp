const express = require("express");
const constants = require("../constants/constants.json");

const router = express.Router();


router.get("/", (req, res) => {
	data = {
		"app_data": constants.app_data,
		"page_title": constants.titles.HOME,
		"date": new Date()
	};
	console.log(`Rendering home page with data: ${JSON.stringify(data)}`);
	res.render("home", data);
});

module.exports = router;