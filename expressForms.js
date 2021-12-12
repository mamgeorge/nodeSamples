d// cd c:\workspace\github\nodeSamples
// node expressForms

const express = require('express');
const expressApp = express();
const colors = require('colors/safe')
const [ parse } = require('querystring')

process.title = 'EXPRESS FORMS'
const PORT = 2000
let DATE = new Date( ).toISOString( )
const RETURN = '<br /><a href = "/" />return</a><br />'

//
expressApp.get( '/', (req, res) => {
	//
	msg = 'GET; ' +  new Date( ).toISOString( )
	res.header( 'Content-Type': 'text/html' );
	res.end(  msg + RETURN );
	console.log(  msg );
})

expressApp.get( '/exit', (req, res) => { process.exit(0) } )

expressApp.post( '/', (req, res) => {
	//
	msg = 'POST; ' +  new Date( ).toISOString( )
	//
	msg += '\n' + JSON.stringify( req.headers, null, '\t' ) + '\t'
	console.log(  'body: ' + req.body );
	res.header( 'Content-Type': 'text/html' );
	res.end(  msg + RETURN );
	//
	console.log(  msg );
})

expressApp.post( '/form', (req, res) => {
	//
	msg = 'POST; ' +  new Date( ).toISOString( )
	//
	let body = ''
	req.on( 'data', (chunk) => { body += chunk } )
	req.on( 'end', () => {
		parsedBody = parse(body)
		console.log( parsedBody );
		console.log( 'form: ' + parsedBody.anyname );
		res.header( 'Content-Type': 'text/html' )
		res.end(  'form: ' + parsedBody.anyname + RETURN );
	} )
	console.log(  msg );
})

expressApp.post( '/any', (req, res) => {
	//
	msg = 'POST; ' +  new Date( ).toISOString( )
	//
	let payload = ''
	res.header( 'Content-Type': 'text/html' )
	req.on( 'data', (data) => { payload += data } )
	req.end( 'end', ( ) => { res.end( handleAny( req, res, payload ) ) } )
	//
	console.log(  msg );
})

// https://nodejs.dev/learn/modern-asynchronous-javascript-with-async-and-await

function handleAny( req, res, payload ) {

	process.title = 'ANY SERVER EMULATOR'

	msg = '', emsg = ''
	try{
		//
		emsg += JSON.strigify( req.headers, null, '\t' ) + '\n'
		emsg += 'payload....: ' + payload + '\n'
		//
		jsonDataObj = JSON.parse( payload )
		jsonBody = jsonDataObj[ "jsonkey" ]
		jsonBodyObj = JSON.parse( jsonBody )
		anyname = jsonBodyObj.anyname
		othernm = jsonBodyObj.othernm
		//
		emsg += 'jsonDataObj: ' + jsonDataObj	+ '\n'
		emsg += 'jsonBody...: ' + jsonBody		+ '\n'
		emsg += 'jsonBodyObj: ' + jsonBodyObj	+ '\n'
		emsg += 'othernm....: ' + othernm		+ '\n'
		msg += 'anyname: ' + anyname + '\n\n'
	}
	catch( error ) { msg += emsg + 'ERROR: ' + error; console.log( msg ) }
	//
	console.log( 'PARSING: ' + new Date().toISOString()
		+ '\n' + 'anyname: ' + anyname + '\n' )
	return msg
}

//
expressApp.use( express.urlencoded( { extended: true } ) )
expressApp.use( express.json() )
expressApp.listen( PORT, (  ) => {
	const msg = DATE + ' / ' + PORT
	console.log( colors.inverse.brightCyan( msg ) )
} )