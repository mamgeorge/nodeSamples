// cd c:\workspace\github\nodeSamples
// node basics

const http = require('http');

const PORT = 3000
let date = new Date( ).toISOString( )

const httpServer = http.createServer( (req, res) => {
	//
	res.writeHead( 200, { 'Content-Type': 'text/plain' } );
	res.write( 'Hello World!' )
	res.write( '[ ' + req.url + ' ]');
	res.end(  );
})

// httpServer.listen( PORT, ( ) => {  console.log( msg ) } ) 

httpServer.listen( PORT, (  ) => {  
		
	msg = PORT + ' / '
	msg += date
	console.log( msg ) 
} )
