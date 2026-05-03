// ©2021, 2023 Martin George , All rights reserved.
// 3service/bpod_ctrl.js

//globals
const baseurl = 'C:/Users/mamge/OneDrive/Documents/5Personal/Technology/mamgeorge/3service/'
const folder = baseurl + 'images_bible/';
const version = 'NASB';
const ext = '.jpg';
const linkAUD = 'https://www.biblegateway.com/audio/mcconachie/nasb1995/';
const linkBGW = "https://www.biblegateway.com/passage/?version=" + version + "&search=";
const linkBLU = 'https://www.blueletterbible.org/' + version + '/';
const linkBBL = linkBGW;

let imgCtr = 0;
let txtCtr = 0;
let flgProport = 0;
let dayInYear = 0;
let bpod = 0;
let imgLen = pictures.length;
let btnAdvance = Math.floor( imgLen / 10 );
let isShowMore;
let mouseEvent = false;

const books = ('Gen Exo Lev Num Deu Josh Judg Ruth 1Sam 2Sam 1Kin 2Kin 1Chr 2Chr Ezr Neh Est '
	+ 'Job Psa Pro Ecc Son Isa Jer Lam Eze Dan Hos Joel Amos Oba Jon Mic Nah Hab Zeph Hag Zech Mal '
	+ 'Matt Mark Luke John Acts Rom 1Cor 2Cor Gal Eph Phil Col 1The 2The 1Tim 2Tim Titu Phm '
	+ 'Heb Jam 1Pet 2Pet 1Jhn 2Jhn 3Jhn Jude Rev').split(" ")

const txtCopyright = 'BPOD (Bible Picture of the Day): ©2026 Martin George, All rights reserved.';

const txtDescription = [ 'BPOD is the Bible Picture of the Day. \n\
\n\
	The purpose is to:\n\
	• Show Bible Events (people, places, & things) visually \n\
		Tablets, Scrolls, Seals, Statues, Structures, \n\
		Inscriptions, Coins, Cities, Pottery, Artifacts, etc... \n\
	• Reveal the Bible’s Historical Accuracy with colorful images \n\
	• Honor the Lord Jesus\n\
\n\
	The main page contains a large image based on the day of the year. \n\
	• At the right is a detail column with a "REFERENCE" and "VERSE" for this image. \n\
	• After this is a "LABEL" identifying the image. \n\
	• Then there is a detailed "DESCRIPTION" of the object. \n\
	• Finally, there is a "SIGNIFICANCE" section describing \n\
	the connection of the object to the Bible and History. \n\
\n\
	At the left is a "Sequential List" of every object, \n\
	and a "Rainbow Bar" for quick navigation. \n\
	There is also a "Word Search" capability at the top of the page. \n\
\n\ ' + txtCopyright

];

window.addEventListener("click",
	function(e) { if (e.shiftKey) { mouseEvent = true ; } else { mouseEvent = false; } },
	false
);

function showMenu( ) {

	let tempColor = '#4040f0';
	let tempStyleBord = '';
	let tempStyleBnnr = '';
	let imgName = '';
	let imgFile = '';
	let ictr = 0;
	let	book = 0;
	let nlink = '';

	let txt = '<table id = "menulist" >';
	let tempStyle = 'class = "img-thumbnail" style = "border: 1px solid ' + tempColor + ';" ';
	dayInYear = getUtilDayInYear( new Date() );
	bpod = Math.floor( ( dayInYear/365 ) * imgLen ) - 1;

	// build menu
	for ( ; ictr < imgLen; ictr++ ) {

		imgName = pictures[ictr][1]
		book = Number( imgName.substring(0, 2) ); labs = imgName.substring(0, 10)

		// handle duplicates
		let tmpImg = pictures[ictr][2]
		if( tmpImg == '' ) { imgFile = folder + 'xtra/' + imgName + '_t' + ext }
		else {

			let ictrDupe = pictures.findIndex(pic => pic[0] === tmpImg )
			imgFile = folder + 'xtra/' + pictures[ictrDupe][1] + '_t' + ext

			let bookVal = pictures[ictr][0].slice(3,5)
			let bookNam = books[ Number( bookVal.trim() ) - 1 ]
			let sndDash = pictures[ictrDupe][1].indexOf('_', 3 )

			let bookNumb = pictures[ictr][0].slice(3,5)
			let bookChap = ''
			let bookVers = ''

			if( bookNumb == 19 ) {
				bookChap = pictures[ictr][0].slice(5,8);
				bookVers = pictures[ictr][0].slice(8,10)
			} else {
				bookChap = pictures[ictr][0].slice(5,7);
				bookVers = pictures[ictr][0].slice(7,9)
			}

			let artifact = pictures[ictrDupe][1].substring(sndDash)
			imgName = + bookNumb + '_' + bookNam + bookChap + bookVers + artifact

		}

		if (book > 0 && book <= 5 ) { nlink = 'bred' } else // law
		if (book >= 6 && book <= 17 ) { nlink = 'byel' } else // hist
		if (book >= 18 && book <= 22 ) { nlink = 'bgrn' } else // poet
		if (book >= 23 && book <= 39 ) { nlink = 'bblu' } else // prph
		if (book >= 40 && book <= 66 ) { nlink = 'bvio' } else // newt
		{ nlink = 'bvio' }

		// get the relative color
		let fct = Math.round( ictr * ( 255 / imgLen ) )
		tempColor = sumRainbow( fct )
		tempStyle = 'class = "img-thumbnail" style = "border: 1px solid ' + tempColor + ';" '

		// set the border color yellow for selected item
		if ( ictr == bpod ) { tempStyle = 'class = "img-thumbnail slct" style = "border: 3px solid #ffff00;" ' }
		if( tmpImg == '' ) { } else { tempStyle = 'class = "img-thumbnail dupe" style = "border: 3px solid ' + tempColor + ';" ' }

		// set the border color white if no significance
		// if ( txtItem[ictr][5] == "" ) { tempStyle = 'class = "img-thumbnail" style = "border: 1px solid #ffffff;" ' } // if no significance

		let menuBarNum = ('' + (ictr + 1) ).padStart(3, '0')
		let menuBarNam = imgName.substring(0, 11).replaceAll('_', '')

		tempStyleBord = 'style = "border: 1px solid ' + tempColor + ';" '
		tempStyleBnnr = 'style = "background: ' + tempColor + '; '

		// set the primary division
		txt = getMenuDivision( txt, pictures, ictr, tempStyleBnnr )

		// main collection
		txt += '<tr id = "' + ictr + '" onclick = "showImg(\'' + ictr + '\')" ><td>'
			+ '<img ' + tempStyle
			+ 'src = "' + imgFile + '" '
			+ 'title = "' + menuBarNum + ' | ' + imgName + '" />'
			+ '<div class = "spanBar ' + nlink + '">' + menuBarNam + '</div>'
			+ '</td></tr>\n'
	}
	txt += '</table>'

	document.getElementById( 'divbar' ).innerHTML = txt

	// ?item=100
	const queryString = window.location.search
	const urlParms = new URLSearchParams(queryString)
	const numitem = urlParms.get('num')
	const refitem = urlParms.get('ref')
	const itmitem = urlParms.get('itm')

	if( numitem == null || numitem=='' ) { console.log( 'bpod: ' + (bpod+1) ) } else { bpod = numitem-1 }

	if( itmitem == null || itmitem=='' ) { } else {

		for ( let ictr = 0; ictr < imgLen; ictr++ ) {

			if ( pictures[ictr][ 0 ] == itmitem ) { bpod = ictr; }
			showImg( bpod );
		}
	}

	if( refitem == null || refitem=='' ) { showImg( bpod ) } else { searchTxt( refitem, 1) } // window.history.pushState({}, document.title, "/" + window.location.href.split('?')[0] );
}

