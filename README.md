# Indian Railways API

A web app to get details of Indian railways.

## Software Requirements
* [Node v8.12.0](https://nodejs.org/en/) (Recommended).
## Setup
Step 1: Clone or download repository to a local directory.

	>git clone https://github.com/Ratnambar/RailwayNodeApp.git

Step 2: Goto src/

	>cd src

Step 3: Download Required Modules using node package manager

	>npm install
Step 4: Update [api_key.json](https://github.com/Ratnambar/RailwayNodeApp/blob/master/src/config/api_key.json) with valid details of the api key to be used. You can get the key from [here](https://railwayapi.com/).

	{
		"name": "Your Name",
		"email": "Email Id",
		"apiKey": "Your API Key"
	}

## Starting the App
From src start application from app.js.

	>node app.js

 
## Accessing the App
You can access the appication on [localhost:3000](localhost:3000).
To Check configuration details and environment Goto [localhost:3000/env](localhost:3000/env)


### API References
The APIs being used are public APIs available on [RailwayAPI](https://railwayapi.com/api/).