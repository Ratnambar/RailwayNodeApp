const express = require("express");
const homeRoutes = require("./env.js");
const constants = require("../constants/constants.json");
const router = express.Router();

const routes = constants.routes;

router.use(routes.ENVIRONMENT, homeRoutes);

module.exports = router;