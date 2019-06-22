// https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm
const basics = require( './resources/basics.js' ) ;
const express = require( 'express' ) ;
const expressApp = express( ) ;
const PORT = 3000;
	
expressApp.use( express.static( 'public' ) ) ;
expressApp.use( express.static( 'images' ) ) ;
expressApp.use( express.static( 'resources' ) ) ;
expressApp.use( express.static( 'special' ) ) ;

//
const varServer = expressApp.listen( PORT , ( )=> {
	//
	const date = new Date().toISOString();
	const host = varServer.address( ).address ;
	const port = varServer.address( ).port ;
	const txt = `${ basics.GRN1 }${ date }` 
	+ `${ basics.WHT1 } | `
	+ `${ basics.BLU1 }http://%s:%s${ basics.NON0 }`;
	//
	console.log( txt , host , port ) ;
} ) ;

expressApp.get( '/' , ( request , response ) => {
	response.send( 'Hi!' ); 
} ) ;

expressApp.get( '/home' , ( request , response ) => {
	console.log( request.headers );
	response.sendFile( __dirname + '/public/index.html' );
} ) ;

expressApp.get( '/hello' , ( request , response ) => {
	response.send( 'Hello World!' ); 
} ) ;

expressApp.get( '/java' , ( request , response ) => {
	basics.spawnJava(  'C:\\servers\\nodejs\\' , 'resources.AnyClass' , response ); 
} ) ;

expressApp.get( '/python' , ( request , response ) => { 
	basics.spawnPython(  './resources/sample.py' , '' , response ); 
} ) ;
