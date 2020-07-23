// https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm
// cd c:\workspace\vscode\nodeSamples
// node expresso
// > curl -v http://localhost:3000/json

const basics = require( './common/libraries/basics.js' ) ;
const path = require( 'path' ) ;
const express = require( 'express' ) ;
const expressApp = express( ) ;
const PORT = 3000;
	
expressApp.use( express.static( path.join( __dirname, '/' ) ) ) ;
expressApp.use( express.static( path.join( __dirname, '/images' ) ) ) ;
expressApp.use( express.static( path.join( __dirname, '/common/resources' ) ) ) ;
expressApp.use( express.static( path.join( __dirname, '/common/libraries' ) ) ) ;

//
const varServer = expressApp.listen( PORT , ( )=> {
	//
	const date = new Date( ).toISOString( );
	const txt = `${ basics.COLORS.CYN1 }` 
	+ `expresso${ basics.COLORS.GRN1 }`
	+ `\n    user: ${ process.env.USERNAME }`
	+ `\n    date: ${ date }`
	+ `\n    drnm: ${__dirname}` 
	+ `${ basics.COLORS.NON0 }`;
	console.log( txt ) ;
} ) ;


expressApp.get( [ '/0' , '/exit' ] , ( request , response ) => {
	//
	const txtline = basics.COLORS.RED1 + 'EXIT!' + basics.COLORS.NON0;
	console.log( txtline ) ;
	process.exit(0);
} ) ;

expressApp.get( [ '/1' , '/' , '/root' ], ( request , response ) => {
	//
	let txtline = basics.COLORS.CYN1 + 'Hello!' + basics.COLORS.NON0;
	txtline += '\n    0 ' + 'exit';
	txtline += '\n    1 ' + 'root';
	txtline += '\n    2 ' + 'home';
	txtline += '\n    3 ' + 'test';
	txtline += '\n    4 ' + 'json';
	txtline += '\n    5 ' + 'zip';
	txtline += '\n    6 ' + 'java';
	txtline += '\n    7 ' + 'python';
	console.log( txtline ) ;
	response.send( txtline ); 
} ) ;

expressApp.get( [ '/2' , '/home' ] , ( request , response ) => {
	const fileName = __dirname + '/common/index.html';
	console.log( fileName ) ;
	response.sendFile( fileName );
} ) ;

expressApp.get( [ '/3' , '/test' ] , ( request , response ) => {
	console.log( request.headers );
	const envr = Object.keys( process.env ).map( ( idx , ctr ) => 
		ctr.toString( ).padEnd(2) + ' ' 
		+ idx.padEnd(25) + ' | ' 
		+ process.env[ idx ] ) ;
	console.log( envr ) ;	
	response.sendStatus( 200 ); 
} ) ;

expressApp.get( [ '/j' , '/jsons' ] , ( request , response ) => response.json( { ping: true } ) );

expressApp.get( [ '/4' , '/json' ] , ( request , response ) => { 
	//
	const fileName = __dirname + '/common/resources/books.json';
	console.log( fileName ) ;
	response.sendFile( fileName ) 
} );

expressApp.get( [ '/5' , '/zip' ] , ( request , response ) => { 
	//
	const fileName = __dirname + '/common/resources/xml/xml_wav_books_7zp.zip';
	console.log( fileName ) ;
	response.sendFile( fileName ) 
} );

expressApp.get( [ '/6' , '/java' ] , ( request , response ) => {
	//
	const pathName = 'C:\\servers\\nodejs\\';
	console.log( pathName ) ;
	basics.spawnJava( pathName , 'resources.AnyClass' , response ); 
} ) ;

expressApp.get( [ '/7' , '/python' ] , ( request , response ) => { 
	//
	const fileName = './resources/sample.py';
	console.log( fileName ) ;
	basics.spawnPython( fileName , '' , response ); 
} ) ;
