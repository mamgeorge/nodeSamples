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

const STYLE = '<style>body { font-family: verdana; }</style>'
const RETURN = '<br /><a href = "/">return</a><br />'
const options = { 
	uri: 'http://localhost:2000', // the rest of this is not needed
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
let HEADER = STYLE + new Date( ).toISOString( ) + '<br/>\n'

// server
const varServer = expressApp.listen( PORT , ( )=> { console.log( 'expresso api' ) } )

expressApp.get( [ '/', '/home' ] , ( req, res ) => { // test
	//
	let msg = HEADER + 'GET: ' 
		+ '<br /><a href = "/home" > home </a>'	
		+ '<br /><a href = "/sync" > sync </a>'
		+ '<br /><a href = "/async" > async (plain)</a>'
		+ '<br /><a href = "/asyncs" > asyncs </a>'
		+ '<br /><a href = "/test" > test </a>'

	res.header( 'Content-Type', 'text/html' )
	res.end(  msg )
	console.log( new Date( ).toISOString( ) )
} ) 

expressApp.get( '/test' , ( req, res ) => { // test
	//
	let msg = new Date( ).toISOString( ) + ' / ' 
	const getDataPromised = async ( ) => { 
		let dataPromised = new Promise(resolve => {
			request( options, (err, rsp, body) => { return resolve(body) } )
		})
		return await dataPromised.then( (data) => { return data } )
	}
	getDataPromised().then((data) => { res.send( HEADER + data + RETURN ) } )
} ) 

expressApp.get( '/sync' , ( req, res ) => {
	//
	const uri = 'http://localhost:2000'
	return new Promise(resolve => {
		request( uri, (err, rsp, body) => { return resolve(body) } )
	})
	.then((data) => { res.send( HEADER + data + RETURN ) } )
} ) 

expressApp.get( '/async' , ( req, res ) => { // test
	//
	const getDataPromised = async ( ) => { 
		let dataPromised = new Promise(resolve => {
			request( options, (err, rsp, body) => { return resolve(body) } )
		})
		return await dataPromised.then( (data) => { return data } )
	}
	getDataPromised().then((data) => { res.send( data ) } )
} ) 

expressApp.get( '/asyncs' , ( req, res ) => {
	getDataPromised().then((data) => { res.send( HEADER + data + RETURN ) } )
} ) 

const getDataPromised = async ( ) => { 
	let dataPromised = new Promise(resolve => {
		request( options, (err, rsp, body) => { return resolve(body) } )
	})
	return await dataPromised.then( (data) => { return data } )
}
