// cd c:\workspace\github\nodeSamples
// node samples/tokens

const http = require('http')
const crypto = require('crypto')

process.title = 'Token generator'
const PORT = 2000
let date = new Date( ).toISOString( )

//
const httpServer = http.createServer( (req, res) => {
	//
    res.writeHead( 200, { 'Content-Type': 'text/plain' } )
	let tokens = create_jsonTokens( )
	res.write( tokens )
	res.end(  )
})

httpServer.listen( PORT, (  ) => {  
	msg = 'expresso tokens: ' + date + ' / '+ PORT
	console.log( msg ) 
} )

function create_jsonTokens( ) {
    //
    const randomn4 = crypto.randomBytes(4).toString('hex').toUpperCase()
    let tokenAccess = 'TOKEN_ACCESS_' + randomn4
    let tokenRefresh = 'TOKEN_REFRESH_' + randomn4
    let tokenId = 'TOKEN_ID_' + randomn4
    //
    let JSON_TOKEN_ITEMS = { 
		access_token: tokenAccess, 
		token_type: 'bearer', 
		expires_in: 43200, // 12*60*60
		resource: 'MLG:URI:RS-777835-43224-AccessService-DEV',
		token_type: 'bearer', 
		refresh_token: tokenRefresh,
		refresh_token_expires_in: 28800,  // 6*60*60
		id_token: tokenId 
	}
	let JSON_TOKENS = JSON.stringify( JSON_TOKEN_ITEMS, null, '\t' )	 
    return JSON_TOKENS;
}
