// cd c:\workspace\github\nodeSamples
// node samples/sample

const express = require( 'express' )
const expressApp = express( )
const path = require( 'path' )
const http = require('http')
const request = require('request')
const PORT = 3000

expressApp.use( express.static( path.join( __dirname, '/' ) ) )
expressApp.use( express.static( path.join( __dirname, '/samples' ) ) )
expressApp.use( express.static( path.join( __dirname, '/samples/xtra' ) ) )
expressApp.use( express.static( path.join( __dirname, '../images' ) ) )
expressApp.use( express.static( path.join( __dirname, '/xtra' ) ) )

const options = { uri: 'http://localhost:2000', // the rest of this is not needed
	hostname: 'localhost', 
	port: 2000, 
	path: '/', 
	method: 'GET',
	headers: {
		'Authorization': 'Basic',
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Accept-Charset': 'UTF-8'
	} 
}

// server
const varServer = expressApp.listen( PORT , ( )=> {
	//
	console.log( 'expresso' )
} )

expressApp.get( '/' , function ( request , response ) {
	//
	const fileName = __dirname + '/generic.html'; 
	console.log( 'fileName: ' + fileName )
	console.log( new Date( ).toISOString( ) )
	//
	// response.sendStatus( 200 )
	response.sendFile( fileName )
	response.end( )	
} )

expressApp.get( '/access' , ( req, res ) => {
	//
	// https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html
	let msg = new Date( ).toISOString( ) + ' / ' 
	getTokens().then((inf) => { res.send( msg + inf ) } )
} ) 

const getData = async ( ) => { 
	return await getTokens( ).then( (data) => { return data } )
}

const getTokens = ( ) => {
	return new Promise(resolve => {
		request( options, (err, rsp, body) => { return resolve(body) } )
	})
}

expressApp.get( [ '/0' , '/exit' ] , ( request , response ) => {
	//	
	console.log( colors.brightRed( 'EXIT!' ) )
	process.exit(0)
} )
