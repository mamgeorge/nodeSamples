// https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm
// cd c:\workspace\github\nodeSamples
// node expresso
// > curl -v http://localhost:3000/json
// > powershell (curl http://localhost:3000/json).content

const basics = require( './common/libraries/basics.js' )
const express = require( 'express' )
const fs = require( 'fs' )
const colors = require( 'colors/safe' )
const log4js = require( 'log4js' )
const path = require( 'path' )
const sqlite3 = require('sqlite3').verbose()
const expressApp = express( )

const PORT = 3000
const RETURN = '<br /><a href = "/" />return</a>'
const pathFileDB = 'C:/dbase/sqlite/chinook.db'
const SQL_READ = 'SELECT FirstName First, LastName Last, Email FROM customers WHERE Country = ? ORDER BY LastName ASC'

// logSetup
let date = new Date( ).toISOString( )
function logSetup( ) {

	datestamp = '_' + date.replace(/-/g,'').replace(/T/g,'_').replace(/:/g,'').replace(/\./g,'')
	fileSimpl = 'logs/' + 'expresso' + '.log'
	fileTitle = 'logs/' + 'expresso' + datestamp.substr(0,16) + '.log'
	log4js.configure( {
		appenders: { 'file' : { type: 'file', filename: fileSimpl } },
		categories: { default : { appenders: ['file'], level: 'info' } },
	})
	const logger = log4js.getLogger('testing')
	logger.info( '\n' + '■'.repeat(20) + '\n' + 'Beginning batch run for expresso ' )
}

// server init
const varServer = expressApp.listen( PORT , ( )=> {
	//
	const txt = colors.brightCyan( 'expresso' )
	+ `\n\t` + `user: ${ process.env.USERNAME }`
	+ `\n\t` + `date: ${ date }`
	+ `\n\t` + `drnm: ${__dirname}`
	console.log( colors.brightGreen( txt ) )
} )

// basic code
function getRoot( req, res ) {
	
	const msg = 'OK! ' + new Date( ).toISOString( ) + ' ' + RETURN
	console.log( msg ); 
	res.send( msg ) 
}
function getHome( req, res ) {
	//
	const fileLocal = path.resolve( __dirname + '/common/index.html' )
	res.header( 'Content-type', 'text/html' )
	res.sendFile( fileLocal )
	//
	let msg = colors.brightCyan( 'Hello!' )
	msg += '\n' + '/root, /home'
	msg += '\n' + '/hdrs, /envr, /file'
	msg += '\n' + '/wave, /zips'
	msg += '\n' + '/java, /python'
	msg += '\n' + '/sqlite'
	msg += '\n' + new Date().toISOString()
	msg += '\n' + 'fileLocal: ' + fileLocal + '\n'

	console.log( msg )
}
function getHdrs( req, res ) {
	//
	date = new Date( ).toISOString( )
	let msg = ` : ${date}`
	msg += '\n' + process.cwd( )
	msg += '\n' + JSON.stringify( req.query )
	msg += '\n' + JSON.stringify( req.headers, null, '\t' ) + '\n'
	msg = colors.brightCyan( msg )
	//
	console.log( msg )
	res.end( msg + RETURN )
}
function getEnvr( req, res ) {
	//
	let msg = Object.keys( process.env ).map( ( idx , ctr ) =>
		+ ctr.toString( ).padEnd(2) + ' '
		+ idx.padEnd(25) + ' | '
		+ process.env[ idx ]
	)
	msg = colors.brightBlue( msg )
	//
	console.log( msg )
	res.end( msg )
}
function getFile( req, res, fileName ) {
	//
	if( fileName == '' || fileName == null) { fileName = '/common/resources/books.json' }
	const fileLocal = path.join( __dirname, fileName )
	console.log( 'fileLocal: ', fileLocal )
	//
	const options = ''; // { root: path.join( __dirname ) }
	let contentType = 'text/plain'
		if ( fileName.includes('html') ) { contentType = 'text/html' }
		if ( fileName.includes('json') ) { contentType = 'application/json' }
		console.log( 'contentType: ', contentType)
		// res.sendFile( fileLocal )
	res.header("Content-Type", contentType) // not critical
	res.sendFile( fileLocal, options, function(err) {
		if (err) { console.log( 'ERROR: ' + err ) } else
		{ console.log( 'sent:\n', fileLocal ) }
	})
	// res.end( 'GOTFILE!' + RETURN )
	//

	fs.readFile( fileLocal, 'UTF8' , (err, data) => {
		//
		if (err) { console.error(err) }
		console.log( fileLocal + '\n' + data )
	})
}

