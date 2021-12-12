// cd c:\workspace\github\nodeSamples
// node expresso

const express = require('express')
const expressApp = express()
const fs = require('fs')
const path = require('path')
const colors = require('colors/safe')

process.title = 'EXPRESS BASICS'
const PORT = 2000
const HEADER = '<style>body { font-family: verdana; }</style>'
const RETURN = '<br /><a href = "/">return</a><br />'
let DATE = new Date( ).toISOString( )

expressApp.listen( PORT, ( ) => {
	const msg = DATE + ' / ' + PORT
	console.log( colors.inverse.brightCyan( msg ) )
} )

expressApp.use( express.urlencoded() ); // parse html

expressApp.use( express.json() ); // parse json

function getHome( req, res) {
	//
	msg = HEADER + 'GET: ' +  new Date( ).toISOString( )
		+ '<br /><a href = "/home" > home </a>'
		+ '<br /><a href = "/hdrs" > hdrs </a>'
		+ '<br /><a href = "/envr" > envr </a>'
		+ '<br /><a href = "/file" > file </a>'

	res.header( 'Content-Type', 'text/html' )
	res.end(  msg )
	console.log( new Date( ).toISOString( ) )
}

function getHdrs( req, res) {

	msg = HEADER + 'GET: ' +  new Date( ).toISOString( ) + RETURN
		+ '<br />process: \n' + process.cwd( )
		+ '<br /><br />query: \n' + JSON.stringify( req.query ) + ' / 1st: ' + req.query.id
		+ '<br /><br />headers: \n' + JSON.stringify( req.headers, null, '<br />    ' )
	//
	res.header( 'Content-Type', 'text/html' )
	res.end(  msg )
	console.log( msg )
}

function getEnvr( req, res) {
	//
	let msg = HEADER + 'GET: ' +  new Date( ).toISOString( ) + RETURN + '<br />\n'
	const envr = Object.keys( process.env ).map( ( key , idx ) =>
		//
		msg += ( '[' + (idx.toString( ) ).padEnd(3) + '] '
		+ key.padEnd(25) + ' | '
		+ process.env[ key ] + '<br />\n').replace( ',[', '[' )
	)
	//
	console.log( colors.brightCyan( msg ) )
	res.header( 'Content-type', 'text/html' )
	res.write( msg )
	res.end( RETURN )
}

function getFile( req, res) {
	//
	// handle input
	let fileName = '/common/resources/Genesis_01.txt' ; // ?name=Genesis_01.txt
	if(req.query.name == 'undefined' || req.query.name == null )
		{ console.log( '#### ' + fileName + ' ####' ) } else
		{ fileName = '/common/resources/' + req.query.name }
	console.log( 'req.query: [', req.query + '], '
		+ 'req.query.name: [' + req.query.name + '], '
		+ '[' + JSON.stringify( req.query.name ) + ']' )
	const fileLocal = path.join( __dirname, fileName )
	console.log( 'fileLocal: ', fileLocal )
	//
	const options = ''
	let contentType = 'text/plain'
		if ( fileName.includes('html') ) { contentType = 'text/html' }
		if ( fileName.includes('json') ) { contentType = 'application/json' }
		console.log( 'contentType: ', contentType )

	// sends data to response; res.sendFile( fileLocal )
	res.header("Content-Type", contentType) // not critical
	res.sendFile( fileLocal, options, function(err) {
		if (err) { console.log( 'ERROR: ' + err ) } else
		{ console.log( 'sent: ', fileLocal ) }
	})

	// resends data to console
	fs.readFile( fileLocal, 'UTF8' , (err, data) => {
		//
		if (err) { console.error(err) }
		console.log( 'data:\n' + data )
	})
}

expressApp.get( ['/', '/root', '/home'], (req, res) => { getHome( req, res ) } )
expressApp.get( '/hdrs', (req, res) => { getHdrs( req, res ) } )
expressApp.get( '/envr', (req, res) => { getEnvr( req, res ) } )
expressApp.get( '/file', (req, res) => { getFile( req, res ) } )
expressApp.get( '/exit', (req, res) => { process.exit(0) } )

expressApp.post( '/', (req, res) => {
	//
	msg = 'POST ROOT: ' +  new Date( ).toISOString( ) + ', POST: ' + PORT
	//
	msg += '\n' + JSON.stringify( req.headers, null, '\t' ) + '\n'
	let body = ''
	console.log(  'body: ' + req.body )
	console.log( 'plain(' + PORT + '), body: ' + body )
	res.header( 'Content-Type', 'text/html' )
	res.end(  msg )
	//
	console.log(  msg )
})

expressApp.post( '/form', (req, res) => {
	//
	msg = 'POST FORM: ' +  new Date( ).toISOString( ) + ', POST: ' + PORT + ', '
		+ 'req.body.name [' + req.body.name + '], '
		+ 'req.body [' + req.body + ']'
	//
	let body = ''
	req.on( 'data', (chunk) => { body += chunk } )
	req.on( 'end', () => {
		// parsedBody = parse(body) // const { parse } = require( 'querystring' )
		console.log( 'form(' + PORT + '), body: ' + body )
		res.header( 'Content-Type', 'text/html' )
		res.end( msg + ' / ' + body );
	} )
	console.log( msg );
})
//
