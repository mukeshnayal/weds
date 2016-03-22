// Module dependencies.
var application_root = __dirname,
    fs = require('fs'),
    myConfig = require('./myConfig.js'),
    mysql = require('mysql'),
    express = require( 'express' ), //Web framework
    path = require( 'path' ); //Utilities for dealing with file paths

//Create server
var app = express();

// Configure server
app.configure( function() {
    //parses request body and populates request.body
    app.use( express.bodyParser() );

    //checks request.body for HTTP method overrides
    app.use( express.methodOverride() );

    //perform route lookup based on url and HTTP method
    app.use( app.router );

    //Where to serve static content
    app.use( express.static( path.join( application_root) ) );

    //Show all errors in development
    app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
});

//Start server
var port = 3000;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});

var connection = mysql.createConnection( myConfig );

//####################################################
// SQL HELPER FUNCTIONS

// Turn values into a query-friendly string
function escape_values( values ) {
    return connection.escape( values );
};

// Create SQL INSERT INTO statement string
function create_insert_statement( table, values ) {
    return 'INSERT INTO ' + table + ' VALUES (NULL, ' + 
        escape_values(values) + ')';
};
//####################################################

app.get('/rsvps', function(request, response) {
    console.log('Getting GET request...');

    connection.query('SELECT * FROM rsvps', function(err, rows, fields) {
        if (err) throw err;

        response.send( { 'rsvps': rows } );
    });
});

app.post( '/rsvps', function(request, response) {
    console.log('Getting POST request...');

    var req = request.body.rsvp;

    var values = [
        req.first_name,
        req.last_name,
        req.email,
        req.isComing,
        req.zip_code,
        req.guests,
        req.salmon,
        req.bbq,
        req.veggie,
        req.groom_bride,
        req.association,
        req.address,
        req.lat,
        req.lng
    ];

    connection.query( create_insert_statement( 'rsvps', values ),
        function( err, results ) {
            if (err) throw err;

            req.id = results.insertId;
            console.log(req);
            return response.send({ 'rsvp': req })
    });
});



