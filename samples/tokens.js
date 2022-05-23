// cd c:\workspace\github\nodeSamples
// node basics

const http = require('http')
const crypto = require('crypto')

process.title = 'Token generator'
const PORT = 2000
let date = new Date( ).toISOString( )

//
const httpServer = http.createServer( (req, res) => {
	//
    res.writeHead( 200, { 'Content-Type': 'text/plain' } )
	res.write( create_jsonTokens() )
	res.end(  )
})

httpServer.listen( PORT, (  ) => {  
	msg = date + ' / '+ PORT
	console.log( msg ) 
} )

function create_jsonTokens() {
    //
    const randomn4 = crypto.randomBytes(4).toString('hex').toUpperCase()
    let tokenAccess = 'TOKEN_ACCESS_' + randomn4
    let tokenRefresh = 'TOKEN_REFRESH_' + randomn4
    let tokenId = 'TOKEN_ID_' + randomn4
    //
    let JSON_TOKEN_ITEMS = `{
	"access_token": "${tokenAccess}", 
	"token_type": "bearer", 
	"expires_in": 43200, 
	"resource": "MLG:URI:RS-777835-43224-AccessService-DEV", 
	"token_type": "bearer", 
	"refresh_token": "${tokenRefresh}", 
	"refresh_token_expires_in": 28800, 
	"id_token": "${tokenId}", 
}`;
    return JSON_TOKEN_ITEMS;
}
//
