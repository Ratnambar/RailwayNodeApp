const express = require("express");
const envRoutes = require("./env.js");
const homeRoutes = require("./home.js");
const constants = require("../constants/constants.json");
const router = express.Router();

const routes = constants.routes;

router.use(routes.ENVIRONMENT, envRoutes);
router.use(routes.HOME, homeRoutes);

router.get(routes.MAIN, (req, res) => {
	res.redirect(routes.HOME);
});

module.exports = router;