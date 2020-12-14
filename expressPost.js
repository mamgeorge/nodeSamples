// https://stackoverflow.com/questions/4295782/how-to-process-post-data-in-node-js
// cd c:\workspace\vscode\nodeSamples
// node expresso
// > curl -v http://localhost:3000/json
// > powershell (curl http://localhost:3000/json).content

const basics = require( './common/libraries/basics.js' ) ;
const path = require( 'path' ) ;
const express = require( 'express' ) ;
const expressApp = express( ) ;
const PORT = 3000;

expressApp.use( express.static( path.join( __dirname, '/' ) ) ) ;
expressApp.use( express.static( path.join( __dirname, '/images' ) ) ) ;
expressApp.use( express.static( path.join( __dirname, '/common/resources' ) ) ) ;
expressApp.use( express.static( path.join( __dirname, '/common/libraries' ) ) ) ;
expressApp.use( express.urlencoded( ) );
expressApp.use( express.json( ) );
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
	txtline += '\n    5 ' + 'wav';
	txtline += '\n    6 ' + 'zip';
	txtline += '\n    7 ' + 'java';
	txtline += '\n    8 ' + 'python';
	console.log( txtline ) ;
	response.send( txtline );
	response.end( );
} ) ;

expressApp.post( '/send', function(request, response){
    console.log(request.body.user.name);
    console.log(request.body.user.email);
});

