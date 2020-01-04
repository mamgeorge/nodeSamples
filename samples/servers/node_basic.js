// http://127.0.0.1:1337/?q=1234
var http = require( 'http' ) ;
var basics = require( './root/basics.js' ) ;

// request handler
var varServer = http.createServer( ) ;

varServer.on( 'request' , function requestor( request , response )
{
	var varDate = basics.dateTime( new Date( ) ) ;
	console.log( 'varDate: ' + varDate ) ;
	//
	response.writeHead( 200 , { 'Content-Type': basics.MIME_TYPE.html } ) ;
	response.write( basics.get_html( varDate ) ) ;
	response.end( 'MLG' ) ;
} ) ;

varServer.listen( 1337 , '127.0.0.1' ) ;

console.log( 'Server running at: http://127.0.0.1:1337/' ) ;
