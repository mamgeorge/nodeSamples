// cd c:\workspace\github\nodeSamples
// node expresso

const express = require('express');
const expressApp = express();
const colors = require('colors/safe')

process.title = 'EXPRESS BASICS'
const PORT = 2000
let DATE = new Date( ).toISOString( )

expressApp.listen( PORT, (  ) => {
	const msg = DATE + ' / ' + PORT
	console.log( colors.inverse.brightCyan( msg ) )
} )

//
expressApp.get( '/', (req, res) => {
	//
	msg = 'GET: ' +  new Date( ).toISOString( )
	res.header( 'Content-Type', 'text/html' )
	res.end(  msg )
	console.log(  msg )
})

expressApp.get( '/exit', (req, res) => { process.exit(0) } )

expressApp.post( '/', (req, res) => {
	//
	msg = 'POST: ' +  new Date( ).toISOString( )
	//
	msg += '\n' + JSON.stringify( req.headers, null, '\t' ) + '\t'
	console.log(  'body: ' + req.body )
	res.header( 'Content-Type', 'text/html' )
	res.end(  msg )
	//
	console.log(  msg )
})

expressApp.post( '/form', (req, res) => {
	//
	msg = 'POST: ' +  new Date( ).toISOString( )
	//
	let body = ''
	req.on( 'data', (chunk) => { body += chunk } )
	req.on( 'end', () => {
		// parsedBody = parse(body)
		console.log( body );
		res.header( 'Content-Type', 'text/html' )
		res.end(  msg );
	} )
	console.log(  msg );
})
//
