// cd c:\workspace\github\nodeSamples
// node basics

const http = require('http');

process.title = 'BASICS SERVER'
const PORT = 2000
let date = new Date( ).toISOString( )

const httpServer = http.createServer( (req, res) => {
	//
	res.writeHead( 200, { 'Content-Type': 'text/plain' } );
	res.write( 'Hello World!' )
	res.write( '/ [' + req.url + ']' );
	res.write( '/ [' + new Date( ).toISOString( ) + ']' );
	res.end(  );
})

// httpServer.listen( PORT, ( ) => { msg = date + ' / '+ PORT; console.log( msg )  } )

console.log(process.env.USERNAME); 