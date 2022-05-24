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

expressApp.get( '/' , ( req, res ) => { // test
	//
	let msg = new Date( ).toISOString( ) + ' / ' 
	const getDataPromised = async ( ) => { 
		let dataPromised = new Promise(resolve => {
			request( options, (err, rsp, body) => { return resolve(body) } )
		})
		return await dataPromised.then( (data) => { return data } )
	}
	getDataPromised().then((data) => { res.send( msg + data ) } )
} ) 


expressApp.get( '/asyncs' , ( req, res ) => {
	//
	let msg = new Date( ).toISOString( ) + ' / ' 
	getDataPromised().then((data) => { res.send( msg + data ) } )
} ) 

const getDataPromised = async ( ) => { 
	let dataPromised = new Promise(resolve => {
		request( options, (err, rsp, body) => { return resolve(body) } )
	})
	return await dataPromised.then( (data) => { return data } )
}

expressApp.get( '/async' , ( req, res ) => { // test
	//
	let msg = new Date( ).toISOString( ) + ' / ' 
	const getDataPromised = async ( ) => { 
		let dataPromised = new Promise(resolve => {
			request( options, (err, rsp, body) => { return resolve(body) } )
		})
		return await dataPromised.then( (data) => { return data } )
	}
	getDataPromised().then((data) => { res.send( msg + data ) } )
} ) 

expressApp.get( '/sync' , ( req, res ) => {
	//
	const uri = 'http://localhost:2000'
	let msg = new Date( ).toISOString( ) + ' / ' 
	return new Promise(resolve => {
		request( uri, (err, rsp, body) => { return resolve(body) } )
	})
	.then((result) => { res.send( msg + result ) } )
} ) 