function getWave( req, res ) {
	//
	const fileName = path.join( __dirname, '/common/resources/hal9000.wav' )
	console.log( fileName )
	res.sendFile( fileName )
}
function getZips( req, res ) {
	//
	const fileName = path.join( __dirname + '/common/resources/xml/xml_wav_books_7zp.zip' )
	console.log( fileName )
	res.sendFile( fileName )
}
function getJava( req, res ) {

	const pathName = 'C:\\servers\\nodejs\\common\\'
	console.log( pathName )
	basics.spawnJava( pathName , 'resources.AnyClass' , res )
}
function getPython( req, res ) {

	const pathName = 'C:\\servers\\nodejs\\common\\'
	console.log( pathName )
	basics.spawnPython( pathName , 'resources.sample.py' , res )
}
function getSqlite( req, res ) {

	// https://www.sqlitetutorial.net/sqlite-nodejs/connect/
	const fileName = 'c:/dbase/sqlite/chinook.db'
	const SQL_READ = `SELECT FirstName as First, LastName Last, Email FROM customers
		WHERE country = 'USA' ORDER BY LastName ASC`

	let db = new sqlite3.Database( fileName , (err) => {

		if (err) { console.error(err.message) }
		console.log( `CONNECTED: ${fileName}\n` )
	})

	db.serialize( ( ) => {

		db.each( SQL_READ, (err, row) => {
			if (err) { console.error(err.message) }
			let name = row.First + ' ' + row.Last
			let msg = '\t' + name.padEnd(20) + '\t\t' + row.Email
			// let msg = `\t${row.First} ${row.Last} \t\t${row.Email}`
			console.log( msg );
		})
	})

	db.close((err) => {
		if (err) { console.error(err.message) }
		console.log( 'CLOSED');
	})

	console.log( 'DONE' );
	res.end( 'see console: ' + new Date( ).toISOString() )
}

// routes
expressApp.get( [ '/0' , '/' , '/root' ], ( req , res ) => { getRoot( req, res ) } )
expressApp.get( [ '/1' , '/home' ] , ( req , res ) => { getHome( req, res ) } )
expressApp.get( [ '/2' , '/hdrs' ] , ( req , res ) => { getHdrs( req, res ) } )
expressApp.get( [ '/3' , '/envr' ] , ( req , res ) => { getEnvr( req, res ) } )
expressApp.get( [ '/4' , '/file' ] , ( req , res ) => { getFile( req, res, '' ) } )

expressApp.get( [ '/5' , '/wave' ] , ( req , res ) => { getWave( req, res ) } )
expressApp.get( [ '/6' , '/zips' ] , ( req , res ) => { getZips( req, res ) } )
expressApp.get( [ '/7' , '/java' ] , ( req , res ) => { getJava( req, res ) } )
expressApp.get( [ '/8' , '/python'], ( req , res ) => { getPython( req, res ) } )
expressApp.get( [ '/sqlite'], ( req , res ) => { getSqlite( req, res ) } )

expressApp.get( [ '/9' , '/exit' ] , ( req , res ) => { console.log( colors.brightRed( 'EXIT!' ) ); process.exit(0) } )
expressApp.post( [ '/a' , '/post' ] , ( req , res ) => {
	//
	let msg = getGeneric( 'test' , req )
	logger.info( msg )
	res.sendStatus( 200 )
	res.end( )
} )

expressApp.use( express.static( path.join( __dirname, '/' ) ) )
expressApp.use( express.static( path.join( __dirname, '/images' ) ) )
expressApp.use( express.static( path.join( __dirname, '/common' ) ) )
expressApp.use( express.static( path.join( __dirname, '/common/resources' ) ) )
expressApp.use( express.static( path.join( __dirname, '/common/libraries' ) ) )
//----
