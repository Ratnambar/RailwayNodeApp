const express = require("express");
const constants = require("../constants/constants.json");

const router = express.Router();

const routes = constants.routes;

router.get("/", (req, res) => {
	console.log(`${routes.ENVIRONMENT} Called`);
	res.send(global.gConfig);
});


module.exports = router;