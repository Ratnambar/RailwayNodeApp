config = require('./config.json');

var defaultEnv = "development";
var currentEnv = process.env.NODE_ENV || defaultEnv;

var parentConfig = config[defaultEnv];

var currentConfig = config[currentEnv]; 
var finalConfig = {};

for(key in parentConfig)
	finalConfig[key] = parentConfig[key];

for(key in currentConfig)
	finalConfig[key] = currentConfig[key];

global.gConfig = finalConfig;

console.log(`Global Configuration: ${JSON.stringify(global.gConfig)}`);