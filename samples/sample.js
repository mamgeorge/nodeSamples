// \servers\nodejs\sample.js

const express = require( 'express' )
const expressApp = express( )
const path = require( 'path' )
const PORT = 3000

expressApp.use( express.static( path.join( __dirname, '/' ) ) )
expressApp.use( express.static( path.join( __dirname, '/samples' ) ) )
expressApp.use( express.static( path.join( __dirname, '/samples/xtra' ) ) )
expressApp.use( express.static( path.join( __dirname, '/xtra' ) ) )

// server
const varServer = expressApp.listen( PORT , ( )=> {
	//
	console.log( 'expresso' )
} )

expressApp.get( '/' , function ( request , response ) {
	//
	const fileName = __dirname + '/xtra/generic.html'; 
	console.log( 'fileName: ' + fileName )
	console.log( new Date( ).toISOString( ) )
	//
	// response.sendStatus( 200 )
	response.sendFile( fileName )
	response.end( )	
} )

expressApp.get( [ '/0' , '/exit' ] , ( request , response ) => {
	//	
	console.log( colors.brightRed( 'EXIT!' ) )
	process.exit(0)
} )

