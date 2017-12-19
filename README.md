# John
An application for locating public bathrooms. 

## Technologies
*  Angular frontend that can run on mobile or web, may need to integrate into meteor framework
*  Rails backend api-only framework for persistence, run on heroku
*  Authentication with okta, account made

## Server
The application is supported by a rails-api backend hosted on heroku at https://secure-lowlands-37343.herokuapp.com/
* When pushing to the heroku server, just push the rails subtree (or you'll mess everything up). Use ```git subtree push --prefix rails-api heroku master```
* Heroku charges for using postGIS, so we manually calculate point distances. Opportunity for major improvement in the future.
* Right now, the server is set up to respond to get requests to /nearby_bathrooms with latitude and longitude provided as params, e.g. ```https://secure-lowlands-37343.herokuapp.com/nearby_bathrooms?lat=50&lng=-65```. In the future, the location should be submitted as a form or a JS get request.
