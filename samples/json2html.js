// cd c:\workspace\vscode\nodeSamples\samples
// node json2html
// > curl -v http://localhost:3000

const express = require( 'express' )
const colors = require( 'colors/safe' )
const path = require( 'path' )
const fs = require('fs')
const expressApp = express( )
const PORT = 3000
let date = new Date( ).toISOString( )

expressApp.use( express.static( path.join( __dirname, '../common/resources' ) ) )

// server
const varServer = expressApp.listen( PORT , ( ) => {
	//
	const txt = colors.brightCyan( 'expresso' )
	+ `\n\t` + `user: ${ process.env.USERNAME }`
	+ `\n\t` + `date: ${ date }`
	+ `\n\t` + `drnm: ${__dirname}`
	+ `\n\t` + process.cwd( )
	console.log( colors.brightGreen( txt ) )
} )

expressApp.get( [ '/0' , '/exit' ] , ( request , response ) => {
	//
	console.log( colors.brightRed( 'EXIT!' ) )
	process.exit(0)
} )

expressApp.get( [ '/1' , '/' , '/root' ], ( request , response ) => {
	//
	let txtline = colors.brightCyan( 'Hello!' )
	txtline += '\n    0 ' + 'exit'
	txtline += '\n    1 ' + 'root'
	txtline += '\n    2 ' + 'json'
	console.log( txtline )
	response.send( txtline )
	response.end( )
} )

expressApp.get( [ '/2' , '/json' ] , ( request , response ) => {
	//
	const fileName = __dirname + '\\booklist.json'
	console.log( fileName )
	fs.readFile( fileName, 'utf8' , (err, data) => {
		if (err) { console.error(err); return }
		const dataobj = JSON.parse(data);
		console.log(data)
		let txtLines = '<br /><center><table border = "1">'
		for(obj in dataobj) {
			txtLines += '<tr>' 
				+ '<td>' + dataobj[obj]["Book ID"] + "</td>"
				+ '<td>' + dataobj[obj].Book_Name + "</td>"
				+ '<td>' + dataobj[obj].Category + "</td>"
				+ '<td>' + dataobj[obj].Price + '</td>'
				+'</tr>'
		}
		txtLines += '</table></center>'
		console.log( 'dataobj.length: ' + dataobj.length )
		response.send( txtLines )
		response.end( )
	})	
} )
