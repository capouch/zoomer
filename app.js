// Set up server, hook on processors for websockets, files, and Mongo
var  http    = require( 'http'                 ),
  express = require( 'express'              ),

  app     = express();

app.use( express.static( __dirname + '/' ) );

app.listen(3001);
