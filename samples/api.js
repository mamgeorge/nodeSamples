// cd c:\workspace\github\nodeSamples
// node samples/api

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
const varServer = expressApp.listen( PORT , ( )=> { console.log( 'expresso api' ) } )

expressApp.get( '/' , ( req, res ) => {
	//
	// https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html
	let msg = new Date( ).toISOString( ) + ' / ' 
	let dataAwaited = getDataPromised()
		dataAwaited.then((inf) => { res.send( msg + inf ) } )
} ) 

const getDataPromised = async ( ) => { 
	let dataPromised = new Promise(resolve => {
		request( options, (err, rsp, body) => { return resolve(body) } )
	})
	return await dataPromised.then( (data) => { return data } )
}

expressApp.get( '/sync' , ( req, res ) => {
	//
	const uri = 'http://localhost:2000'
	let msg = new Date( ).toISOString( ) + ' / ' 
	return new Promise(resolve => {
		request( uri, (err, rsp, body) => { return resolve(body) } )
	})
	.then((result) => { res.send( msg + result ) } )
} ) 