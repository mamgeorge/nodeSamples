//
import express from 'express' ;
import { fileURLToPath } from 'url';
import basics from '../common/libraries/basics.js' ;

const __dirname = 'C:/servers/nodejs/';
const expressApp = express( ) ;
expressApp.use( express.static( __dirname + 'common/' ) ) ;

const PORT = 3000;
const GRN1 = basics.COLORS.GRN1;
const CYN1 = basics.COLORS.CYN1;
const NON0 = basics.COLORS.NON0;
let txtHtml = '';
//
expressApp.get( '/' , function ( request , response ) {
	txtHtml = 'Greetings! ' + new Date( ).toISOString( );
	response.send( txtHtml );
	console.log( CYN1 + txtHtml + NON0 ) ;
});

expressApp.get( '/check' , function ( request , response ) {
	txtHtml = 'check! ' + new Date( ).toISOString( );
	response.send( txtHtml );
	console.log( CYN1 + 'check' + NON0 ) ;
});

expressApp.get( '/history' , ( request , response ) => {
	console.log( CYN1 + JSON.stringify( request.headers ) + NON0 );
	response.sendFile( __dirname + 'history/history.html' );
} ) ;
//
console.log( fileURLToPath( import.meta.url ) );
console.log( GRN1 + `port: ${ PORT }` + NON0 ) ;

expressApp.listen( PORT );
