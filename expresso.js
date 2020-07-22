// https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm
// > curl -v localhost:3000/json

const basics = require( './common/libraries/basics.js' ) ;
const express = require( 'express' ) ;
const expressApp = express( ) ;
const PORT = 3000;
	
expressApp.use( express.static( 'common' ) ) ;
expressApp.use( express.static( 'common/libraries' ) ) ;
expressApp.use( express.static( 'public' ) ) ;
expressApp.use( express.static( 'images' ) ) ;
expressApp.use( express.static( 'resources' ) ) ;
expressApp.use( express.static( 'libraries' ) ) ;
expressApp.use( express.static( 'special' ) ) ;

//
const varServer = expressApp.listen( PORT , ( )=> {
	//
	const date = new Date( ).toISOString( );
	const host = varServer.address( ).address ;
	const port = varServer.address( ).port ;
	const txt = `${ basics.COLORS.GRN1 }${ date }` 
	+ `${ basics.COLORS.WHT1 } | `
	+ `${ basics.COLORS.BLU1 }http://%s:%s${ basics.COLORS.NON0 }`;
	//
	console.log( txt , host , port ) ;
	console.log( '__dirname: ' + __dirname ) ;
} ) ;

expressApp.get( '/' , ( request , response ) => {
	response.send( 'Hi!' ); 
} ) ;

expressApp.get( '/home' , ( request , response ) => {
	console.log( request.headers );
	const fileName = __dirname + '/common/index.html';
	console.log( fileName ) ;
	response.sendFile( fileName );
} ) ;

expressApp.get( '/hello' , ( request , response ) => {
	response.send( 'Hello World!' ); 
} ) ;

expressApp.get( '/json' , ( request , response ) => response.json( { ping: true } ) );

expressApp.get( '/json/1' , ( request , response ) => { 
	//
	const fileName = __dirname + '/common/resources/books.json';
	response.sendFile( fileName ) 
} );

expressApp.get( '/zips' , ( request , response ) => { 
	//
	const fileName = __dirname + '/common/resources/xml/xml_wav_books_7zp.zip';
	response.sendFile( fileName ) 
} );

expressApp.get( '/java' , ( request , response ) => {
	//
	const pathName = 'C:\\servers\\nodejs\\';
	basics.spawnJava( pathName , 'resources.AnyClass' , response ); 
} ) ;

expressApp.get( '/python' , ( request , response ) => { 
	basics.spawnPython( './resources/sample.py' , '' , response ); 
} ) ;

expressApp.get( '/exit' , ( request , response ) => {
	//
    varServer.close( ( ) => {
		console.log( 'Closed out remaining connections' );
		process.exit(0);
    } );
} ) ;
