process.env.NODE_ENV = "testing";

const express = require("express");
const body_parser = require("body-parser");
const hbs = require("hbs");
const config = require("./config/config.js");
const constants = require("./constants/constants.json");
const routers = require("./routes/");


var gConfig = global.gConfig;
const routes = constants.routes;

const app = express();
//setting up path for Static files such as images, css
app.use(express.static( __dirname +"/public/"));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ "extended": true }));
app.set("view engine", "hbs");
hbs.registerPartials( __dirname + "/views/partials/");


app.use(routes.MAIN, routers);

app.listen(gConfig.node_port, (error) => {
	if(error == undefined) {
		console.log(`Application is listening on port: ${gConfig.node_port}`);
	}
});