function getMenuDivision( txt, pictures, ictr, tempStyleBnnr ) { // divisions

	try {

		if ( pictures[ictr][0] == 'l1_010101' )	{ txt += '<tr><td><div ' + tempStyleBnnr + 'color: #ffffff;" id = "mlawsGen"	onclick="getSummaryClick( event, \'mlawsExo\' )"	title = "Genesis - Deuteronomy"	>' + '&nbsp;LAW		</div></td></tr>'; }
		if ( pictures[ictr][0] == 'h1_060101' )	{ txt += '<tr><td><div ' + tempStyleBnnr + 'color: #000000;" id = "mhistJosh"	onclick="getSummaryClick( event, \'mhist1Sam\' )"	title = "Joshua - Esther"		>' + '&nbsp;HISTORY	</div></td></tr>'; }
		if ( pictures[ictr][0] == 'pt_180101' )	{ txt += '<tr><td><div ' + tempStyleBnnr + 'color: #000000;" id = "mpoetJob"	onclick="getSummaryClick( event, \'mprphPsa\' )"	title = "Job - SongOfSolomon"	>' + '&nbsp;POETRY	</div></td></tr>'; }
		if ( pictures[ictr][0] == 'f5_230101' )	{ txt += '<tr><td><div ' + tempStyleBnnr + 'color: #000000;" id = "mprphIsa"	onclick="getSummaryClick( event, \'mprphJer\' )"	title = "Isaiah - Malachi"		>' + '&nbsp;PROPHETS</div></td></tr>'; }
		if ( pictures[ictr][0] == 'ng_400101' )	{ txt += '<tr><td><div ' + tempStyleBnnr + 'color: #ffffff;" id = "mnewtMatt"	onclick="getSummaryClick( event, \'mnewtMark\' )"	title = "Matthew - Revelation"	>' + '&nbsp;NEW_TST	</div></td></tr>'; }
		if ( pictures[ictr][0] == 'gospel' )	{ txt += '<tr><td><div ' + tempStyleBnnr + 'color: #ffffff;" id = "mxtraGspl"	onclick="getSummaryClick( event, \'mlawsGen\' )"	title = "4 Spiritual Laws"		>' + '&nbsp;Gospel	</div></td></tr>'; }

		// set any secondary division
		if ( pictures[ictr][0] == 'l2_020108' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #000000;" id = "mlawsExo"	onclick="getSummaryClick(event, \'mlawsLev\')" >'	+ 'Exodus		</td></tr>' }
		if ( pictures[ictr][0] == 'l3_030101' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #000000;" id = "mlawsLev"	onclick="getSummaryClick(event, \'mlawsNum\')" >'	+ 'Leviticus	</td></tr>' }
		if ( pictures[ictr][0] == 'l4_040623' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #000000;" id = "mlawsNum"	onclick="getSummaryClick(event, \'mlawsDeu\')" >'	+ 'Numbers		</td></tr>' }
		if ( pictures[ictr][0] == 'l5_050102' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #000000;" id = "mlawsDeu"	onclick="getSummaryClick(event, \'mhistJosh\')" >'	+ 'Deuteronomy	</td></tr>' }
		if ( pictures[ictr][0] == 'h4_090119' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #000000;" id = "mhist1Sam"	onclick="getSummaryClick(event, \'mhist2Sam\')" >'	+ '1Sam			</td></tr>' }
		if ( pictures[ictr][0] == 'h5_100213' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #000000;" id = "mhist2Sam"	onclick="getSummaryClick(event, \'mhist1Kin\')" >'	+ '2Sam			</td></tr>' }
		if ( pictures[ictr][0] == 'h6_110301' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #000000;" id = "mhist1Kin"	onclick="getSummaryClick(event, \'mhist2Kin\')" >'	+ '1Kin			</td></tr>' }
		if ( pictures[ictr][0] == 'h7_120304' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #000000;" id = "mhist2Kin"	onclick="getSummaryClick(event, \'mhist2K18\')" >'	+ '2Kin			</td></tr>' }
		if ( pictures[ictr][0] == 'h8_121801' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #000000;" id = "mhist2K18"	onclick="getSummaryClick(event, \'mhist1Chr\')" >'	+ '2Kin 18		</td></tr>' }
		if ( pictures[ictr][0] == 'h9_130318' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #000000;" id = "mhist1Chr"	onclick="getSummaryClick(event, \'mhist2Chr\')" >'	+ '1Chr			</td></tr>' }
		if ( pictures[ictr][0] == 'h0_140402' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #000000;" id = "mhist2Chr"	onclick="getSummaryClick(event, \'mhistEzr\')" >'	+ '2Chr			</td></tr>' }
		if ( pictures[ictr][0] == 'he_150101' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #000000;" id = "mhistEzr"	onclick="getSummaryClick(event, \'mpoetJob\')" >'	+ 'Ezr/Neh/Est	</td></tr>' }

		if ( pictures[ictr][0] == 'pt_1900206') { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #000000;" id = "mprphPsa"	onclick="getSummaryClick(event, \'mprphPro\')" >'	+ 'Psalms!		</td></tr>' }
		if ( pictures[ictr][0] == 'pt_201001' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #000000;" id = "mprphPro"	onclick="getSummaryClick(event, \'mprphIsa\')" >'	+ 'Pro/Ecc/SOS	</td></tr>' }

		if ( pictures[ictr][0] == 'f5_240216' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #000000;" id = "mprphJer"	onclick="getSummaryClick(event, \'mprphEze\')" >'	+ '<w>Jeremiah	</td></tr>' }
		if ( pictures[ictr][0] == 'f5_260101' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #000000;" id = "mprphEze"	onclick="getSummaryClick(event, \'mprphDan\')" >'	+ '<w>Ezekiel	</td></tr>' }
		if ( pictures[ictr][0] == 'f5_270101' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #000000;" id = "mprphDan"	onclick="getSummaryClick(event, \'mprphHos\')" >'	+ '<w>Daniel	</td></tr>' }
		if ( pictures[ictr][0] == 'fm_280104' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #ffffff;" id = "mprphHos"	onclick="getSummaryClick(event, \'mnewtMatt\')" >'	+ '<w>MinorPrp</w></td></tr>' }

		if ( pictures[ictr][0] == 'ng_410104' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #ffffff;" id = "mnewtMark"	onclick="getSummaryClick(event, \'mnewtLuke\')" title = "Mark" >'		+ '<w>Mark		</w></div></td></tr>' }
		if ( pictures[ictr][0] == 'ng_420105' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #ffffff;" id = "mnewtLuke"	onclick="getSummaryClick(event, \'mnewtJohn\')" title = "Luke" >'		+ '<w>Luke		</w></div></td></tr>' }
		if ( pictures[ictr][0] == 'ng_430101' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #ffffff;" id = "mnewtJohn"	onclick="getSummaryClick(event, \'mnewtActs\')" title = "John" >'		+ '<w>John		</w></div></td></tr>' }
		if ( pictures[ictr][0] == 'na_440827' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #ffffff;" id = "mnewtActs"	onclick="getSummaryClick(event, \'mnewtPaul\')" title = "Acts" >'		+ '<w>Acts		</w></div></td></tr>' }
		if ( pictures[ictr][0] == 'np_450107' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #ffffff;" id = "mnewtPaul"	onclick="getSummaryClick(event, \'mnewtGenr\')" title = "Pauline" >'	+ '<w>Pauline	</w></div></td></tr>' }
		if ( pictures[ictr][0] == 'ne_580107' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #ffffff;" id = "mnewtGenr"	onclick="getSummaryClick(event, \'mnewtRev\')" title = "General" >'		+ '<w>General	</w></div></td></tr>' }
		if ( pictures[ictr][0] == 'nr_660104' ) { txt += '<tr><td><div ' + tempStyleBnnr + 'color: #ffffff;" id = "mnewtRev"	onclick="getSummaryClick(event, \'mxtraGspl\')" title = "Revelation" >'	+ '<w>Revelation</w></div></td></tr>' }
	}
	catch (error) { console.info( "ERROR: " + error.message + ' / ictr: ' + ictr); }

	return txt
}

function showImg( item ) {

		 if ( item == 'b' ) { imgCtr = 0; }
	else if ( item == 'v' ) { imgCtr = imgCtr - btnAdvance; if ( imgCtr < 0 ) { imgCtr = 0; } }
	else if ( item == '-' ) { if ( imgCtr > 0 ) { imgCtr--; } }
	else if ( item == '+' ) { if ( imgCtr < imgLen ) { imgCtr++; } }
	else if ( item == '^' ) { imgCtr = imgCtr + btnAdvance; if ( imgCtr > imgLen) { imgCtr = imgLen-1; } }
	else if ( item == 'f' ) { imgCtr = imgLen-1; }
	else {
		if ( item > imgLen ) { item = imgLen - 1; }
		imgCtr = Number( item ) ;
	}

	// process
	const imgName = pictures[ imgCtr ][1];

	// handle duplicates
	let tmpImg = pictures[imgCtr][2]
	if( tmpImg == '' ) { imgFile = folder + imgName + ext } else {

		let ictrDupe = pictures.findIndex(pic => pic[0] === tmpImg )
		imgFile = folder + pictures[ictrDupe][1] + ext
	}
	// alert( `item: ${item}, imgCtr: ${imgCtr}, imgName: ${imgName}` );

	let imgCode = pictures[ imgCtr ][0];
	if ( imgCode.startsWith('cal') ) { imgFile = folder + 'xtra/' + imgName + ext; }

	if (document.getElementById('divimg')==null) { console.log('expecting item selection links'); } else {

		// note: these lines would fail if item selection links were presented
		document.getElementById('divimg').innerHTML = '<img id = "piximg" class = "imgmain" src = "'
			+ imgFile + '" />';
		document.getElementById('divtxt').innerHTML = showTxt( imgCtr ); // must come before calc to increment txtCtr
		document.getElementById('divtxt').scrollTop = 0;

		const txtDon = imgLen-txtCtr;
		const percDone = ( ( txtDon / imgLen ) * 100.0 ).toFixed(1);
		const percSequ = Math.round( (imgCtr+1) / imgLen * 100.0 );
		const byline = 'completed: ' + txtDon + ' ('+ percDone + '%) + ' + (imgLen-txtDon) + ' = ' + imgLen + ', '
				+ 'imgSeq: ' + (imgCtr+1) + ' (' + percSequ + '%) of ' + imgLen ;

		if (imgCtr == 0 ) { document.getElementById( 'mlawsGen' ).scrollIntoView(true); } else {
		document.getElementById( imgCtr ).scrollIntoView(true); }
		document.getElementById( 'idEntry' ).value = '';
	}
	document.getElementById('tdsImg').title = txtDescription[0];
}

function showTxt( imgCtr ) {

	imgCtr = Number( imgCtr );
	txtCtr = 0;
	let ictrDupe = 0;
	let imgCode = pictures[ imgCtr ][0];
	let imgName = pictures[ imgCtr ][1];
	let imgDupe = pictures[ imgCtr ][2];
	let imgRefr = '';
	const samplePre = '<span style = "color: silver;" >sample data only! [ ';
	const samplePst = ' ]</span>';

	let tctr = 0;
	let tempCtr = 0;
	let imgNarr = '';
	let reference = '';

	// code, reference, verse, lable, description, significance
	let itemName = '(' + (imgCtr+1) + ') ' + samplePre + '' + samplePst;
	let refs = samplePre + getUtilTxt( 20, 1) + samplePst;
	let verse= samplePre + getUtilTxt(100, 1) + samplePst;
	let label= samplePre + getUtilTxt( 40, 2) + samplePst;
	let descr= samplePre + getUtilTxt(200, 2) + samplePst;
	let sig = samplePre + getUtilTxt(100, 3) + samplePst;

	for( ; tctr < txtItem.length; tctr++ ) {

		let txtCode = txtItem[ tctr ][0];

		// handle duplicate
		if( imgDupe == '' ) { } else {

			ictrDupe = pictures.findIndex(pic => pic[0] === imgDupe )
			imgCode = pictures[ ictrDupe ][0];
			imgRefr = pictures[ ictrDupe ][1];
		}
		tempCtr = tctr
		if( imgDupe == '' ) { } else { tempCtr = imgCtr }

		if ( txtCode == imgCode ) {

			itemName = '(' + (imgCtr+1) + ') ' + imgName.replaceAll('_', ' ') ;

			// reference
			if ( txtItem[ tctr ][ 1 ] == '' ) { } else {

				if( imgDupe == '' )
				{ reference = getReferenceLnk( linkBBL, txtItem[ tempCtr ][ 1 ] ) } else
				{
					// add duplicate crossReference
					let bookChap=''
					let bookVers=''

					let bookNumb = pictures[imgCtr][0].slice(3,5)
					let bookNam = books[ Number( bookNumb.trim() ) - 1 ]

					if( bookNumb == 19 ) {
						bookChap = pictures[imgCtr][0].slice(5,8)
						bookVers = pictures[imgCtr][0].slice(8,10)
					} else {
						bookChap = pictures[imgCtr][0].slice(5,7)
						bookVers = pictures[imgCtr][0].slice(7,9)
					}

					let bookLnk = bookNumb + ' ' + bookNam + bookChap + ':' + bookVers

					let nameBlankIndex = pictures[ ictrDupe ][1].indexOf('_', 4) + 1;

					itemName = '(' + (imgCtr+1) + ') ' + bookLnk.replaceAll(':','') + ' '
						+ pictures[ ictrDupe ][1].substring(nameBlankIndex)

					itemName = itemName.replaceAll('_', ' ')

					imgRefr = pictures[ ictrDupe ][1].substring(0, nameBlankIndex - 1)

					reference = getReferenceLnk( linkBBL, bookLnk )

					reference = reference + '<br />'
						+ '<z onclick = "window.open(\'bpod.html?itm=' + imgCode + '\', \'_parent\');" >'
						+ '<b>This item has a matching reference</b>. '
						+ '<br />The rest of this article is taken from the reference for <b>' + imgRefr + '</b>.</z>'
				}
			}
			if ( txtItem[ tctr ][ 2 ] == '' ) { } else { verse = txtItem[ tctr ][ 2 ] }
			if ( txtItem[ tctr ][ 3 ] == '' ) { } else { label = '<b>' + txtItem[ tctr ][ 3 ] + '</b>' ; }
			if ( txtItem[ tctr ][ 4 ] == '' ) { } else { descr = txtItem[ tctr ][ 4 ] }
			if ( txtItem[ tctr ][ 5 ] == '' ) { } else { sig = txtItem[ tctr ][ 5 ]; }
		}

		if ( txtItem[ tctr ][ 5 ] == '' ) { txtCtr++; }
	}

	imgNarr = showTxtLines( itemName, reference, verse, label, descr, sig )
	return imgNarr;
}

function showTxtLines( itemName, reference, verse, label, descr, sig ) {

	let txtOptions = '';
	let txtDisplay = '';
	if (isShowMore) { txtOptions = '[ SHOW LESS ]' } else { txtOptions = '[ SHOW MORE ]'}
	if (isShowMore) { txtDisplay = 'inline' } else { txtDisplay = 'none'}

	let imgNarr = ''

		+ '<b>item:			</b> '	+ '<span class = "text-white" >' + itemName	+ '</span><br /><br />'
		+ '<b>reference:	</b> '	+ '<span class = "text-white" >' + reference+ '</span><br /><br />'
		+ '<b>verse:		</b> '	+ '<span class = "text-info" >' + verse	+ '</span><br /><br />'
		+ '<b>label:		</b> '	+ '<span class = "text-white" >' + label 	+ '</span><br /><br />'
		+ '<b>description:	</b> '	+ '<a id = "descLink" class = "link-light" onclick = "showLessMore()" '
			+ 'title = "You can toggle between MORE or LESS detail!"' + '>' + txtOptions + '</a>'
			+ '<span class = "text-gray" id = "descText" style = "display: ' + txtDisplay + ';" ><br /><br />' + descr	+ '</span><br /><br />'
		+ '<b>significance: </b> '	+ '<span class = "text-info" >' + sig 		+ '</span><br /><br />' ;

	return imgNarr;
}

function searchTxt( query, parm ) {

	/*
		Notes:

		Use 'murex' is a good single return, 'david' 'marduk', etc. return more.
		To avoid an empty selection for onclick, the pointer must be poistioned in the center of the button.

		The searchTxt ONLY searches the description field!
		The searchTxt parms: 0 - 5 are for: 0:index, 1:ref, 2:verse, 3:label, 4:desc, 5:sig.
		alert(query + ' | ' + parm);
	*/
	let results = []
	let verses = []
	let sctr = 0
	let ictrDupe = ''
	let descItem = ''
	let searchItem = query.toUpperCase()
	if (parm == null || parm == '') { parm = 4 }

	for ( let tctr = 0; tctr < pictures.length; tctr++ ) {	// load the matches

		let picIndex = pictures[tctr][0]
		ictrDupe = txtItem.findIndex(pic => pic[0] === picIndex )

		if (ictrDupe != null && ictrDupe > 0) {

			descItem = txtItem[ictrDupe][ parm ].toUpperCase()

			if ( descItem.includes( searchItem ) ) {

				results[sctr] = ictrDupe
				verses[sctr] = txtItem[ictrDupe]
				++sctr
			}
		}
	}
	if (results.length == 0) { // nothing found!

		alert('Query: "' + query + '" not found with this spelling!');
	}
	if (results.length == 1) { // one thing found! ( murex )

		// convert back to picture list value:
		let pictureValue = pictures.findIndex(pic => pic[0] === txtItem[ results[0] ][0] )
		showImg(pictureValue); // always show first selection choice in list
	}
	if (results.length > 1) { // more than one! ( Sharuhen, Siamun )

		let txtLines = 'There are ' + (verses.length-1) + ' references to (' + query + '):'
			+ '<div height: calc(99vh - 145px); overflow: auto;">'
			+ '<table style = "width: 100%; font-size: 12pt; background-color: rgba(0,0,0, 0.7);" >';
		let titleCtr = 0;
		const maxRef = 22;
		const maxLbl = 50;
		verses.forEach( ( verse ) => {

			let verseRefs = verse[1]; if (verse[1].length > maxRef) { verseRefs = verse[1].substr(0, maxRef); }
			let verseLabl = verse[3]; if (verse[3].length > maxLbl)	{ verseLabl = verse[3].substr(0, maxLbl); }

			let imgName = pictures.find(pic => pic[0]===verse[0] )[1];
			let imgFile = '<img class = "imgsearch" '
				+ 'src = "' + folder + 'xtra/' + imgName + '_t' + ext + '" '
				+ 'title = "' + (titleCtr+1) + ' | ' + imgName + '"'
				+ ' /> ';

			txtLines += '<tr>'
				+ '<td>' + (++titleCtr).toString().padStart(2, '0') + '</td>'
				+ '<td style = "white-space: nowrap;" >' + verseRefs + '</td>'
				+ '<td><a class = "smllink" target = "_parent" href = "bpod.html?itm=' + verse[0] + '" >'
					+ imgFile
					+ verseLabl
					+ '</a>'
					+ '</td>'
				+ '</tr>';
		});
		txtLines += '</table></div>';
		document.getElementById('tdsImg').innerHTML = txtLines;
	}
}

function msrLocate( ) {

	let msrEvent = window.event;
	let msrHV = msrEvent.clientY - 70;

	let tdsMsr = document.getElementById('tdsMsr'); // tdsMsr divmsr
	let imgHV = tdsMsr.offsetHeight - 10 ;
	let msrLoc = Math.floor( ( msrHV / imgHV ) * imgLen );

	showImg( msrLoc )
	getSummary( )
}

function getSummary( ) {

	let tempColor = '#4040f0';
	let tempColorIcons = '#4040f0';
	let tempClass = '';
	let tempStyleBord = '';
	let tempStyleBThk = '2';
	let tempStyleBnnr = '';
	let imgFile = '';
	let imgTitl = '';
	let ictr = 0;
	let tempBool = false;

	let txt = '<div class = "icosumm"><table><tr><td>';

	// build summary
	for ( ; ictr < imgLen; ictr++ ) {

		imgName = pictures[ictr][1]
		tempClass = '';

		// handle duplicates
		let tmpImg = pictures[ictr][2]
		if( tmpImg == '' ) { imgFile = folder + 'xtra/' + imgName + '_t' + ext }
		else {

			let ictrDupe = pictures.findIndex(pic => pic[0] === tmpImg )
			imgFile = folder + 'xtra/' + pictures[ictrDupe][1] + '_t' + ext

			let bookChap = ''
			let bookVers = ''

			let bookNumb = pictures[ictr][0].slice(3,5)
			let bookNam = books[ Number( bookNumb.trim() ) - 1 ]
			let sndDash = pictures[ictrDupe][1].indexOf('_', 3 )

			if( bookNumb == 19 ) {
				bookChap = pictures[ictr][0].slice(5,8)
				bookVers = pictures[ictr][0].slice(8,10)
			} else {
				bookChap = pictures[ictr][0].slice(5,7)
				bookVers = pictures[ictr][0].slice(7,9)
			}

			let artifact = pictures[ictrDupe][1].substring(sndDash)
			imgName = + bookNumb + '_' + bookNam + bookChap + bookVers + artifact
			tempClass = ' dupe';
		}

		// get the relative color
		let fct = Math.round( ictr * ( 255 / imgLen ) );
		tempColor = sumRainbow( fct ) ;

		// set the border color yellow for selected item
		if ( ictr == bpod ) { tempClass = ' slct' }

		// set the border color white if no significance
		// if ( txtItem[ictr][5] == "" ) { tempColor = '#000000'; if ( tempBool == false ) { tempBool = true } }

		tempStyleBord = 'style = "border: ' + tempStyleBThk + 'px solid ' + tempColor + ';" ';
		tempStyleBnnr = 'style = "color: #000000; background: ' + tempColor + ';" ';

		// set the primary division
		txt = getSummaryDivision( txt, pictures, ictr, tempStyleBnnr, tempColor )

		// main collection!
		txt += ''
			+ '<img class = "img-thumbnail' + tempClass + '" '
			+ 'id = "t' + ictr + '" '
			+ tempStyleBord
			+ 'onclick = "showImg(' + ictr + ')" '
			+ 'title = "' + imgName + ' / ' + fct + ' / ' + ( ictr+1 ) + '" '
			+ 'src = "' + imgFile + '" />';
	}

	txt += '</td></tr></table></div></center>';

	document.getElementById( 'divimg' ).innerHTML = txt;
	if ( imgCtr < 10) { document.getElementById( 'mlawsGen' ).scrollIntoView(true); } else {
	document.getElementById( 't' + imgCtr ).scrollIntoView(true); }
}

function getSummaryDivision( txt, pictures, ictr, tempStyleBnnr, tempColor ) { // divisions

	try {

		if ( pictures[ictr][0] == 'l1_010101' ) { txt += '<h3 ' + tempStyleBnnr + 'id = "slawsGen" '  + 'onclick="getSummaryClick(event, \'slawsExo\')" '	+ 'title = "Genesis - Deuteronomy (05 books, 187 chapters)" >'	+ '<w>&nbsp;LAW: Gen ( בְּרֵאשִׁית‎ ), Exo, Lev, Num, Deu</w></h3>'; }
		if ( pictures[ictr][0] == 'h1_060101' ) { txt += '<h3 ' + tempStyleBnnr + 'id = "shistJosh" ' + 'onclick="getSummaryClick(event, \'shist1Sam\')" '	+ 'title = "Joshua - Esther (12 books, 249 chapters)" >' 		+ '&nbsp;HISTORY: Josh, Judg, Ruth... to Esther</h3>'; }
		if ( pictures[ictr][0] == 'pt_180101' ) { txt += '<h3 ' + tempStyleBnnr + 'id = "spoetJob" '  + 'onclick="getSummaryClick(event, \'sprphPsa\')" '	+ 'title = "Job - SongOfSolomon (05 books, 243 chapters)" >'	+ '&nbsp;POETRY: Job, Psa, Pro, Ecc, SOS</h3>'; }
		if ( pictures[ictr][0] == 'f5_230101' ) { txt += '<h3 ' + tempStyleBnnr + 'id = "sprphIsa" '  + 'onclick="getSummaryClick(event, \'sprphJer\')" '	+ 'title = "Isaiah - Malachi (17 books, 250 chapters)" >'		+ '&nbsp;PROPHETS: Isa, Jer, Lam, Eze, Dan, the 12</h3>'; }
		if ( pictures[ictr][0] == 'ng_400101' ) { txt += '<h3 ' + tempStyleBnnr + 'id = "snewtMatt" ' + 'onclick="getSummaryClick(event, \'snewtMark\')" '	+ 'title = "Matt - Rev (27 books, 260 chapters)" >'				+ '<w>&nbsp;NEW_TESTAMENT: Matthew (Ματθαιον)... to Rev</w></h3>'; }
		if ( pictures[ictr][0] == 'gospel'	)	{ txt += '<h3 ' + tempStyleBnnr + 'id = "sxtraGspl" ' + 'onclick="getSummaryClick(event, \'slawsGen\')" '	+ 'title = "extra" >'											+ '<w>&nbsp;Gospel: 4 Spiritual Laws!</w></h3>'; }

		// set any secondary division; unfortunately this solution demands coordinating indexes
		tempStyleBnnr = 'style = "text-align: right; color: #000000; background: ' + tempColor + ';" ';
		if ( pictures[ictr][0] == 'l2_020108' ) { txt += '<h6 id = "slawsExo" '		+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'slawsLev\')" >'	+ 'Exodus ( Shemot, שְׁמוֹת	)				</h6>' }
		if ( pictures[ictr][0] == 'l3_030101' ) { txt += '<h6 id = "slawsLev" '		+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'slawsNum\')" >'	+ 'Leviticus ( Wayiqra, וַיִּקְרָא )				</h6>' }
		if ( pictures[ictr][0] == 'l4_040623' ) { txt += '<h6 id = "slawsNum" '		+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'slawsDeu\')" >'	+ 'Numbers ( Bemidbar, בְּמִדְבַּר 	)			</h6>' }
		if ( pictures[ictr][0] == 'l5_050102' ) { txt += '<h6 id = "slawsDeu" '		+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'shistJosh\')" >'	+ 'Deuteronomy ( Devarim, דְּבָרִים	)			</h6>' }
		if ( pictures[ictr][0] == 'h4_090119' ) { txt += '<h6 id = "shist1Sam" ' 	+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'shist2Sam\')" >'	+ '1Sam = Samuel > Saul > David				</h6>' }
/**/	if ( pictures[ictr][0] == 'h5_100213' ) { txt += '<h6 id = "shist2Sam" ' 	+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'shist1Kin\')" >'	+ '2Sam = 1Chr (David to Sol, Dynastic)		</h6>' }
		if ( pictures[ictr][0] == 'h6_110301' ) { txt += '<h6 id = "shist1Kin" ' 	+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'shist2Kin\')" >'	+ '1Kin = 2Chr 01-20 (Sol to #04 Jeh/Ahab)	</h6>' }
/**/	if ( pictures[ictr][0] == 'h7_120304' ) { txt += '<h6 id = "shist2Kin" ' 	+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'shist2K18\')" >'	+ '2Kin = 2Chr 21-36 (ch 17: Ahaz) to Neb	</h6>' }
/**/	if ( pictures[ictr][0] == 'h8_121801' ) { txt += '<h6 id = "shist2K18" ' 	+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'shist1Chr\')" >'	+ '2Kin 18 continues with Kingdom of Judah	</h6>' }
		if ( pictures[ictr][0] == 'h9_130318' ) { txt += '<h6 id = "shist1Chr" ' 	+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'shist2Chr\')" >'	+ '1Chr = 2Sam  (David to Sol, Political)	</h6>' }
/**/	if ( pictures[ictr][0] == 'h0_140402' ) { txt += '<h6 id = "shist2Chr" ' 	+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'shistEzr\')" >'	+ '2Chr 01-20 = 1Kin | 2Chr 21-36 = 2Kin	</h6>' }
		if ( pictures[ictr][0] == 'he_150101' ) { txt += '<h6 id = "shistEzr" '		+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'spoetJob\' )" >'	+ 'Ezra, Nehemiah, Esther					</h6>' }

		if ( pictures[ictr][0] == 'pt_1900206') { txt += '<h6 id = "sprphPsa" '		+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'sprphPro\' )" >'	+ 'Psalms!									</h6>' }
		if ( pictures[ictr][0] == 'pt_201001' ) { txt += '<h6 id = "sprphPro" '		+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'sprphIsa\' )" >'	+ 'Proverbs, Ecc, SOS						</h6>' }

		if ( pictures[ictr][0] == 'f5_240216' ) { txt += '<h6 id = "sprphJer" '		+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'sprphEze\' )" >'	+ '<w>Jeremiah							</w></h6>' }
		if ( pictures[ictr][0] == 'f5_260101' ) { txt += '<h6 id = "sprphEze" '		+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'sprphDan\' )" >'	+ '<w>Ezekiel							</w></h6>' }
		if ( pictures[ictr][0] == 'f5_270101' ) { txt += '<h6 id = "sprphDan" '		+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'sprphHos\' )" >'	+ '<w>Daniel							</w></h6>' }
		if ( pictures[ictr][0] == 'fm_280104' ) { txt += '<h6 id = "sprphHos" '		+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'snewtMatt\' )" >'	+ '<w>12 Minor Prophets / Hosea			</w></h6>' }

		if ( pictures[ictr][0] == 'ng_410104' ) { txt += '<h6 id = "snewtMark" '	+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'snewtLuke\')" >'	+ '<w>Mark / Μαρκον						</w></h6>' }
		if ( pictures[ictr][0] == 'ng_420105' ) { txt += '<h6 id = "snewtLuke" '	+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'snewtJohn\')" >'	+ '<w>Luke / Λουκαν 					</w></h6>' }
		if ( pictures[ictr][0] == 'ng_430101' ) { txt += '<h6 id = "snewtJohn" '	+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'snewtActs\')" >'	+ '<w>John / Ιωαννην 					</w></h6>' }
		if ( pictures[ictr][0] == 'na_440827' ) { txt += '<h6 id = "snewtActs" '	+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'snewtPaul\')" >'	+ '<w>Acts of the Apostles				</w></h6>' }
		if ( pictures[ictr][0] == 'np_450107' ) { txt += '<h6 id = "snewtPaul" '	+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'snewtGenr\')" >'	+ '<w>Pauline Epistles (Rom to Philemon)</w></h6>' }
		if ( pictures[ictr][0] == 'ne_580107' ) { txt += '<h6 id = "snewtGenr" '	+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'snewtRev\' )" >'	+ '<w>General Epistles (Heb +)			</w></h6>' }
		if ( pictures[ictr][0] == 'nr_660104' ) { txt += '<h6 id = "snewtRev" '		+ tempStyleBnnr + 'onclick="getSummaryClick(event, \'sxtraGspl\' )" >'	+ '<w>Revelation!						</w></h6>' }
	}
	catch (error) { console.info( "ERROR: " + error.message + ' / ictr: ' + ictr); }

	return txt
}

function getSummaryClick( event, item ) {

	let barClk = event.clientX
	let winWid = window.innerWidth

	document.location= '#' + item
	document.getElementById( item ).scrollIntoView(true)
	return false;
}

function getStretch( ) {

	let piximg = document.getElementById('piximg');
	let tdsImg = document.getElementById('tdsImg');

	let pxw = piximg.width		+' px'; let pxh = piximg.height			+ 'px';
	let tdw = tdsImg.offsetWidth+' px'; let tdh = tdsImg.offsetHeight	+ 'px';
	let msg = '' + flgProport;

	if (flgProport == 0 )
	{ piximg.style.width ='auto'; piximg.style.height = tdh; flgProport = 1; } else
	{ piximg.style.width ='100%'; piximg.style.height = tdh; flgProport = 0; }

	let pnw = piximg.width	+ 'px'; let pnh = piximg.height + 'px';

		msg += ' | frame: ' + tdw + ',' + tdh
		msg += ' | before: ' + pxw + ',' + pxh;
		msg += ' | after: ' + pnw + ',' + pnh

	// document.getElementById('divlbl').innerHTML = msg;
}

// utils
function sumRainbow(ictr) {
	ictr = ictr * 320 / 255; colors = 'hsl( ' + ictr + ', 100%, 50% )'; return colors; 
}

function popupNote( anyNotes ) {

	let wdth = 550 , hght = 550 ;
	let popX = window.screenX + ( window.innerWidth /2 ) - ( wdth/2 );
	let popY = window.screenY + ( window.innerHeight/2 ) - ( hght/2 );
	let varName = (new Date( )).toISOString();
	let varOpts = 'scrollbars=1, resizable=1, menubar=0, location=0, directories=0, toolbar=0, status=0' ;
	let varStrg = 'width=' + wdth + ' , height=' + hght + ' , top=' + popY + ' , left=' + popX + ' , ' + varOpts ;
	let varWindow;
	//
	if( !varWindow || varWindow.closed || typeof varWindow.closed=='undefined' ) { } else
	{ varWindow.self.close( ) ; }
	varWindow = window.open( '' , 'popupNote' , varStrg , false ) ;
	varWindow.document.writeln( '<html><head><title>MLG</title>' ) ;
	varWindow.document.writeln( '<link rel = "StyleSheet" href = "basics.css?v=' + Date.now() + '" type = "text/css" />' ) ;
	varWindow.document.writeln( '</head>' ) ;

	varWindow.document.writeln( '<body><center><button class = "btnChld" onclick = "window.self.close( )">CLOSE</button><br />' ) ; // onmouseout = "window.self.close( )" onmouseover
	varWindow.document.writeln( '' + anyNotes + '') ;
	varWindow.document.writeln( '<button class = "btnChld" onclick = "window.self.close( )">CLOSE</button>' );
	varWindow.document.writeln( '</center></body</html>' ) ;
	varWindow.self.focus( ) ;
	return ;
}

function getReferenceLnk( linkBBL, txtItemVerse ) {

	let referenceLnk = '';
	let bibleSpkr = '';
	let bibleHref = '';
	let txtItemPass = txtItemVerse.substring(3);
	let txtItemBook = txtItemPass.substring( 0, txtItemPass.indexOf(' ') );
	let txtItemChap = txtItemPass.substring( txtItemBook.length + 1, txtItemPass.indexOf(':') );
	let txtItemVrse = txtItemPass.substring( txtItemPass.indexOf(':') + 1 );

	if ( linkBBL.includes('biblegateway') ) { bibleHref = linkBBL + txtItemVerse.substring(3); }
	if ( linkBBL.includes( 'blueletter' ) ) { bibleHref = linkBBL + txtItemBook + '/' + txtItemChap + '/' + txtItemVrse; }

	bibleSpkr = linkAUD + txtItemBook + '.' + txtItemChap + '.' + txtItemVrse;

	referenceLnk = '<a class = "linkTxt" target = "_blank" href = "' + bibleHref + '" >' + txtItemVerse + '</a>'
		+ '&nbsp;&nbsp;'
		+ '<img title = "audio bible" style = "width: 20px; height: 20px; padding: 0px; margin: 0px;" '
		+ 'src = "./images/speaker.png" onclick = "location.href=\'' + bibleSpkr + '\';" />';

	return referenceLnk;
}

function getUtilDayInYear( now ) {

	if (now == null) { now = new Date(); }
	var start = new Date(now.getFullYear(), 0, 0);
	var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
	var oneDay = 1000 * 60 * 60 * 24;
	var day = Math.floor(diff / oneDay);

	// Math.floor( Math.random() * imgLen ) ; // 0;
	// day = (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;

	// failed on 12/31 due to original bpod calculation
	console.log( 'day calculated as: ' + day );
	if ( day > 365) { day = 365; } // double check for 12/31

	return day;
}

function getUtilPad( number , width , symbol ) {
	//
	symbol = symbol || '0';
	width = width || 3;
	number = number + '';
	return number.length >= width ? number: new Array( width - number.length + 1 ).join( symbol ) + number;
}

function getUtilTxt( lenRnd, typRnd ) {

	let charList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	if( typRnd == 1 ) { charList = 'א‎ב‎ג‎ד‎ה‎ו‎ז‎ח‎ט‎י‎כ‎ך‎ל‎מ‎נ‎ס‎ע‎פ‎צ‎ק‎ר‎ש‎ת‎ם‎ן‎ף‎ץ'; }
	if( typRnd == 2 ) { charList = 'ABΓΔEΖHΘIKΛMNΞOΠPΣTΥΦXΨΩαβγδεζηθικλμνξoπρσςτυφχψω'; }
	if( typRnd == 3 ) { charList = '你好我的名字是乔治马丁我是美国人我来自俄亥俄州我住在俄亥俄州哥伦布市你从哪来你来自哪个城市这个城市在哪个州我结婚了我的妻子是玛丽我们的儿子叫塞缪尔'; }

	const charLen = charList.length;

	let txtLines = '';
	let cctr = 0;
	let tctr = 0;
	let sctr = 0;

	while ( cctr < lenRnd ) {

		txtLines += charList.charAt( Math.floor(Math.random() * charLen) );
		tctr = Math.floor(Math.random() * 10 );

		if (sctr > tctr) { sctr = 0; txtLines += ' '; }
		cctr++; sctr++;
	}
	return txtLines.toLowerCase();
}

function getTimeIsoOffset( ) {

	let tzOffset = (new Date()).getTimezoneOffset() * 60000;
	let isoOffset = (new Date(Date.now() - tzOffset)).toISOString().slice(0, -1)
	return isoOffset;
}

function showLessMore() {

	var descText = document.getElementById("descText");
	var descLink = document.getElementById("descLink");
	if (isShowMore) // val.textContent || val.innerText
	{ isShowMore = false; descText.style.display = 'inline'; descLink.innerText = '[ SHOW LESS ]'; } else
	{ isShowMore = true ; descText.style.display = 'none'  ; descLink.innerText = '[ SHOW MORE ]'; }
}

function includeHTML() {
	// https://www.w3schools.com/howto/howto_html_include.asp
	var z, i, elmnt, file, xhttp;
	/* Loop through a collection of all HTML elements: */
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute("w3-include-html");
		if (file) {
			/* Make an HTTP request using the attribute value as the file name: */
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {elmnt.innerHTML = this.responseText;}
					if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
					/* Remove the attribute, and call this function once more: */
					elmnt.removeAttribute("w3-include-html");
					includeHTML();
				}
			}
			xhttp.open("GET", file, true);
			xhttp.send();
			/* Exit the function: */
			return;
		}
	}
}

//----
