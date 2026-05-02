// 5Personal/Technology/mamgeorge/3service/bpod_txtpossible.js

/* format			(for each article) <br />• ► ’ ░ ▒ ▓ █ ■ ▄ ▌ ▐ ▀ │ ─ ║ ═ 🔵

	// ©2021, 2025 Martin George , All rights reserved.
	// concepts to add: Lachish_Ostraca, Psalm locations, Newt People

	Notes:

		* duplicates need only be registered in "bpod_img.js"
			a reference is included in comments here in sources of "bpod_txt.js" and "bpod_img.js"

		* if new data entries separate menu and summary devisions, code items must replace indexes in:
			"bpod_ctrl.js" getMenuDivision() getSummaryDivision()

		* create 100x100 jpg icon thumbnails
			append '_t' to jpg file name
			in "3service/bpod_img.js"
			example: 11_1Kin1520_CeramicHead_AbelBethMaacah_t.jpg

			possible software: XnConvert (download), ImageMagick (shell), Gimp (linux), Lunapic (web), Canva (web), BatchIco (paid)

	labels:

		1 code			used to control image selections (hidden)
		2 item			an ordered code for the images
		3 reference		verse number relating to image
		4 verse			verse text
		5 label			high lever description of image
		6 description	(see below)
		7 significance	(see below)

	description: overall, linguistic, historical, biblical, related

		1 overall description: when, where, what, who, why

		2 linguistic detail, if any

		3 historical context

			• outside range to specific date of item, location, person
			• historical connection
			• impact synchronism (era, range), and or tables to scope
			• find history, provenance, current location
				<br /><br /><b>A brief history of CITY</b>: \
				<fieldset class = "boxpad"><quote> \
				</quote></fieldset> \

			• biblical context: synchronism date, location, king, or event

				parent:
				<z onclick = "window.open(\'bpod.html?itm=l0_010101\', \'_parent\');" > \
					Click here for related note in Gen 01:01.</z> \

			• related: includes 1st reference, total references, and next major references "See also:"

				images:
				a class = "smllink" target = "_blank" href = "images_bible/added/01_Gen0101_xxxx.jpg" > \
					Click here for another image.</a> \

				links:
				<a class = "smllink" target = "_blank" href = "https://www.bible.ca"> \
					Click here for more.</a>

			• See also: 1st verse, major verses! Use "/" to represent duplicates & parallels

	significance: summary or point and purpose of item
*/
/* references		(links, Sources, groupings)

	links: see BPOD Help > Articles > Description & Sources

		• IBW Amarna_Tablets	"https://www.bible.ca/archeology/bible-archeology-maps-conquest-amarna-tablets-letters-akhenaten-habiru-abiru-hebrews-1404-1340bc.htm"
		• IBW Assyria List		"https://www.bible.ca/manuscripts/bible-archeology-Shalmaneser-III-Assyria-inscriptions-annals-Ahab-Jehu-Omri-Hazael-Ben-Hadad-II-858-824BC.htm"
		• IBW Assyria Kings		"https://www.bible.ca/manuscripts/bible-inscriptions-archeology-Adad-Nirari-III-assyrian-kings-list-Samsi-Adad-V-Shalmaneser-III-Ashurnasirpal-II-Tukulti-Ninurta-I-Genealogical-door-sill-Calah-Nimrod-804bc.htm"
		• IBW Bulla List		"https://www.bible.ca/bulla/#exhibit"
		• IBW Judges List		"https://www.bible.ca/archeology/bible-archeology-exodus-route-date-chronology-of-judges.htm"
		• IBW Israel/Judah List	"https://www.bible.ca/archeology/bible-archeology-maps-timeline-chronology-kings-prophets-assyrians-babylonians-egyptians-tisri-nisan-inclusive-accession-reckoning-divided-kingdom-dates-931-587bc.htm"
		• IBW Egypt King List	"https://www.bible.ca/archeology/bible-archeology-exodus-date-1440bc.htm"
		• IBW Captivity			"https://www.bible.ca/archeology/bible-archeology-Egyptian-Pharaohs-kings-Psammetichus-I-Neco-II-Psamtik-II-Hophra-Apries-babylonian-captivity-Nebuchadnezzar-Josiah-Zedekiah-664-570BC.htm"
		• IBW Zedekiah			"https://www.bible.ca/archeology/bible-archeology-Zedekiah-Matteniah-last-king-of-judah-seal-bulla-cave-597-587bc"

		• Assyria, in Books		"https://archive.org/details/LuckenbillAncientRecordsAssyria01"
		• Assyria abbreviations	"https://cdli.ox.ac.uk/wiki/doku.php?id=abbreviations_for_assyriology"

		• Babylon Chronicles	"https://www.livius.org/sources/content/mesopotamian-chronicles-content/"
		• Babylon Nebchadnezzar	"https://oracc.museum.upenn.edu/ribo/babylon7?zoom=4"
		• Babylon Neb ABC5		"https://www.mesopotamiangods.com/early-years-of-nebuchadnezzar-abc-5/"
		• Babylon ARMEP			"https://www.armep.gwi.uni-muenchen.de/#home"
		• Egypt Amarna, List	"https://oracc.museum.upenn.edu/aemw/amarna/pager"
		• Egypt Amarna, Text	"https://archive.org/stream/TheAmarnaLetters/The%20Amarna%20Letters_djvu.txt"
		• Egypt Amarna, Book	"https://ia601203.us.archive.org/12/items/TheAmarnaLetters"
		• Egypt Papyri			"https://en.wikipedia.org/wiki/List_of_papyri_from_ancient_Egypt"
		• Egypt PN_MKEK			"https://pnm.uni-mainz.de/5/inscriptions"

		• Israel places			"https://biblical-archaeology.org/en/"

	groupings (MLG, Bulla, BBH, EA, S3_Records, CAI, RIM, BM, Livius)

		• MLG Original List						(see: "//3Ministry/rhetoric/historical/evidences_old.txt")
		• IBW Bulla List						(see: "//3Ministry/rhetoric/historical/apolo_history.txt")
		• BBH, BAOM								(see: "//3Ministry/rhetoric/historical/BBH_summary.txt")
		• Amarna_Tablets (EA)					(see: "//5Personal/History/notes/2afr_Egypt_Amarna_Tablets.txt")
		• Assyrian S3_Records					(see: "https://www.bible.ca/manuscripts/bible-archeology-Shalmaneser-III-Assyria-inscriptions-annals-Ahab-Jehu-Omri-Hazael-Ben-Hadad-II-858-824BC.htm" )

		• Canaanite & Aramaic Inscriptions		(uses: CIS, KAI, KTU, KI, NSI, NE, TAD, TSSI)
		• Assyrian Inscriptions (RIM, RINAP)	(see: "https://oracc.museum.upenn.edu/rinap")
		• Babylonian Chronicles					(uses ABC, CM, BCHP, BM: "https://en.wikipedia.org/wiki/Babylonian_Chronicles" )
		• Achaemenid Royal Inscriptions			(uses D, X, A, D2, A2, A3; see also: wiki & Livius.org)

		• confirmed persons						"https://www.biblicalarchaeology.org/daily/people-cultures-in-the-bible/people-in-the-bible/50-people-in-the-bible-confirmed-archaeologically"
*/
/* times			(Bronze/Iron: EBA, MBA, LBA, IA, Dynasties)

	-3300 -1200 BC BA Bronze Age

		summary

			-3300 -2100 BC EBA (Early_Bronze_Age)
			-2100 -1550 BC MBA (Middle_Bronze_Age) or IBA (Intermediate Bronze Age)
			-1550 -1200 BC LBA (Late_Bronze_Age)
			-1200 -0550 BC IA (Iron_Age)

		-3300 -2100 BC EBA (Early_Bronze_Age)
			-3300 -3000 BC EBA 1
			-3000 -2700 BC EBA 2
			-2700 -2200 BC EBA 3
			-2200 -2100 BC EBA 4

		-2100 -1550 BC MBA (Middle_Bronze_Age) or IBA (Intermediate Bronze Age)
			-2100 -2000 BC MBA 1
			-2000 -1750 BC MBA 2 A
			-1750 -1650 BC MBA 2 B
			-1650 -1550 BC MBA 2 C

		-1550 -1200 BC LBA (Late_Bronze_Age)
			-1550 -1400 BC LBA 1
			-1400 -1300 BC LBA 2 A
			-1300 -1200 BC LBA 2 B (Late_Bronze_Age collapse!)

	-1200 -0550 BC IA (Iron Age)

		-1200 -1050 BC IA1 (Iron_Age 1)
		-1050 -0850 BC IA2 (Iron_Age 2)
		-0850 -0550 BC IA3 (Iron_Age 3)

	Ancient Egypt Dynasties

		-3150 -2686	EDP | Early_Dynastic Period		Dynasties 1, 2 Unification
		-2686 -2181	OLD | Old Kingdom				Dynasties 3, 4, 5, 6
		-2181 -2055	FIP | 1st Intermediate Period	Dynasties 7, 8, 9, 10
		-2055 -1650	MID | Mid Kingdom				Dynasties 11, 12
		-1650 -1550	SIP | 2nd Intermediate Period	Dynasties 13, 14, 15, 16, 17
		-1550 -1069	NEW | New Kingdom				Dynasties 18, 19, 20
		-1069 -0664	TIP | 3rd Intermediate Period	Dynasties 21, 22, 23, 24, 25, 26
		-0664 -0332	Late| Late_Period				Achaemenid, Assyria, Ptolemy
		-0332 -0030 Ptol| Ptolemaic Kingdom			Annexation by Rome
*/
/* focii & lists	(focii total xx, lists total 44)

	focii ("focus on")

		'12 2Kin 15:19'	// Tiglath_Pileser_3
		'15 Ezra 01:01'	// focus on: Cyrus
		'17 Esth 01:01'	// focus on: Xerxes
		'27 Dan 01:01'	// focus on: Nebuchadnezzar (Jer 21:02?)
		'40 Matt 02:01'	// focus on: Biblical Herods
		'42 Luke 02:01'	// focus on: Augustus

	lists ("lists of")

		01 Gen 01:01	list DeepTime evidences
		01 Gen 02:09	list Worldwide Tree Of Life themes
		01 Gen 06:17	list Worldwide Flood Narratives
		01 Gen 11:01	list Worldwide Babel Narratives
		01 Gen 10:06	list Ancient Egypt
		01 Gen 12:15	list 11th dynasty pharaohs, MID
		01 Gen 41:40	list 12th dynasty pharaohs, MID
		01 Gen 41:54	list Egyptian Famines
		01 Gen 46:27	list SIP to Hyksos
		02 Exo 01:08	list 18th dynasty pharaohs, NEW
		02 Exo 05:01	list Evidences for Thutmose_3
		02 Exo 19:22	list Evidence for Mount_AlLawz
		03 Lev 23:01	list 7 Biblical Feasts
		04 Num 33:01	list Exodus evidences

		06 Josh 01:01	List Contemporaneous Terms
		06 Josh 10:01	List Amarna_Tablets
		06 Josh 10:03	List Cities with LMLK jar handles
		07 Judg 01:26	List NeoHittite Kings
		07 Judg 02:16	List Judges
		07 Judg 03:05	Time Battle of Kadesh
		07 Judg 12:08	List Events of BronzeAge Collapse
		11 1Kin 03:01	List Capitals of the TIP
		11 1Kin 12:01	List Kings during Divided Monarchy (Israel Kings)
		11 1Kin 16:28	List Canaanite Coalition
		11 1Kin 21:08	List 10 Random Seals
		12 2Kin 10:29	List 6 Assyrian Battles
		12 2Kin 10:31	List 10 Assyrian S3 Artifacts
		12 2Kin 15:19	List NeoAssyrian Kings
		12 2Kin 25:22	List Gedaliahs 5
		12 2Kin 25:23	List Gedaliah assassins
		14 2Chr 14:09	List Kushite/Nubian Events
		15 Ezra 08:16	List Judean Governors
		16 Neh 02:19	List Elephantine Papyri Individuals
		16 Neh 12:32	List Lachish_Ostraca Names

		18 Job 40:15	List Worldwide Behemoth/Leviathan
		23 Isa 37:38	List Sennacheribs known children
		24 Jer 36:10	List References to 51 Bulla
		24 Jer 36:26	List References to 250 Bulla
		27 Dan 01:01	List Chaldean Dynasty (Babylon Kings)

		40 Matt 01:01	List Harmony of Gospels
		45 Rom 01:07	List Roman History Events; 13 books 45-57, PaulineEpistles
		58 Heb 01:07	List 09 books 58-66, GeneralEpistles & Rev
		66 Rev 01:04	List 7 Churches
		66 Rev 05:01	List Seals Judgements
		66 Rev 08:02	List Trump Judgements
		66 Rev 16:01	List Bowls Judgements
*/
/* continuing		(duplicating, references, psalms, xtra)

	duplicating: strategy

		2Sam = 1Chr
		1Kin = 2Chr 01-20
		2Kin = 2Chr 21-36
		1Chr = 2Sam
		2Chr = 1Kin & 2Kin (2Chr 21-36)

		History	>> Prophets...
		Gospels	>> M,M,L,J

	references (spelling, attributions, provenance, weighting)

		* spelling check
		* possibly adding backward jumps in divisions

		* citing attributions
		* adding provenance
		* adding objective weighting

	psalms [ 60 added

	#	Psa 001:01					-					pt_1900101, 19_Psa00101_Great_Psalm_Scroll
	*	Psa 002:06, 009:11			Zion				h5_100507, 10_2Sam0507_CityOfDavid, Jerusalem / 32 more
	*	Psa 022:12, 068:22			Bashan				l4_043233, 04_Num3233_Bashan, / 2 more
	#	Psa 028:02					Mount_Moriah		Gen 22:2, 2Chr 3:1, Mount Moriah, Most Holy Place, Dome of the Rock
	*	Psa 029:05, 029:06			Lebanon				l5_050107, 05_Deu0107_Lebanon_Cedars / Beqaa Valley, also Amqu, Amarna_Tablet EA 363 (P270876), 4 more, 64 times: Deu 01:07, Josh 01:04, Psa 29:05, Isa 02:13
	*	Psa 029:08					Kadesh (South)		l5_050102, 05_Deu0102_KadeshBarnea_Arial / cliffs of HaMakhtesh HaKatan in the Zin Desert
	*	Psa 042:06, Psa 029:06		Mount_Hermon		pt_1904206, 19_Psa04206_Mount_Hermon / Mount Mizar, Mount Hermon, Mount Zion, within 5 km of Zaura, Khirbet Mezara, Wadi ZaArah, Tel Dan
	#	Psa 045:09					Ophir				SW Arabia Punt, Sopara, Adulis, Goa, Mahd adh Dhahab, Oman, Poovar, Sofala, Sri Lanka, Sumatra
	*	Psa 045:12, 083:07, 087:04	Tyre				h5_100511 (Hiram) /h6_110501 (Ahiram) /f5_262607 (Tyre) / Josh 19:29, 2Sam 5:11/1Chr14:01, 1Kin 05:01/2Chr 02:03, Neh 13:16, Psa 45:12, Isa 23:1, Jer 25:22, Eze 26:02 / sister city Sidon is NOT in Psalms!
?		Psa 048:02					Zaphon				Jebel Aqra
	#	Psa 048:02, 048:11			Mount Zion			h5_100507, 10_2Sam0507_CityOfDavid / 4 more
	#	Psa 048:03, 051:18			Jerusalem			h5_100507, 10_2Sam0507_CityOfDavid / 36 more
	#	Psa 048:07					Tarshish			(OI A23301 Tarkauish) Huelva, Sardinia, Carthage, Tarsus, Rhodes, Cyprus, Cadiz, Etruria
	*	Psa 056:01					Gath				h4_091704, 09_1Sam1704_TellEsSafiPotsherd / Tell es Safi, Ras Abu Hamid, Tel Haror, Tel Nagila, Tel Erani
	#	Psa 060:01					Aram_Naharaim		"Aram of the two rivers" (Mesopotamia), close to Paddan Aram, Haran; Gen 24:10, Deu 23:4, Jdg 3:8, 1Chr 19:6
	#	Psa 060:01					Salt_Valley 		Wadi el Milh Es Sebkha, Lod, Khirbet Hirsha, Wadi Arabah, Wadi esh Shellal, Sarafand el Kharab
	*	Psa 060:01					Zobah				h5_100805, 10_2Sam0805_Zobal_TellTzuba / -1770 BC Mari Tablet #5423 states Qatna king IshiAddu leads Mari troops to Sibat, Amarna letter EA 383 (Amqu), TP3 annals, Hama Aramaic graffiti
	*	Psa 060:06, 108:07			Shechem				l1_011206, 01_Gen1206_AbrahamAtShechem / Tell Balatah
	*	Psa 060:08, 060:01, 108:09	Edom				Buseira ruins / 5 more
	*	Psa 068:08, 068:17			Mount_Sinai			l2_021922, 02_Exo1922_MountSinai_JabalAlLawz
----	Psa 068:14					Zalmon				Jebel Druze, Mount Hermon, Jebel el Kabir, Mount Ebal, Mount Gerizim, Jebel Salman
		Psa 068:15					Mount_Bashan		04_Num3233_Bashan?, Mount Hermon, Jebel Druze, Mount Ebal, Mount Gerizim, Jebel Salman, Jebel el Kabir
		Psa 068:31, 087:04			Cush/Ethiopia		Napata, Nuri pyramids
	*	Psa 072:08, 080:11			Euphrates River		l1_010214, 01_Gen0214_Shatt_AlArab
		Psa 072:10					Tarshish			Huelva, Sardinia, Carthage, Tarsus, Rhodes, Cyprus, Cadiz, Etruria
		Psa 072:10, 072:15			Sheba				ruins at Old Ma'rib in Sheba
	#	Psa 076:02					Salem				Jerusalem
	*	Psa 078:12, 068:31, 080:08	Egypt				l1_011210, 01_Gen1210_Egypt_Pyramids / 21 more
	*	Psa 078:43, 078:12			Zoan (Tanis)		h5_102321, 10_2Sam2321_Amenemope_Mask
	#	Psa 078:51, 105:23			Ham/Egypt?			Egypt pyramids of Giza / 2 more
	*	Psa 078:60					Shiloh				h1_061801, 06_Josh1801_Shiloh_KhirbetSeilun, See also: Gen 49:10, Josh 16:06+, Judg 18:31+, 1Sam 01:03+, 1Kin 02:27+, Psa 78:60, Jer 07:12+
		Psa 080:11					Great Sea			Mediterranean Sea @ Haifa?
		Psa 081:07, 106:32			Meribah_Kadesh		Petra, Ain el Qudeirat, Ein Qedeis
		Psa 083:06, 060:08, 108:09	Moab				-
		Psa 083:07					Amalek				10 specific places: Edom, "Ishmael", Moab, "Hagrites", Gebal, Ammon, Amalek, Philistia, Tyre, Assyria, "Lot" / Midian, Kishon,
		Psa 083:07					Ammon				-
	*	Psa 083:07					Gebal				19_Psa08307_EA086_RibHadda	/ Byblos, Edom, Buseira, Carcaria, Gharandal, Maan, Tuwaneh, Udruh, Tawilan, between Dead Sea & Petra
		Psa 083:08					Assur				-
		Psa 083:09					Kishon River		Nahal Tabor
		Psa 083:09					Midian				-
		Psa 083:10					En-dor				Khirbet es Safsafa, Indur, Tell Abu Qedeis, Khirbet Jadurah, Tell el Ajjul
		Psa 084:06					Baca_Valley			within 20 km of Jerusalem, Valley of Rephaim, El Baq'a
		Psa 108:09, 060:08, 083:07	Philistia			Psalm 87:4 / 2 more
		Psa 087:04, 137:01			Babylon				/ 2 more
		Psa 089:12					Mount Tabor			Jebel et Tur
		Psa 095:08					Massah				Wadi Rufaiyil, Wadi Feiran, Wadi el Sheikh, Jabal Huwayti, Wadi Sudr, Ain el Qudeirat, Ein Qedeis
		Psa 095:08					Meribah_Sinai		Wadi Rufaiyil, Wadi Feiran, Wadi el Sheikh, Jabal Huwayti, Wadi Sudr
	*	Psa 104:01					-					19_Psa10401_AtenGreatHymn
		Psa 105:11, 105:01			Canaan				/ 2, 3 more
		Psa 106:07, 136:13, 66:06	Red Sea				Psa 66:06, 106:7,9,22, 136:13,15, Gulf of Aqaba / 7 more
		Psa 106:19					Mount_Horeb			Mount_Maqla near Jabal al Lawz
		Psa 106:28					Peor				panorama of ruins at Khirbet Ayun Musa, Khirbet el Muhatta, Tall Iktanu
		Psa 108:07, 060:06 			Succoth_Valley	 	-
	*	Psa 108:08, 060:07			Gilead				h4_093111, 09_1Sam3111_Jabesh_Gilead
	*	Psa 114:03, 114:05, 042:06	Jordan_River		06_Josh0314_Jordan_River
		Psa 120:05					Kedar				ruins in Dumat al Jandal
		Psa 120:05					Meshech				ruins at Gordion
		Psa 126:04					Negeb				-
	*	Psa 132:06					Bethlehem			h3_080101, 08_Ruth0101_Bethlehem_City / Ephrathah
		Psa 132:06					Jaar				"forest, copse", Deir el Azar
	]

	xtras

		"Letter of Lentulus" claimed to be from Roman consul Aurelius (Publius ?) Lentulus to Roman emperor 302 Tiberius (+0014 +0037 AD), written in the 12th year (in 26 AD), with a physical and personal description of Jesus. It was found in Italy, Florence, +1460). It is likely an apochryphal hagiography due to lack of corresponding provenance and variation from Isa 53.
		"Letter of Abgar" (described by Eusebius in +0314 AD) / Church historian Eusebius claimed the Edessan archives has a letter between Edessa Osroene king Abgar 5 (-0001 +0050 AD) and Jesus. It was found in Constantinople, +0944. A Hispanic female pilgrim named Egeria (about +0384) claimed to have seen this letter. Church historian Eusebius (+0260 +0339) recorded that the Edessan archives had a copy of this letter.
		"Gamaliel Letter"
		"Mari Tablets", -1789 -1759 BC "All the Benjamites were sending fire-signals.", "The year that Zimri-Lim killed the davidum of the Benjamites", Benjamin: Gen 35:18, Exo 1:3, Num 1:37
*/
/* replication		(propagating BPOD) */

const txtLaws = [ 

OT_law [

	[ 'l1_010103',	/* 01_Gen0103_Light_Energy */					'01 Gen 01:03',

		'', 

		'', 

		'\
			see discussion on the "Bible and Science" in the BPOD Help.\
			Energy & Matter, Light, \
			<br />• <a class = "smllink" target = "_blank" href = "images_bible/added/01_Gen0109_Particles_Elementary.jpg" > \
				Click here to see the Fundamental Elementary Particles.</a> \
		', 

		''
	],

	[ 'l1_010103',	/* 01_Gen0103_Oceanography_Meteorology */		'01 Gen 01:06',

		'', '', '', ''
	],
	
	[ 'l1_010120',	/* 01_Gen0120_Zoological_Marine_Avian */		'01 Gen 01:20', // day 5

		'Then God said, "Let the waters teem with swarms of living creatures, \
			and let birds fly above the earth in the open expanse of the heavens."',

		'Examples of Marine & Avian Taxonomy.',

		'Examples of biological complexity in the taxonomies of Zoological Classification abound.\
			The Bible does not systematically catagorize Marine & Avian Taxonomy. \
			Scientifically, as is true for Astronomical or Mineralogical classifications, \
			such declarations would always be bound to the interpretations or limiting observations of the current culture. \
			<br />\
			<br /><a class = "smllink" target = "_blank" href = "bpod_help.html#q2rationaleScience" > \
				See a more detailed statement about Science in "BPOD Rational", under "Bible & Science".</a> \
			See also: Gen 01:20, 24, Lev 11:02, Deu 14:03, Job 39-41, Acts 10:12.\
			',

		'The Bible is Revelation, not a validation of temporary consensual observations. \
			Nevertheless, simple descriptions of Marine animals add to the fullness of range in the Biblical narrative.'
	],
	[ 'l1_010124',	/* 01_Gen0124_Zoological_Terrestrial_Man */		'01 Gen 01:24', // day 6

		'Then God said, "Let the earth bring forth living creatures after their kind:\
			cattle and creeping things and beasts of the earth after their kind"; and it was so.',

		'Examples of Terrestrial Taxonomy.',

		'Examples of biological complexity in the taxonomies of Zoological Classification abound.

			The Bible does not systematically catagorize Terrestrial Taxonomy. \
			Scientifically, as is true for Astronomical or Mineralogical classifications, \
			such declarations would always be bound to the interpretations or limiting observations of the current culture. \

			See also: Gen 01:20, 24, Lev 11:02, Deu 14:03, Job 39-41, Acts 10:12.
			',

		'The Bible is Revelation, not a validation of temporary consensual observations. \
			Nevertheless, simple descriptions of Avian animals add to the fullness of range in the Biblical narrative.'
	],
	[ 'l1_010608',	/* 01_Gen0608_Universal_Noah */					'01 Gen 06:08',

		'But Noah found favor in the eyes of the Lord.'.

			// "https://www.youtube.com/watch?v=RtIoUF6Y_MY" Aztec Coxcox & Xochiquetzal, Nahua (Nata & Nena)

		'',

		'There are several events in the Bible which have "Universal" references. These include:
			<br />• The "Universal Tree of Life" themes
			<br />• The "Universal Flood Narratives"
			<br />• The "Universal Babel Narratives"
			<br />• The "Universal Missing Day" narratives
			<br />• The "Universal Behemoth/Leviathan" themes
			<br /> \
			<br />Along with them, and associated with the "Universal Flood Narratives",
				is the distinctive and arguably universal detail of Noahs name:

				Hebrew			Bible			Noah, "rest"
				Africa/Egypt	Book of Gates	Nu
				Mesopotamia		various			(name used as description: Ziusudra, Atrahasis, Utnapishtim)
				Indian			various			MaNu (Matsya Purana, Agni Purana, Bhagavata Purana, Mahabharatha Vana_Parva, YajurVeda_Shukla Shatapatha_Brahmana)
				China			various			Nuwa (ShuJing, LieZi, ChuCi, HuaiNanZi, ShanHaiJing)
				Europe			Metamorphosis	(absent, although "Ducalion" means wine drinker, Gen 9:21)
				NA/Hawaiian		-				Nuu
				NA/Aztec		-				Nota
			',

		'In addition to the Flood Narrative having a global impact and distribution,
			the name of Noah appears to be preserved throughout the world.'
	],
	[ 'l1_010918',	/* 01_Gen0918_xxxxxxxxxxxx_SevenSages	//		'01 Gen 09:18-19',

		'Now the sons of Noah who came out of the ark were Shem and Ham and Japheth; and Ham was the father of Canaan. \
			These three were the sons of Noah, and from these the whole earth was populated.',

		'',
			01_Gen0918_Hermopolis_Ogdoad.jpg
			01_Gen0918_Hermopolis_Khensumose.jpg

		'\
			A depiction of the Ogdoad from a Roman era relief at the Hathor temple in Dendera
				in which some have frog heads and others have serpent heads
				The Dendera Temple complex Hathor Temple .
				Heliopolis (aka jwnw, On) date to Old Kingdom

			In Egypt, the earliest god, Ra and/or Atum (both being creator/sun gods),
				emerged from a chaotic state of the world (Nu) and gave rise to
				Shu (air) and Tefnut (moisture), from whose union came
				Geb (earth) and Nut (sky), who in turn created
				Osiris, Isis, Set, and Nephthys.

			Egypt had competing cosmogonies from Heliopolis/Memphis, Hermopolis, and Thebes.
				Another view that first appears in the "Book of the Dead" (aka BD 50B) is of Zep_Tepi.
				Zep_Tepi (aka zp tpj, meaning "First Time") is a time when the creator emerged from chaos.
				This story is not in the "Pyramid Texts" or "Coffin Texts".
				Seahorse (aka hajiss) depicted in -0500 BC Egyptian priest Iufaa Shaft Tomb

			-1075 -0945 BC 21st Dynasty, "Sunrise at Creation", Book of the Dead of Khensumose

				https://smarthistory.org/creation-myths-and-forms-of-the-gods-in-ancient-egypt/
				https://en.wikipedia.org/wiki/Ancient_Egyptian_creation_myths
				The Book of the Dead first appeared in the New Kingdom.
				The sun rises over the circular mound of creation as goddesses pour out the primeval waters around it
				The sun rises from the mound of creation at the beginning of time. The central circle represents the mound,
				and the three orange circles are the sun in different stages of its rising.
				At the top is the "horizon" hieroglyph with the sun appearing atop it.
				At either side are the goddesses of the north and south, pouring out the waters that surround the mound.
				The eight stick figures are the gods of the Ogdoad, hoeing the soil.
				(Kunsthistorisches Museum, Vienna)

			samples

				Hebrews		Bible: Noah, Shem, Ham, Japheth & wives
				Africa		Ogdoad: Nu, Naunet (water), Heh, Heuhet (unboundedness), Kek, Kauket (dark), Amun, Amunet (rest)
				Mesopotamia	Apkallu: Seven Sages of Mesopotamia
				India		Saptarishi: Manu & Seven Sages
				China		三皇 SanHuáng: NǚWa (女娲/女媧 WomanTalk) & FuXi (伏羲,伏羲 SubsideBreath), ShénNóng (神农/神農), HuángDì (黃帝) /ZhùRóng (祝融 WishMelt, 重黎/ZhòngLí HeavyBlack)/SuìRén (燧人 FlintPerson)/GòngGōng (共工 CommonWork)
				?Greece		Hesiod: Titanomachy (2+12), Homer: Iliad (Deception of Zeus), Plato: Timaeus (Uranus, Gaia, Oceanus, Tethys, Cronus, Rhea, plus Phorcys)
				AC_Aztec	Aztec_Codices: Chicomoztoc (Place of the Seven Caves/Peoples): Aztec/Mexica, Chalca, Tlaxcalteca, Acolhua, Xochimilca, Tepaneca, Tlahuica
				?AC_Maya	Popol_Vuh: Itzamna/HunabKu (god), KinichAhau (sun), Chaac (rain), AhPuch (death), Kukulkan (serpent), EkChuaj (merchant), Xibalba_Lords (judges)

				Maya cosmogonic myth for this "First Father"
					Under the aegis of First Father, One-Maize-revealed,
						three stones were set up at a place called 'Lying-down-sky', forming the image of the sky.
					First Father had entered the sky and made a house of eight partitions there.
					He had also raised the Wakah-Chan, the World Tree, so that its crown stood in the north sky.
					And finally, he had given circular motion to the sky, setting the constellations into their dance through the night.
			',

		''
	],
	[ 'l1_011401',	/* 01_Gen1401_Ugarit_Tablets */					'01 Gen 14:01',

		'In the fourteenth year Chedorlaomer and the kings that were with him,
			came and defeated the Rephaim in Ashteroth-karnaim and the Zuzim in Ham and the Emim in Shaveh-kiriathaim,'

				https://archaeology.org/issues/july-august-2021/features/ugarit-bronze-age-archive/
				https://archaeology.org/wp-content/uploads/2021/06/Ugarit-Wood-Shipment-Alphabetic-Cuneiform-Tablet-Combo.jpg
				https://www.academia.edu/84494430/Biblical_King_Og_and_the_Ugaritic_Deity_R%C4%81piu
				https://intertextual.bible/group/ancient-near-east

				Oriental Institute of the University of Chicago,
					OCHRE (Online Cultural and Historical Research Environment)
					RSTI (Ras Shamra Tablet Inventory)
				KAI Kanaanaische und Aramaische Inschriften
				KTU Keilalphabetische Texte aus Ugarit

		'An example of "Ugarit Clay Tablets".'

		'Several Ugarit clay Tablets, dating to the 13th century BC, reference the Rephaim (Gen 14:05).

			The name Rephaim appears as "Rapauma" in the Kirta Epic (aka Kret, Keret).
				The Kirta Epic also mentions Ditanu (aka Didanu), an Amorite ancestral ruler,
				which may be a reference to Dedan or Dathan in the Bible.
				The text KTU 1.15.3 lines 13-15, reads:

				[Ugarit king Kirta] is greatly lifted up amidst the Rapa uma of the earth,
				in the gathering of the assembly of Ditanu.

			The word "Rephaim" is linguistically related to an Ugaritic king or diety named "Rapiu".
				The title "Rephaim" means "giants" in Hebrew, and "Rapi" means "great" in Babylonian.
				An individual "Rapiu", probably a king or god, is linked to the cities Ashtaroth & Edrei.
				The text KTU 1.108 line 1, reads:

				May Rapiu, King of Eternity, drink wine, yea, may he drink, the powerful and noble [god],
				the god enthroned in Ashtarat, the god who rules in Edrei...

			Another reference to "Rephaim" appears in a funery ritual.
				The text KTU 1.161, lines 9-10, reads:

				You have been called, O Rapauma of the earth,
				You have been summoned, O assembly of Didanu.

			An indirect reference to Og is made from the reference from Rephaim kings of Bashan and the associated cities.
				Another reference to Og may be in the Lebanon Byblos marble "Phoenician text Byblos 13".
				This was dated to -0500 BC and is a tomb inscription classified as "KAI 280".
				It reads:

				...The Mighty Og will take revenge on behalf of me...
				...kingship reign of my fathers. Another ...

			Gen 14:05, 15:20, Deu 02:11+, Josh 12:04+, 2Sam 05:18,22, 23:13, 1Chr 11:15, 14:09, Isa 17:05
			',

		'The Rephaim have archeological reference in the Clay Tablets of Ugarit.'
	],
	[ 'l1_011016',	/* 01_Gen1016_Amorite_Mari_Tablets */			'01 Gen 10:16',

		'and the Jebusite and the Amorite and the Girgashite'

			// ms_-1750_Amorite_Mari_Tablets

		'Some Amorite "Mari_Tablets".',

		'
		-2500 Amurru 1st mentioned as "Martu" West of Mesopotamia in
			"Enmerkar and the Lord of Aratta" & "Lugalbanda and the Anzu Bird"

			-2500 -2250 Ebla Texts refer to the king of Martu

			-2240 Akkad king NaramSin defeats Sumerians & Amorites near Syria NE highlands of Jebel_Bishri
				Jebel_Bishri (aka Amorite Mountains) is South of Syria Lake Al_Assad.
				Akkad 4 Corners: Amorite (West), Subartu (North), Sumer (South), Elam (East)

			-2037 -2028 Sumer dynasty #03 Ur king #04 ShuSin constructs 170 mile wall
				from the Tigris to Euphrates to keep out Amorites

		-2000 -1200 Amurru Kingdom

			-2000 -1800 Mari archives mention Amurru, possibly as a federation

			-1809 -1776 Amorite warlord Shamshi_Adad 1 came from from Ekallatum (old Hamazi)
				He conquers Syria, Anatolia, Upper Mesopotamia (possibly Yamhad & Mari kingdoms)

			-1805 -1650 Egypt SIP dynasty #14 king Sekhaenre Yakbim (aka Yakbmu) was possibly Amorite

			Amorite states
				-1810 -1517 Yamhad (capital Halab, aka Aleppo), Preceded by	Ebla, Succeeded by Mitanni
				-3300 -1334 Qatna
				-2900 -1760 Mari
				-1770 -1728 Andarig
				Babylon
				Eshnunna

			-1750 Amorite Mari Kingdom cuneiform clay tablets

		-1600 Mitanni (Hanigalbat) rise from Amorite power vacuum

			-1650 Hyksos rule Egypt SIP dynasty #15 contemporaneously with dynasty #16 & #17 of Thebes
				Hyksos at Avaris share culture with Amorites in Byblos, Ugarit, Alalakh, TellBrak

			-1542 Kamose fights Hyksos preserved on 3 Karnak stelae
				One of these is the Carnarvon Tablet

			-1570 -1514 Ahmose 1 sacks Avaris (Tell El_DabA)
				Ahmose captured Sharuhen (possibly Tell El_Ajjul)

		-1350 Egypt defines the Amurru in Syria between the Middle Orontes & coast

			Amurru king Abdi_Asirta (Ashirta) is mentioned in the Amarna_Tablets 97 times.
				Abdi_Asirta writes EA 060-065, claiming to guard Egypt interests.
				He is described as an adversary to the prolific Byblos king RibHadda.

			Amurru king Aziru succeeds Abdi_Asirta, and defeats RibHadda. He later defects to the Hittites
				Aziru writes EA 156169161

			Amurru king Benteshina (-1260 -1235) fights with Egypt in the -1274 BC "Battle of Kadesh"
				He later allies with Hittite king Muwatalli 2
				CTH 092, 098, 193, 107

			Amurru king Shaushgamuwa sister divorced by Ugarit king Ammistamru 2

		-1200 Amurru disintegrates after Bronze Age Collapse, possibly merging with Phrygians

		see:
			Gen 10:16 from Canaan
			Gen 14:07 struck by Levantine Coalition
			Gen 15:16 Amorite iniquity incomplete
			Gen 15:21 original occupation
			Num 21:21 Amorite Heshbon king Sihon at Jazer
			Num 21:33 Amorite Bashan king Og at Edrei
			Deu 04:47 the two kings of the Amorites
			Deu 20:17 devote them to destruction
			Josh 10:05 Five South Amorite kings of Jerusalem, Hebron, Jarmuth, Lachish, Eglon
			Josh 11:03 North Amorites
			Judg 01:34 North Amorites push out Danites
			Judg 01:36 the Amorite border ran from Akrabbim Ascent, Sela, and upward
			Judg 10:08 Ammonites invade Israel occupied land of Amorites
			1Sam 07:14 Samuels peace between Israel & Philistine Amorites
			1Kin 09:20 Solomon makes remaining Amorites forced laborers
			1Kin 21:26 Ahab follows Amorite idols
			Psa 135:11, 136:19 Amorite king Sihon at Jazer

		''
	],
	[ 'l1_013618',	/* 01_Gen3618_Story_Sinuhe						'01 Gen 36:18',	/* TENUOUS

		'and Oholibamah bore Jeush and Jalam and Korah. \
			These are the sons of Esau who were born to him in the land of Canaan.',

		// image
		// https://www.biblehistory.net/newsletter/Jeush_Esau.htm
		// https://upload.wikimedia.org/wikipedia/commons/3/3c/Papyrus_Ramesseum_A_01.jpg

		'The "Ramesseum Papyri", including the "Story of Sinuhe".',

		'Between -1991 -1962 BC, Egypt dynasty #12 pharaoh Amenemhat_1 includes the time of the "Story of Sinuhe".
			It is contained on the "Ramesseum Papyri", and copies were found in other places.
			<br /> \
			<br />Sinuhe was an Egyptian bowman who served under Amenemhat and his son Senusret.
			It has some interesting parallels to the biblical narrative of Joseph.
			One interpretation of the story includes a line where Sinuhe meets with the Kesh chief Jeush.
			<br /> \
			<br />Argubrights translation of Papyrus Berlin 3022, Fragment G, Zeile 219-220 reads:
			<br /> \
			<br /><quote>Chief Jeush, the Bedouin ruler from the eastern desert, \
			who leads over the dwelling places of the Kesh district. \
			The far-off land of rock territory (or Quarry district) \
			belonging to this foreigner who sits on the border of the Two Lands \
			with the foreigners of the northern lands.</quote>
			<br /> \
			<br />Kesh is a variation of Cush, and may refer to the Jordanor Edomite Cush.
			Gen 10:6 locates Cushites in Mesopotamian Arabia.
			Num 12:1 implies Moses wife was a Cushite from Arabian Midian.
			Hab 3:3-7, expecially verse 7, associates the Cushan with Arabian Midian.
			Note that this is a separate "Cush" from the Nubian Cush of western Africa.
			<br /> \
			<br />Some translations combine hieroglyphic symbols 'men' and 'u' on the second line \
			into 'Menu' and claim it refers to a foreign leader named "Menu", or "fortress".\
			<br /> \
			<br />See also: Gen 36:5, 14, 18; and see <a target = "_blank" href = "https://ganino.com/anteanus/the_story_of_sinuhe"> \
			link for translation</a>. \
			',

		'Although tenuous, The "Story of Sinuhe" may have a reference "Edom chief Jeush".'
	],
	[ 'l1_013638',	/* 01_Gen3638_Canaanite_Artifacts */			'01 Gen 36:38',

			'Then Shaul died, and Baal-hanan the son of Achbor became king in his place.',

				https://biblearchaeologyreport.com/2024/12/27/top-ten-discoveries-in-biblical-archaeology-in-2024/

			'Canaanite Cultic Artifacts',

			'In Israel, Tel_Shimron, Archaeologists from TelAviv University find large deposite of Canaanite Cultic Artifacts. \
				The items are dated to -1800 BCand are believed to represent ancient Canaanite worship. \
				Among the items were included burned animal bones, valuable pottery, and two small bull statues. \
				Additionally a rare Minoan jug from the Greek island of Crete was discovered. \
				',

			''
	],
	[ 'l2_021021',	/* 02_Exo1021_Ahmose1_Tempest_Stele */			'02 Exo 10:21',

		'Then Yahweh said to Moses, "Stretch out your hand toward the sky, that there may be darkness over the land of Egypt, \
			even a darkness which may be felt."',

			// mamgeorge@yahoo.com, qiao1003ZHI_UC

			see: "//5Personal/History/images_special/af_-1570_-1514_New_dynasty_01_Ahmose_Tempest_Stele.jpg"

		'The "Tempest_Stele" of Ahmose 1.',

		'The "Tempest_Stele" (aka "Storm_Stele") of Ahmose_1 is a six foot tall stone block describing the "sky being in storm". \
				Between -1570 -1514 BC, Egypt NEW dynasty #18 pharaoh #01 Ahmose_1 was known for \
				completing the conquest & expulsion of the Hyksos, and restoring Theban rule over Egypt, Nubia, and Canaan. \
				The stele describes a great storm striking Egypt within this timeframe. \
				It states the storm destroyed tombs, temples, and pyramids in the Theban region. \
				<br />\
				<br />The stele was found at the Thebes Karnak Temple in pylon #3 in pieces. \
				It was found +1947 +1951 by French archaeologists and restored by Claude Vandersleyen in +1967 +1968. \
				<br />\
				<br />The Chicago University Oriental Institute believes the Stela describes \
				catastrophic weather from the aftermath of the volcanic eruption on the Minoan island of Thera. \
				These events may result in the revision for dates to the reigns of kings at this time.\
				<br />\
				<br /><b>Selections from the "Tempest_Stele"</b>:\
				<br /><fieldset class = "boxpad"><quote> \
					(07) ...the gods expressed (08) their discontent... The gods (made?) the sky come with a tempest of (rain?); it caused darkness in the Western region; the sky was (09) unleashed, without... more than the roar of the crowd; ... was powerful... on the mountains more than the turbulence of the (10) cataract which is at Elephantine. Each house, ... each shelter (or each covered place) that they reached... (11)... were floating in the water like the barks of papyrus (on the outside?) of the royal residence for... day(s)... (12) with no one able to light the torch anywhere.\
					<br /><br />\
					Then His Majesty said "How these (events) surpass the power of the great god and the wills of the divinities!" And His Majesty descended (13) in his boat, his council following him. The (people were?) at the east and the west, silent, for they had no more clothes (?) on them... (14) after the power of the god was manifested. Then His Majesty arrived in Thebes ... this statue; it received what it had desired. (15) His Majesty set about to strengthen the Two Lands, to cause the water to evacuate without (the aid of) his (men?), to provide them with silver, (16) with gold, with copper, with oil, with clothing, with all the products they desired; after which His Majesty rested in the palace - life, health, strength. \
					<br /><br />\
					(17) It was then that His Majesty was informed that the funerary concessions had been invaded (by the water), that the sepulchral chambers had been damaged, that the structures of funerary enclosures had been undermined, that the pyramids had collapsed(?) (18) all that existed had been annihilated. His Majesty then ordered the repair of the chapels which had fallen in ruins in all the country, restoration of the (19) monuments of the gods, the re-erection of their precincts, the replacement of the sacred objects in the room of appearances, the re-closing of the secret place, the re-introduction (20) into their naoi of the statues which were lying on the ground, the re-erection of the fire altars, the replacement of the offering tables back on their feet, to assure them the provision of offerings, (21) the augmentation of the revenues of the personnel, the restoration of the country to its former state. They carried out everything, as the king had ordered it.\
					</quote></fieldset> \
		',

		''
	],
	[ 'l2_021317',	/* 02_Exo1317_Horus_Way_xxxxxxxxxxxx */			'02 Exo 13:17',

		'Now when Pharaoh had let the people go, God did not lead them by the way of the land of the Philistines, \
			even though it was near; for God said, \
			"The people might change their minds when they see war, and return to Egypt."',

			Way of Horus (aka "Khet Her"), "Way of the Land of the Philistines", Hebrew: derek eres pelisti, Latin: Via Maris

				Heliopolis > Tanis > Pelusium > Gaza/Ashdod/Jaffa/Dor > Hazor > Damascus > Tadmor > Resafa
				See also: Exo 13:17, Isa 9:1, Matt 4:15
				alternatively Isa may refer to: Dan > Abel-beth-Maacha > Tyre > Sea

			King’s Highway

				Memphis > Heliopolis > Clysma? > Mitla Pass? > Nekhl > Eliat > Rabbah > Bosra > Damascus > Tadmor > Resafa
				See also: Num 20:17, 21:22
				Tadmor: 2Chr 8:4
				Resafa: Isa 37:12 mentions Rezeph, Akkadian: Rasappa
				Gen 16:7 "Way of Shur"
				Nekhel was in Ancient "Du Mafkat" province.
					-1600 BC Egypt built "Way of Shur" from Sinai to Beersheba
					the region provided minerals, turquoise, gold, copper
					mines & temples are excavated there

			"Wadi_Tumilat" (aka "Pharaohs Canal", "Nechos Canal") near Amarna
				Wadi_Tumilat started from Zagazig > Heropolis > Serapeum > and ended at Bitter_Lakes
				It was proposed as a "Way of Shur" by Hoffmeier.
				-1800 BC Senusret 3 started a canal joining the Nile to the Red Sea (Aristotle claimed)

			"Wadi_Hammamat" (aka "Valley of Many Baths") near Thebes
				Wadi_Hammamat started from Thebes and ended at the Gulf of Suez
				Predynastic & Early Dynastic Period sites were found there.
				Senusret_1 sent mining expeditions there.
				-1700 to -1550 BC Second Intermediate Period material was discovered at several sites.
				In -1150 BC, Thebes, Deir_ElMedina, dynasty #20 pharaoh Ramesses 4 plans to quarry.
					He enlists scribe Amennakhte to draw the "Turin Papyrus Map", and includes Wadi_Hammamat.

	],
	[ 'l2_021318',	/* 02_Exo1318_Red_Sea */						'02 Exo 13:18',

		'Hence God led the people around by the way of the wilderness to the Red Sea; \
			and the sons of Israel went up in martial array from the land of Egypt.',

		'An arial view of the "Red Sea"',

		'',

		''
	],
	[ 'l2_021401',	/* 02_Exo1401_BaalZephon_xxxxxxxxxxxx */		'02 Exo 14:01-02',

		'Now the Lord spoke to Moses, saying, \
			"Tell the sons of Israel to turn back and camp before Pi-hahiroth, between Migdol and the sea; \
			you shall camp in front of Baal-zephon, opposite it, by the sea."',

			https://www.bible.ca/archeology/bible-archeology-exodus-route.htm

		'The "Baal_Zephon Stele".',

		'
			https://www.academia.edu/4380362/A_Fresh_Look_at_the_Baal_Zaphon_Stele_Journal_of_Egyptian_Archaeology_100_2014_
				The "Baal_Zephon Stele" (aka PM 7, 393; AO 13176, "Mamy Stele") is a New Kingdom funerary stele from Ugarit,
			https://austriaca.at/0xc1aa5572%200x003a441a.pdf
				The "Mekal Stele" (aka PM 7, 377; IAA S-982) is a New Kingdom funerary stele found in 1928 at Beth Shean,
					showing Amenemopet worshiping Mekal god of Beth Shean

			Pi-hahiroth ("place where sedge grows"),
				pr-hwt-hrt is in Papyrus Anastasis 3 (EA 10246), Memphis Ramesside Hieratic manuscript
				https://www.britishmuseum.org/collection/object/Y_EA10246-6?selectedImageId=437477001

			Migdol ("tower"), the Southern Migdol

				https://books.google.com/books?id=PUcs-FQv4uIC&pg=PA104#v=onepage&q=Migdol&f=false
				Amarna Tablet EA-234 from Akka ruler Satatna (Zatatana) refers to a "Magdalu in Egypt"
				Amarna Tablet EA-069 & 070 mention a Migdol near Lebanon, Ahlia (Tripoli)
				Amarna Tablet EA-185 & 186 mention a Migdol near Lebanon, Amqu (Beqaa Valley)
				Amarna Tablet EA-256 mention a Migdol near Jordan
				ANET 247 mentions both Memphis & Karnak Steles of Amenthotep 2 referring to a Migdol.
				Cairo Demotic Papyrus 31169 mention 4, in the East Delta.
				and others are mentioned.
				Migdols are towers that can be anywhere.

			Baal-zephon ("lord of the north", treasure)

			Tiran as contrasted with Nuweiba

			At least 3 sanctuaries of Baal-zephon (aka "Lord of the North") in Egypt are known: \
				Memphis, Tahpanhes (Tell Defneh), and Mount Casius at Ras Qasrun (Bietak 1981:253). \
			<br /> \
			<br />See also: Exo 14:02,09, Num 33:07. \
			',

		''
	],
	[ 'l2_021408',	/* 02_Exo1408_Major_Exodus_events */			'02 Exo 14:08',

		Exo 14:08 (Psa 106:07, 136:15)

			'And Yahweh hardened the heart of Pharaoh, king of Egypt, with strength, \
				and he pursued the sons of Israel as the sons of Israel were going out with an exalted hand.'

			Psa 106:07 Our fathers in Egypt did not consider Your wondrous deeds;
				They did not remember Your abundant lovingkindnesses, But they rebelled by the sea, at the Red Sea.

			Psa 136:15 But He overthrew Pharaoh and his army in the Red Sea, For His lovingkindness endures forever.

			// "https://www.academia.edu/14778076/Moses_and_the_Exodus_Chronological_Historical_and_Archaeological_Evidence?email_work_card=title"
				also has some good info about Paleo_Hebrew

		Major events of Israels Exodus correspond to Egypts History within 100 years [

			* BPOD references

			Israelites in Egypt

				x Semitic Governor			>> rule under Joseph
				x Arrival of the Hyksos		>> arrival of Israelites
				x Sojourn at Avaris			>> sojourn in Goshen near city of Avaris beneath the city of Rameses
				* Papyrus Brooklyn 35.1446	>> records 95 household slaves, including Hebrew
				* "Ipuwer_Papyrus"			>> -1600 Ipuwer lists plagues (bloody Nile, sick cattle) and loss of wealth & slaves
				x "Tempest_Stele"			>> -1550 Kamose blames Apopi for all the disasters on Egypt, which caused many deaths

				Important Ehyptian Pharoahs [

					-1575 -1540 BC Egypt dynasty 15th pharaoh #07 Apepi [ reigned 40 years from Avaris

						In practice Apepi (aka Apopi, Apophis) ruled the majority of Egypt early in his reign.
						Apepi was considered a prince of Retenu (Palestine).

							Apepi (aka Aauserre/Aaqenenre Apepi, Apophis) means "very pretty" in Hebrew.
							This suggests to some Apepi was Moses (Exo 02:02).

							Apepi is recorded as worshiping Seth in a monolatric way.
							Apepi is depicted as a giant snake (since Apophis was the deity of chaos).

							According to Manetho Apepi took the name Moses.
							In the "Tempest_Stele", Kamose blames Apepi for all the disasters on Egypt, which caused many deaths.

						"af_-1575_-1540_Sip_dynasty15_Hyksos_Apepi_Scarab"
							Apepi Scarab bearing the final praenomen of Hyksos pharaoh Apepi

						"af_-1575_-1540_Sip_dynasty15_Hyksos_Apepi_DaggerHandle"
							Electrum dagger handle of a soldier of Hyksos pharaoh Apepi
					]

					-1560 -1555 BC Egypt dynasty 17th pharaoh #08 Seqenenre Tao [

						In -1533 BC Apepi gave Tao an unspecified disturbing message.
						Tao died violently in battle against the Hyksos.
						Taos eldest son, Ahmose Sapair, died in a dramatic but unexplained way (see: Louvre E 15682).

						See: "The Quarrel of Apepi & Seqenenre" by dynasty 19th pharoah #04 Merenptah scribe Pentawer
							"https://archive.org/details/GardinerLateEgyptianStoriesPdf/page/n165/mode/1up", Text #8
							In it, North pharoah Apepi challenges Thebes ruler Seqenenre with a puzzle.
							Apepi claims the cries of Theben hippopotami (100s of miles away) disturb his sleep.
					]

					-1555 -1550 Egypt dynasty 17th pharaoh #09 Kamose [ begins battle against Hyksos ]

					dynasty #18 pharaohs

					-1570 -1546	#01 Ahmosis 1		(-1549 -1524?) finishes Hyksos battle (-1542), reasserts Egyptian power, his heir dies
					-1524 -1503	#02 Amenhotep 1		Rudd: kills children / rebuilt temples
					-1503 -1493	#03 Thutmose 1		campaigned deep in Levant
					-1493 -1479	#04 Thutmose 2		Rudd: oppresses Israel / short reign, Aswan Stela of Thutmose 2 states he crushed Nubian rebellion, fought Shasu up to Nuhasse Niya (aka Niye, Niy, Nii, Nihe; see EA 53,59)
					-1479 -1458	#05 Hatshepsut		Rudd: adopts Moses / coregent with successor, took on male roles, general peace,  prolific builder
					-1479 -1425	#06 Thutmose 3		Rudd: Exodus Pharaoh / 17+ military campaigns, empire zenith, his heir (Amenemhat) dies
					-1427 -1397	#07 Amenhotep 2		recaptures 100k slaves, adopts Canaanite gods, removes Hatshepsut images
					-1397 -1388	#08 Thutmose 4		writes "Dream Stele", restores Sphinx, marries Mitanni princess (see EA 29)
					-1388 -1351	#09 Amenhotep 3		marries outside of Egypt, Amarna Letters
					-1351 -1334	#10 Amenhotep 4		monotheist Akhenaten, Amarna Letters
					-1335 -1334	#11 Smenkhkare		short reign, possibly shared rule with Neferneferuaten
					-1334 -1332	#12 Neferneferuaten	short reign, queen, possibly Nefertiti, Acencheres
					-1332 -1323	#13 Tutankhamun		minor king, reverted Atenism, well preserved tomb, possibly Rathotis
					-1323 -1319	#14 Ay				short reign, poorly attested
					-1319 -1292	#15 Horemheb		was chief army commander, demolished Akhenaten monuments
				]

			Israelite Slavery & Exodus

				* "Rekhmire_Paintings"		>> records of Slave BrickMaking, Lower Egypt Rekhmire tomb, Valley of Nobles
				x Expulsion of Hyksos		>> Exodus of Israel
				x T3 gains 900 chariots		>> shows command of Djahy, also prep for Judges 4; Hazor king Jabin commander Sisera uses 900 chariots
				x loss of Thutmose_3 son	>> 11th plague; may also relate to Amenhotep_2
				x power loss of T3 & A2		>> looting of Egypt [

					* Thutmose 3 led 17 known military campaigns into the Levant
					* Thutmose 3 boasted of having taken 5903 slaves on his first campaign
					* Amenhotep 2 led only two or three
					* Amenhotep 2 claims to have taken 2214 slaves on his first
					* Amenhotep 2 final campaign reclaims 101,128 slaves
					* Amenhotep 2 never took another campaign into Canaan, and the 18th dynasty began to decline in power
				]
				x A2 prince Weben_Senu dies	>> sudden matches 10th plague
				x A2 reclaims slaves		>> loss of slaves under pharaoh [ "Memphis_Stele", "Elephantine_Stele"

					* -1427 -1397 Amenhotep_2 last campaign at 9th year carves "Memphis_Stele" which claims 101,128 slaves.
						Another stela with the same text was erected at Amada.
						Vienna Kunsthistorisches Museum, Inventory number: 5909
						"af_-1427_-1397_New_dynasty18_Amenhotep2_MemphisStele"

					* A duplicate exists as the "Elephantine_Stele" from the Elephantine Khnum Temple.
						"af_-1427_-1397_New_dynasty18_Amenhotep2_ElephantineStele"
				]
				x A2 mummified boils		>> may relate to 6th plague
				* -0300 Manetho accounts	>> Egyptian accounts of Moses & Exodus

			Israelite Occupation

				x Proto_Sinaitic Writing	>> writing of law & travels in Peninsula on stones at Serabit el-Khadim
				* "Amarna Tablets" & Habiru	>> 64 tablets recording the arrival iof the Habiru in Canaan
				* "Soleb_Inscription" of A3	>> Yahweh as enemy of Egypt [ "Soleb_Inscription", "Amarah_Inscription"

					-1304 -1237 dynasty 19th

					Sudan (Nubia), Soleb Temple, Amenhotep_3
						-1388 -1351 Amenhotep_3 "Soleb_Inscription"
						𓇾 𓆷 𓇓   	𓇋 𓇋 𓉔 𓍯 𓅱
						ta sh nsw	(y) i h wa w

					Sudan (Nubia), Amarah Temple, Ramesses_2
						-1279 -1213 Ramesses_2 "Amarah_Inscription"
						𓇾 𓆷 𓇓		𓅱 𓇋 𓇋 𓉔 𓌗 𓄿
						ta sh sw	w (y) i h l a
				]
				x "Berlin_Pedestal"			>> Israel in Canaan [ "Berlin_Pedestal" (AM 21687)

					affirms Israel in -1550 -1292 Egypt 18th Dynasty, possibly -1400
					"af_-1550_-1292_New_dynasty18_BerlinPedestal"
					the last cartouche (on the right, j...šꜣjr) is partially broken off
				]
				* "Mernephtah_Tablet"		>> -1200 fragmented Israel in Canaan
				x Seti War Relief			>> -1291 -1279  pharaoh Seti 1 depicts Horus Way & "Tjaru", Exo 13:17

			related

				Hatshepsut Temple	-1505 -1458 Egypt dynasty #18 regent #06 Hatshepsut brother SenenMut (mothers brother), Hatshepsut rules with Thutmose 3
				"Kahun Papyri"		-1839 -1814 Egypt dynasty #12 pharaoh #06 Amenemhat 3 documents workers who abandoned homes suddenly
		]
	]
	[ 'l2_021522',	/* 02_Exo1522_Shur_Wilderness */				'02 Exo 15:22',

		'Then Moses led Israel from the Red Sea, and they went out into the wilderness of Shur; \
			and they went three days in the wilderness and found no water.',

		'The "Wilderness of Shur".',

		'\
			see also: Gen 16:7, 20:1, 25:18, Exo 15:22, 1Sam 15:7, 27:8',

		''
	],
	[ 'l2_022226',	/* 02_Exo2226_YavneYam_Ostracon */				'02 Exo 22:26',

		'If you ever take your neighbor’s cloak as a pledge, you shall return it to him before the sun sets,',

		'The "YavneYam_Ostracon" (aka "Mesad Hashavyahu Ostrakon").',

		'\
			Exo 22:26, Deu 24:13, Pro 20:16
			',

		'',
	],
	[ 'l2_023204',	/* 02_Exo3204_Cow_Petroglyphs */				'02 Exo 32:04',

		'He took this from their hand, and fashioned it with a graving tool and made it into a molten calf; \
			and they said, "This is your god, O Israel, who brought you up from the land of Egypt."',

		'Some "Cow Petrogylphs" in the Wilderness of Sinai.',

		'\
			',

		'',
	],
	[ 'l4_040101',	/* 04_Num0101_Wilderness_Sinai */				'04 Num 01:01',

		'In the third month after the sons of Israel had gone out of the land of Egypt, \
			on that very day they came into the wilderness of Sinai.',

		'The "Wilderness of Sinai".',

		'\
			see: Exo 19:1, Lev 7:38, Num 1:1
			',

		''
	],
	[ 'l4_042129',	/* 04_Num2129_Shihan_Stele */					'04 Num 21:29',

		'Woe to you, O Moab! You perish, O people of Chemosh! He has given his sons as fugitives, And his daughters into captivity, To an Amorite king, Sihon.'

		'A possible depiction of Chemosh on the "Shihan stele".',

		'\
			',

		'',
	],
	[ 'l5_050236',	/* 05_Deu0236_Aroer_Fortress */					'05 Deu 02:36',

		'From Aroer which is on the edge of the valley of Arnon and from the city which is in the valley, even to Gilead, there was not a town that was too high for us; Yahweh our God gave all over to us.',

		'The "City of Aroer".',

			// see: "https://moses.creighton.edu/vr/Arair/site.html"
			// 05_Deu0236_Aroer_Fortress.jpg

		'The Bible lists two cities of Aroer. \
			One city city was built on the river Arnon, East of the Dead Sea. \
			SE built by the Tribe of Dan, and one used by the Ammonites. \
			This city has been identified with the modern village of Arair in Jordan.\
			<br />\
			<br />The second Aroer is an Ammonite town on the border of Gad and Ammon.\
				Although the location is not known, it is near near Ammon capital Rabbh. \
			<br /> \
			Archaeologically, Aroer of Arnon is linked to the "Khirbat Arair". \
			This is a strong fortress along the north ridge of Wadi AlMujib (aka Arnon). \
			The "Moab Stone" (aka Mesha inscription) claims Aroer was built by the Moabites in line 26. \
			Josephus records Aroer was destroyed by Nebuchadnezzar in -0582 BC. \
			Eusebius states the city was still standing during his lifetime. \
			<br /> \
			<br /><b>Biblical references to Aroer</b>: \
			<fieldset class = "boxpad"><quote> \
				<br />Num 21:21 Aroer occupied by Amorites, near Arnon \
				<br />Num 21:24 Israel conquers Amorites , near Arnon \
				<br />Num 32:34 Israel (Gad) rebuilds Aroer (by Arnon before Rueben?) \
				<br />Deu 02:36, Josh 12:02 Israel references Aroer by Arnon \
				<br />Josh 13:16 Israel (Rueben) assigned Aroer by Arnon (see 1Chr 05:08) \
				<br />Josh 13:25 Israel (Gad) assigned Aroer by Rabbah \
				<br />Judg 11:26 Israel references Aroer (by Arnon?) \
				<br />Judg 11:33 Israel recaptures Aroer (by Arnon?) from Ammonites \
				<br />1Sam 30:28 David distributes at Aroer for Ziklag \
				<br />2Sam 24:05 David includes Aroerites in census (see 1Chr 11:44 MightyMen) \
				<br />2Kin 10:33 Jehu loses Aroer to Damascus \
				<br />Isa 17:02 Damascus linked to Aroer \
				<br />Jer 48:19 Moab reoccupies Aroer  \
				</quote></fieldset> \
			',

		''
	],
]

OT_hist [

	[ 'h1_060420',	/* 06_Josh0420_Gilgal_ElUnuq */					'06 Josh 04:20',

		'Those twelve stones which they had taken from the Jordan, Joshua set up at Gilgal.',

		'One possible site for Gilgal (aka El_Unuq).',

		'\
			There were two Gilgals, a northern one and a southern one, and likely others.
			It has long been believed that "Gilgal" is not a specific location, but a type of fortified camp.

			Gilgal (aka "a wheel, rolling") across from Bethany
			Gilgal_ElUnuq (the necklace)

			considerable pottery, some dating to -1300 -1200 BC
			Wadi Far'ah, four miles from Mount Ebal and Shechem
			<br /> \
			<br /><b>Scriptural eferences to Gilgal</b>: \
			<br /><br />• Deu 11:30 (1st mention, location) \
			<br /><br />• Josh 04:08 (v08 gets 12 stones, v09 setup, v19 camped, v20 setup @ Gilgal) \
			<br /><br />• Josh 05:03 (v03 circumcision @ Gibeath-haaraloth, v09 Gilgal, v10 Passover, v13 Captain) \
			<br /><br />• Josh 10:07 (basecamp) \
			<br /><br />• 1Sam 07:16 (Samuels Circuit: Bethel, Gilgal, Mizpah, Ramah) \
			<br /><br />• 1Sam 11:14 (Saul anointed) \
			<br /><br />• 1Sam 13:09 (Saul ignores Samuel) \
			<br /><br />• 2Sam 19:15 (David returns after Absalom dies) \
			<br /><br />• 2Kin 02:01 (Elijah accompanies Elisha) \
			<br /><br />• Hos 09:15 (Israel idolatry) \
			',

		''
	],
	[ 'h1_061929',	/* 06_Josh1929_Canaanite_Shipwreck_Jars */		'06 Josh 19:29',

		'The border turned to Ramah and to the fortified city of Tyre; \
			then the border turned to Hosah, and it ended at the sea by the region of Achzib.'

			https://biblearchaeologyreport.com/2024/12/27/top-ten-discoveries-in-biblical-archaeology-in-2024/
			4. Late Bronze Age Canaanite Shipwreck Discovered off the Coast of Israel (June 2024)

		'Canaanite storage jars',

		'3350 BC, North Israel at 56 miles West and 1.1 miles deep, a robotic submersible retrieved two Canaanite jars. \
			',

		'This discovery shows details of the trading network to Caanan from Mediterranean coasts at the time of the Judges.'
	],

	[ 'h2_070102',	/* 07_Judg0102 EA169 v25/29; "Iaudu"~Judah */	'07 Judg 01:02'

			"https://oracc.museum.upenn.edu/aemw/amarna/P271104?srch=s.K6US2L"

			r 025 ⸢u₃ (at) gab₂⸣-ba₂ (total) KUR.KUR.MEŠ (land) u₃ (at) gab₂-ba₂ (total)
			r 026 lu₂-mešERIN₂.MEŠ (people) su₂-u-tu₃ (Sutu)
				"ameluti iaudu", men of Judah

			r 029 ⸢ma-zi-ri (ʿAḏiri ) iš-tu⸣ (against) KUR (land) mi-⸢is-ri⸣ (Egypt)
			r 030 ⸢u₃  (at) i⸣-na-an-na (now) lu₂-mešsu₂-u-tu₃ (Sutu)
				"ameluti sabe ia-u-du", armed men of Judah

			Knudtzon, took the reading ia-u-du, and changed it without warrant to su-u-du.
				This he translated into German as Sudu-Leute, (Sudu-people),
				thus entirely expunging the name of Judah.
				English translations have since rendered su-u-du as Suteans...

		see Jastrow, Morris, "Men of Judah in the El-Amarna Letters",
			Journal of Biblical Literature, Volume 12, Number 1, +1893, page 61-72.

		Comment: I can not debate the efficacy of using Judea over Sutea.
			The reference to Nuhasse (West of the Euprates) implies a close relationship
			to the Suhum region, from whence come the Suteans.

			However, since this is classified as an Amurru client letter,
			there is equal relationship to Judeans if the transllation can support it.
	]
	[ 'h2_070110',	/* 07_Judg0110 10 names */						'07 Judg 01:10'	// (see 'h2_070216'?)

		* Total 10 names [ Judg 01:10+ // appear from -1400 -1000 BC >> Ugarit_Texts, Nuzi_Texts

			// Sheshai Talmai Kenaz Sisera Jael Purah Zeeb Zalmunna Zebul Delilah

			Names in Judges are peculiar to Canaan, and not found in records after -1400 -1100 BC

				including:
				-1550 BC Tikunani_Prism, Akkad cuneiform clay Prism
					Tikunani likely South East Turkey, near Diyarbakır
					Tikunani_Prism listed 438 Habiru soldiers, most with Hurrian names, some with Semitic
					-1620 BC Hurrian state Tikunani king Tunip_Tessup
					contemporary of -1650 -1620 BC Hittitie king Hattusili 1

				-1400 BC Ugarit_Texts, Ugarit cuneiform clay tablets
					-1350 BC Ugarit king Ammittamru 1
					-1350 BC Niqmaddu 2 was contemporary of Hittite king Suppiluliuma 1
					Stratum 5 to 4 dates to -1550 -1365 BC: Late Bronze 1

				-1400 BC Nuzi_Texts, Akkad cuneiform clay tablets
					-1358 -1335 BC Mitanni king Tushratta
					contemporary of Hittite king Suppiluliuma 1
					contemporary of Egypt Pharaoh Amenhotep 3

				Sheshai		Jud 01:10		Nuzi		as She-sha-a-a
				Talmai		Jud 01:10		Nuzi		as Tal-mu-ia
				Kenaz		Jud 01:13		Ugaritic	as Ka-na-zi
				Sisera		Jud 04&05		Ugaritic	as Zi-za-ru-wa
				Jael		Jud 04&05		Ugaritic	as Jael
				Purah		Jud 07:10-11	Tikunani	as Pu-ra-an-ti, Ekalte Text (Pu-ra-me), Urartian (Pura)
				Zeeb		Jud 07:25		Mari		as Zi-ba-an
				Zalmunna	Jud 08:05-21	Hurrian		as Zalmi, Ugaritic: Za-al-ma-na
				Zebul		Jud 09:28-41	Ugaritic	as Zi-bi-li
				Delilah		Jud 16:04-18	Ugaritic	as Da-li-li
		]

		* Total 6 Hapax_Legomenon [ unlikely word choices for late forger

			Jud 03:16 (sword), 03:22 (refuse), 03:23 (chamber), 04:18 (rug), 05:28 (lattice), 16:16 (annoyed)
				Jud 04:18, שְׂמִיכָה sem-ee-kaw, bassmika, covered
		]
	]
	[ 'h2_070120',	/* 07_Judg0120 Giants */						'07 Judg 01:20'	// (see 'l1_010604'?)

		Giants [ Gen 06:04, 14:05, Num 13:22, 13:33, Deu 02:10, 02:11, 02:20, 03:11

			Gen 06:04, 14:05, Num 13:22, 13:33, Deu 02:10, 02:11, 02:20, 03:11, 1Sam 17:0, 2Sam 05:18/1Chr 11:15, 2Sam 21:18/1Chr 20:04

			Gen 06:04 The Nephilim were on the earth in those days...
			Gen 14:05 ... defeated the Rephaim in Ashteroth-karnaim and the Zuzim in Ham and the Emim in Shaveh-kiriathaim,
			Num 13:22 ... they came to Hebron where Ahiman, Sheshai and Talmai, the descendants of Anak were...
			Num 13:33 ... the sons of Anak are part of the Nephilim...
			Deu 02:10 The Emim lived there formerly, a people as great, numerous, and tall as the Anakim.
			Deu 02:11 Like the Anakim, they are also regarded as Rephaim, but the Moabites call them Emim.
			Deu 02:20 ...for Rephaim formerly lived in it, but the Ammonites call them Zamzummin,
			Deu 03:11 For only Og king of Bashan was left of the remnant of the Rephaim...
			1Sam 17:04 ... Goliath, from Gath, whose height was six cubits and a span.
			2Sam 05:18/1Chr 11:15 Now the Philistines came and spread themselves out in the valley of Rephaim. (Davids early battle as king)
			2Sam 21:18/1Chr 20:04 the "Philistines at Gob/Gezer": Saph/Sippai, Lahmi, Goliath, 6_digit_man
		]

		Judg 01:20 Then they gave Hebron to Caleb, as Moses had promised; & he drove out from there the three sons of Anak.
	]
	[ 'h2_070127',	/* 07_Judg0127 Battles */						'07 Judg 01:27'	// (see 'h2_070127'?)

		Beisan Stele battles

		Judg 03:29 // Semitic battles in Canaan

			-1290 -1279 BC, Egypt NEW dynasty #19 pharaoh #02 Seti 1 was a contemporary of Ehud and Eglon.

				A Beisan Stele #1 inscription reads:

					"The vanquished Shasu [Bedouin] plan rebellion: their tribal chiefs are gathered together, \
					rising against the Asiatics of Southern Palestine [Kharu] .... \
					and they disobey the laws of the Palace."

				Garstang, "Further Light", page 372.
					"https://www.jstor.org/stable/528820?read-now=1&seq=5#page_scan_tab_contents"

					Translations: "https://www.penn.museum/sites/journal/9195"

			Egypt pharaoh Seti 1 describes Semitic battles in Canaan
	]
	[ 'h2_070216',	/* 07_Judg0216_Judges_List */					'07 Judg 02:16',	/* list of Judges

		'Then the Lord raised up judges who delivered them from the hands of those who plundered them.',

		'A "Judges List".',

		'A List of Judges... \
			<table>
			<tr class = "x" ><th>num </th><td>tribe		</th><th>years Rudd		</th><th>judge		</th><th>enemy				</th></tr>\
			<tr class = "x" ><td>#0A </td><td>Levi		</td><td>-1526 -1406	</td><td>Moses		</td><td>Egypt, Amalek		</td></tr>\
			<tr class = "x" ><td>#0B </td><td>Judah		</td><td>-1466 -1356	</td><td>Joshua		</td><td>Palestine			</td></tr>\
			<tr class = "x" ><td>#0C </td><td>Judah		</td><td>-1356 -1350	</td><td>elders		</td><td>Palestine			</td></tr>\
			<tr class = "x" ><td>#01 </td><td>Judah		</td><td>-1350 -1302	</td><td>Othniel	</td><td>Cushan_Rishathaim	</td></tr>\
			<tr class = "x" ><td>#02 </td><td>Ben		</td><td>-1302 -1204	</td><td>Ehud		</td><td>Eglon (Moab)		</td></tr>\
			<tr class = "x" ><td>#03 </td><td>many?		</td><td>-1200 -1200	</td><td>Shamgar	</td><td>Philistines		</td></tr>\
			<tr class = "x" ><td>#04 </td><td>Ephraim	</td><td>-1204 -1144	</td><td>Deborah	</td><td>Canaanite Jabin	</td></tr>\
			<tr class = "x" ><td>#05 </td><td>Manas		</td><td>-1191 -1144	</td><td>Gideon		</td><td>Midian Amalek		</td></tr>\
			<tr class = "x" ><td>#06 </td><td>Manas		</td><td>-1144 -1141	</td><td>Abimelech	</td><td>Shechem			</td></tr>\
			<tr class = "x" ><td>#07 </td><td>Ephraim	</td><td>-1141 -1118	</td><td>Tola		</td><td>? Egypt			</td></tr>\
			<tr class = "x" ><td>#08 </td><td>Gilead	</td><td>-1118 -1096	</td><td>Jair		</td><td>? East, Egypt		</td></tr>\
			<tr class = "x" ><td>#09 </td><td>Gilead	</td><td>-1118 -1094	</td><td>Jephthah	</td><td>Ammonites, Phl		</td></tr>\
			<tr class = "x" ><td>#10 </td><td>Ephraim	</td><td>-1094 -1087	</td><td>Ibzan		</td><td>? Egypt			</td></tr>\
			<tr class = "x" ><td>#11 </td><td>Zebulon	</td><td>-1087 -1077	</td><td>Elon		</td><td>? Amorites			</td></tr>\
			<tr class = "x" ><td>#12 </td><td>Ephraim	</td><td>-1077 -1070	</td><td>Abdon		</td><td>? Amalekites		</td></tr>\
			<tr class = "x" ><td>#13 </td><td>Dan		</td><td>-1118 -1078	</td><td>Samson		</td><td>Philistines		</td></tr>\
			<tr class = "x" ><td>#0D </td><td>Ephraim	</td><td>-1134 -1094	</td><td>Eli		</td><td>Canaanites			</td></tr>\
			<tr class = "x" ><td>#0E </td><td>Ephraim	</td><td>-1094 -1014	</td><td>Samuel		</td><td>Benjamites			</td></tr>\
			</table>',

		''

	],
	[ 'h2_070424',	/* 07_Judg0424_Deborah_HazorDestruction			'07 Judg 04:24',

		// https://biblearchaeologyreport.com/2022/06/10/top-ten-discoveries-related-to-the-book-of-judges/

		This is in addition to an earlier 15th-centruy destruction layer that is likely a result of Joshua’s conquest (Josh. 11:10-11).
		Yigal Yadin and Amnon Ben-Tor, both lead excavators at Hazor, discovered evidence of the destruction of the final Canaanite city
			by a huge conflagration in -1400 -1200 BC LBA 2/3 (Late Bronze Age).

	],
	[ 'h2_070519',	/* 07_Judg0519_Taanach_xxxxxxxxxxxx				'07 Judg 05:19',	/* -1457 BC "Battle of Megiddo"

		'The kings came and fought; Then fought the kings of Canaan At Taanach near the waters of Megiddo; They took no plunder in silver.'

			// Annals of Thutmose 3, Kadesh_Inscriptions, EA189, Kadesh Tablet "TNM_054"
			// https://www.bible.ca/archeology/bible-archeology-exodus-kadesh-barnea-southern-border-wadi-el-arish-tharu-egyptian-account-of-the-battle-of-megiddo-1482bc.htm
			// http://www.kreuzer-siegfried.de/texte-zum-at/taanach.pdf
			// http://saa.uaic.ro/wp-content/uploads/XXX.2.2.pdf

		'', Taanach, or Battle of Megiddo

		'\
				* -1457 BC Taanach. is mentioned in the account of the Battle of Megiddo by Pharaoh Thutmose 3, ca. 1468 B.C., as a southern bypass to Megiddo and as a place where Egyptian troops were mustered; \
				* -1450 BC Taanach cuneiform tablet TT 950, Taanach 14, Administrative Tablet with Personal Names, A.E. Glock, reedited in 2006 by Wayne Horowitz & Takayoshi Oshima, "Cuneiform in Canaan" (n. 21), pp. 127-151. \
					AbdiMilki, Sabaya, PuBaal, Zibilu, BinAya, BinAntama, Abdaya, Purizzuya, Hibiya, Elurama, Zinitabandi, Biryamasda, Nasabba, 13 men, the work group, ...temple \
				* -1350 BC EA 248:14, Say [to] the king, my lord, Sun and god: Message of Ya(shd)ata, the loyal servant of the king and the dirt at the feet of the king. I fall at the feet of the king, my lord, Sun and god, 7 times and 7 times. [9-22] May the king, my lord, know that everything the king, my [l]ord, gave to [his] servant, the men of Than[ak]a [have m]ade off with; they have slaughtered my oxen and driven me away. So I am now with Biridiya. May the King, my lord, take cognizance of his servant.[2] \
				* -1200 BC Taanach cuneiform tablet TT 433 = KTU 4.767, 12 cuneiform tablets Akkadian, including: Star(-like) gather the tree, let it be eaten! the sick/inflicted \
				* -0918 BC Pharaoh Shishaq mentions T. as one of the Israelite cities he destroyed in his campaign \
				<br />• <x>-1457 BC "Battle of Megiddo": Between -1479 -1425 BC New_Kingdom Dynasty #18 pharaoh #06 Thutmose_3 defeats a \
					Canaanite coalition led by the king of Kadesh. The Coalition included: \
					Canaanites Kadesh & Megiddo), Kingdom of Mitanni (Naharin), Hurrians. \
					This is described in the "Annals of Thutmose 3" by scribe Tjaneni. See: Psa 29:08 </x> \
				<br /> \
				<br />• -1350 BC Amarna_Tablet EA248 mention Taanach \
				<br /> \
				<br />• -1184 Deborah burns Hazor (Rudd), 273 years after\
				\
				Referencing Syria Kadesh: Psa 29:08. \
				Referencing Taanach: Joshua 12:21, Joshua 17:11 (Manassehites), Judges 05:19, 1Kin 04:12 (Solomons Officials), 1Chr 07:29 (Ephraimites). \
			',

		''
	],
	[ 'h2_070904',	/* 07_Judg0904_Abimilki_xxxxxxxxxxxx */			'07 Judg 09:04',	/* Judge #06

		'',

		'',

		'\
			Judges 9:4 Abimelech, Abibaal

			Abimelech, Amarna_Tablets
				during -1350 BC

				EA 146: "Abimilki of Tyre"
				EA 147: "A Hymn to the Pharaoh"
				EA 148: "The Need of Mainland Tyre"
				EA 149: "Neither Water nor Wood" (See: Haapi)
				EA 150: "Needed: Just One Soldier"
				EA 151: "A Report on Canaan" (See: Sea Peoples)
				EA 152: "A Demand for Recognition"
				EA 153: "Ships on Hold"
				EA 154: "Orders Carried Out" (See: Sidon mayor Zimredda)
				EA 155: "Servant of Mayati"

				045-067: Syria
				068-227: Lebanon, with the majority (068-140) being from Byblos
				227-380: Canaan, primarily written in Canaano-Akkadian

			See also:
				Gen 20:2	Abimelech king of Gerar
				Gen 26:1	Abimelech king of the Philistines at Gerar
				Judg 9:1	Abimelech the son of Jerubbaal
				2Sam 11:21	Abimelech the son of Jerubbesheth
				1Chr 18:16 Abimelech the son of Abiathar
			',

		''
	],
	[ 'h2_071208'	// 07_Judg1208_MedinetHabu_Reliefs */			'07 Judg 12:08',

		Gen 10:13 'and Pathrusim and Casluhim (from which came the Philistines) and Caphtorim.',

		'A "Medinet_Habu Wall Relief" with line of Peleset and Sherden prisoners.',

			// https://www.worldhistory.org/uploads/images/15282.jpg?v=1645473399
			// https://en.wikipedia.org/wiki/Caphtor

		'In -1175 BC, the "Battle of the Delta" was fought between \
			Egypt dynasty New Kingdom #20 pharaoh #02 Ramesses_3 and the "Sea Peoples". \
			One group of people recorded with the "Sea Peoples" in the Battle were the Peleset. \
			The Peleset (aka Pulasati, Pw-r'-s'-t) are identified with the Philistines. \
			<br /> \
			<br />Philistia was a confederation of five cities in the SW Canaan made up of Gaza, Ashkelon, Ashdod, Ekron, Gath. \
			Around -1200 BC Aegeans settled here and mixed with local Canaanites, becoming the "Peleset", or Philistines. \
			Philistines appear in historical records in Egypt & East Mediterranean areas. \
			They may be one of the ethnic groups known as the "Sea Peoples" \
			<br /> \
			<br /><b>The five known sources of the Peleset outside the Bible are: <b>\
				<quote> \
				<br /> \
				<br />• -1150 BC "Mortuary Temple" of Ramesses_3 in Medinet_Habu opposite modern city of Luxor. \
				It records the Denyen, Peleset (aka "P-r-s-t"), Shekelesh, Sherden, Teresh, Tjekker, Weshesh. \
				<br /> \
				<br />• -1150 BC "Papyrus Harris 1" (aka EA 9999) records the Denyen, Peleset (aka Pw-r-s-ty), Sherden, Tjekker, Weshesh. \
				Incidentally, in it Ramesses_3 claims to have captured hundreds of thousands of foreign slaves. \
				<br /> \
				<br />• -1150 BC "Rhetorical Stela" to Ramesses_3, Chapel C, at Deir el-Medina records the Peleset, Teresh. \
				<br /> \
				<br />• -1000 BC "Onomasticon of Amenope" records the Denyen, Lukka, Peleset, Sherden, Tjekker. \
				<br /> \
				<br />• -0900 BC "Padiisets Statue" inscription refer to trade between Canaan and the Peleset (Philistines). \
				</quote> \
			<br /> \
			<br />The scriptural origin of the Philistines, Caphtor, is generally linked to Crete. \
			<b>It has also been linked to the Egyptian location "Keftiu" and the Akkadian "Kaptara".</b> \
				<quote> \
				<br /> \
				<br />• "Kaptar" is mentioned in the "Mari Tablets" as far back as -1800 BC. \
				It references a ship from Caphtor that recieved tim from Mari. \
				<br /> \
				<br />• "Kabturi" is mentioned in "Ras Shamra Tablets" of Ugarit, Syria and may reference \
				a ship from Caphtor that was exempt from duty. \
				<br /> \
				<br />• K-p-t-r" is used in Ugaritic Amarna inscriptions and is understood to be Caphtor. \
				A poem uses "k-p-t-r" as a parallel for Egypt "H-k-p-t". \
				<br /> \
				<br />• "K-p-t-ȝ-r" used in the South Egypt Ptolemaic temple of Kom Ombo is considered the location of Caphtor. \
				<br /> \
				<br />• "Kftiw" is inscribed on the stone base of a statue during Egypt New Kingdom dynasty #18 pharaoh #09 Amenhotep_3. \
				It is in a list of Mediterranean ship stops near Cretan cities of Kydonia, Phaistos, and Amnisos. \
				This clearly shows that the term refers to the Aegean location. \
				</quote> \
			<br /> \
			<br />See also: Gen 10:14, 26:08, Exo 13:17, 15:14, 23:31, Josh 13:02, Judg 03:03,31, 10:06, \
				2Kin 16:09, Psa 60:08, 83:07, 87:04, 108:09, Isa 14:29, 15:01, 22:06, Jer 47:01, 48:31, Eze 25:15, \
				Joel 03:04, Amos 01:05, 09:07. \
			',

		'The Philistines have a historical presence that indicates their origin. \
			The "Medinet_Habu" reliefs are one of many that refer to this. '
	],
	[ 'h2_070102',	/* 07_Judg0102 EA224 use of "Cushan" */			'07 Judg 03:08'

		* Chapter #2 Judge #01 Othniel [ EA224, Kassite, Eriba_Adad, EA016 ]

		* Amarna_Tablets EA224 [ Judg 03:08 // EA224 clearly mentions Ku-zu-na

			Amarna_Tablets EA224

				"https://oracc.museum.upenn.edu/aemw/amarna/P270951?srch=s.8iR42a"

				r 016+ aš-šum (in) UD.KAM*.MEŠ (day) mku-su₂-na (Kusuna) lu₂a-bi-nu (forefather)

				written by Shamhuna king Shum_Adda
					mentions Ku-zu-na (a Canaanite variant of Cushan)

				Ball, J. C., "Expository Times", volume 21, +1910, page 192
				John Garstang, "Joshua Judges", Foundations of Bible History, +1931, pages 264
		]
	]
	[ 'h2_070102',	/* 07_Judg0102 Cushan_Rishathaim */				'07 Judg 03:10'

		// trifecta: name in Assyrian, contemporaneous matching theme, tone of EA016 letter

		* Cushan_Rishathaim means "Cushan the Twice Evil" [ Judg 03:10

			Mesopotamia king (Hebrew: melek aram, aka king of Aram-Naharaim)
				אֲרַם נַהֲרַיִם, ar-am nah-har-ah-yim, "exalted of the two rivers"
				אֲרָם, arawm, "exalted", (Syria)
				נָהָר, naw-hawr, "river"

				Gen 24:10, Deu 23:04, Judg 03:08, 1Chr 19:06, Acts 02:09, 07:02

			Aram king Cushan_Rishathaim
				כּוּשַׁן רִשְׁעָתַיִם, koo-shan rish-awthah-yim, H3573, "blackness wicked twice"
				כּוּשָׁן, koo-shawn, H3572, "blackness", Hab 03:07
				רִשְׁעָה, rish-aw, H7564, "wickedness"

			Cushan_Rishathaim in Kassite has a feminine form of "Kashsha_Rishat"
				linguistically similar to Cushan_Rishathaim
				J. C. Ball, "Expository Times", volume 21, +1910, page 192
				John Garstang, "Joshua Judges", Foundations of Bible History, +1931, page 264
				"https://archive.org/details/foundationsofbib0000gars/page/264/mode/2up"
		]

		* contemporaneous king [ Eriba_Adad seal shows worship of a double-headed griffin demon

			-1390 -1364 BC Assyria kingdom dynasty Adaside king #25 Eriba_Adad 1
				last king of this dynasty
				-1350 -1342 Aram_Naharaim king Cushan_Rishathaim reigns 8 years in Israel

				His royal seal has two winged griffin demons flanking a tree
					supporting a winged sun-disc and
					a double-headed griffin demon holding two griffin demons by their ankles
					Berlin VAT (Vorderasiatische Museum) 9009, from: "Winged Disks and Sacred Trees", by Diana Stein
					see also: impression on catalog 66, reproduced from Frankfort 1939b, figure 59
					07_Judg0316_Eriba_Adad_1_seal.jpg

			This may be the reason the Israelites knew him as Cushan the Doubly Wicked.
		]

		* Amarna_Tablets EA016 [ suggests Ashur_Uballit 1 prospered after fathers defeat

			A dynastic battle between Mitanni kings Tushratta & Artatama 2 sought support from the Assyrians.
			Eriba_Adad 1 defeat appears to have enabled his son (Ashur_Uballit 1) to consolidate the empire.
			Mid Assyria Empire king #01 was Ashur_Uballit 1.
			Ashur_Uballit 1 defeated the Mitanni king Shuttarna 3.
			Ashur_Uballit 1 was also the author of Amarna_Tablet EA016.
			It is possible the unusual tonal change in EA016 was caused by this historical transition,
				and initated by Eriba_Adad 1s defeat.
		]
	]
	[ 'h2_070102',	/* 07_Judg0102 use of Eglon */					'07 Judg 03:12'

		Eglon, Jericho site, homeric lock

		* Eglon in Assyrian text

			Note Eglon is also a place name as in Josh 10:03.

			Knut L. Tallqvist, "Assyrian Personal Names" (APN), +1914, Helsinki, page 95,
				"Acta Societatis Scientiarum Fennicae" (ASSF), volume 43, Number 1.
				"http://www.aina.org/books/assyrian-personal-names.pdf"
				AINA Assyrian International News Agency
				JADD: (Johns) Assyrian Deeds & Documents, by Reverend C. H. W. Johns.
				JADB: (Johns) Assyrian Doomsday Book, by Reverend Johns (containing Babylonian names?)

				Hebrew: עֶגְלוֹן, eg-lawn, "calf like", Strong H5700
				Assyria: Ik-la-nu, Ig-la-nu,
				hrab alani, JADD 627, R. 10 (B.C. 666)

			The name has extracultural testimony.
	]
	[ 'h2_070323',	/* 07_Judg0323 Unique door Homeric_Lock	*/		'07 Judg 03:23'

		Unique door bolting matches time, description, and wording

			-1300 BC "Homeric_Door" ("Homeric_Lock"), the type Ehud uses
				Diels, Hermann, "Antike Technik", +1920,
				Verlag (Publisher) BG Teubner, Leipzig & Berlin, page 49.
				"https://books.google.com/books?id=0nrZBLBEVSEC&pg=PA40&source=gbs_toc_r&cad=2#v=onepage&q&f=true"
				"https://archive.org/details/bub_gb_LoEAAAAAMAAJ/page/n55/mode/2up"

			Allows an attendant to lock the door from the outside.
				Apparantly dissapeared by -1200 BC

			-1000 BC, see: 2Sam 13:17-18 (bolt the door) Amnon & Tamar
				more typical bolting design eventually taken from Egypt

		Hebrew word "nol"
			means "bolted" when used as a verb
			means "leather strap" when used as a noun
	]
	[ 'h2_070331',	/* 07_Judg0331 Shamgar */						'07 Judg 03:31'

		03:31 After him (Ehud) came Shamgar the son of Anath,
			who struck down six hundred Philistines with an oxgoad;
			and he also saved Israel.

			Judg 03:31, 1Sam 13:21, Ecc 12:11, Acts 26:14
			מַלְמָד, mal-mawd, H4451, oxgoad
			דָּרְבוֹן, dor-bone, H1861, goad (spear)

		Shamgar, idiom, arrow, Egypt/BethAnath, oxgoad

		* "Shamgar" in Assyrian texts [ // in APN

			Shamgar is non-Semitic, and most likely Hurrian.

			-0883 -0859 BC NeoAssyria king #03 Ashurnasirpal 2
				"Sa-an-ga-ar" shar "Hatte"

			-0859 -0824 NeoAssyria king #04 Shalmaneser 3
				"Sa-an-ga-ar" shar "Hatte" almat "Garga-mish-a-a"
				"Sangar" king of the "Hittites" in "Carchemish"

			Knut L Tallqvist, APN "Assyrian Personal Names", +1914, Helsingfors
				ASSF "Acta Societatis Scientiarum Fennicae", Volume 43, Number 1, page 192

			https://www.jstor.org/stable/27913651?read-now=1&seq=7#page_scan_tab_contents
		]

		* Aram, Assyria, Hebrew idioms [ idiomatic variation suggests location, arrowhead

			idiomatic variation suggests location

				"Shamgar" (Hebrew: "sword")
				"Anath" (Hebrew: "answer")

				"Shamgar Ben Anath" may mean "Shamgar of the city Beth Anath".
					Josh 19:38, Judg 01:33 refer to "Beth Anath" in Naphtali.

				"Contributions to the Historical Geography of Palestine",
					"Annual of the American School of Oriental Research in Jerusalem",
					Volume 2/3, +1921, +1922, page 20.

			Lambert believed Anat was the goddess Hanat referenced in Mari & Suhum texts
		]

		* Anath arrowhead names [ // "Abed-Labeth, son of Anath", arrowheads

			Anath is the name of an adolescent warrior goddess in the Canaanite pantheon

			-1100 -0900 BC, arrowheads from Bethlehem, El_Khadr site, labeled with "Ben Anath" may suggest a warrior class

				"https://armstronginstitute.org/338-shamgar-v-the-philistines-evidence-for-the-biblical-account"

				see: F. C. Fensham, "Shamgar Ben Anath," JNES (Journal of Near Eastern Studies), Volume 20, +1961, pages 197-198
				see: J.T. Milik, "An Unpublished Arrow Head with Phoenician Inscription of the 11th-10th Century B.C.", BASOR 143, +1956 page 6
					BASOR (Bulletin of the American Schools of Oriental Research)
		]

		* Ben_Anath from Ramesses 2 [ // Ramesses 2 marries daughter to "Ben Anath"

				-1304 -1237 BC Egypt dynasty #11 pharaoh Ramesses 2 marraige announcement for daughter

					Ostracon, Louvre, number 2262
					Names and titles: Ramesses 2; Samontou (aka Simentu, son of the king)
					Iryt (wife); Benânet (father, superior of transport ships); Memphis

					-1304 -1237 BC Egypt pharaoh Rameses 2
					marries his daughter to Syrian sea captain "Ben Anath" as a reward for his service

				image [ "https://collections.louvre.fr/en/ark:/53355/cl010378465"

					flint Ostracon in Hieratic, black ink, Louvre Number 2262 (LP Inventory Number 331)
					Department of Egyptian Antiquities, acquired 1834

					James Breasted, "A History of Egypt", London, +1941, page 449
					J. Garstang, "The Foundations of Bible History: Joshua, Judges", London, +1931, page 287, ("https://www.jstor.org/stable/42707520?seq=2" )
					Eva Danelius, "Shamgar Ben Anath", JNES (Journal of Near Eastern Studies), 	Volume 22, +1963, page 193 ("https://www.journals.uchicago.edu/doi/epdf/10.1086/371731")
				]

				translation [ "https://archive.org/details/cataloguedesmanu00muse/page/202/mode/2up"

					Deveria, Theodule, "Catalogue of Egyptian manuscripts: written on papyrus, cloth, tablets and ostraca \
						in hieroglyphic, hieratitic, demotic, Greek, Coptic, Arabic and Latin characters \
						that are preserved in the Egyptian Museum of the Louvre, Paris",
						Ch. of Mourgues brothers, 1872, page 202, plate 11.4

					Item Inventory, 11.4 , number 2262, Anc no H 66 [ translation

						Ostracon in the form of a pebble or rolled siliceous stone,
							bearing five lines of hieratic writing, Haut (high) 0.082, Larg 0.012

						(Below is MLGs own inexperienced merging of the French & Egyptian translation.
							Scholars claim Banerti is BenAnath and that "Ariaita" is his reward for loyal service
							Note: Ramesses 2, aka Greek: Ozymandias, Usermaatre Setepenre
							Usermaatre Setepenre means: "Ras Powerful Justice" & "Chosen of Ra".)

						1 Lan 17, mois de Pharmouti, du roi "Ra-user-Maa" "Sotep-n-Ra".
						2 Du fils du Soleil, "Ra-mes-su" mer "Amon-neter-h'yqa-n" (Ramses II), vie!, sante! force!
						3 Ari-ai-ta, (?)  fille du chef de navire du navire Baner'ti
						4 Est la femme du royal fils "Si Montu", qui est en...
						5 de la demeure de "Ra-user-maa" "Sotep-n-Ra" (Ramses II) a Memphis

							Le prince Si Montu est le 23 fils de Ramses II, d'apres la liste du Ramesseum.
							Ce texts montre qu'il etait marie enl'an XLVII du regne de son pere.
							Mais le nom de sa femme ne se lit pas avec une entiere ceritude.
							Elle etait fille d'un simple chef de vaisseau.
							Cet ostracon peut avoir servi de billet de faire part.

						1 The 17th year, month of Emergence, of the king "Ras Powerful Justice" & "Chosen of Ra".
						2 From the son of the Sun, "Ramesses" beloved of "Amon God & Chief" (Ramses II),
							life!, health! strength!
						3 Ariaita, (?) daughter of the ships captain of the Banerti (BenAnath) ship
						4 is the wife of the royal son "Son of the WarGod/Wanderer", who is in...
						5 of the death of "Ras Powerful Justice" & "Chosen of Ra" (Ramses II) in Memphis

							Prince Si Montu was the 23rd son of Ramses II, according to the Ramesseum list.
							This text shows that he was married in the 47th year of his fathers reign.
							however, the name of his wife is not entirely certain.
							she was the daughter of a mere ships captain.
							This ostracon may have served as a marriage announcement.
					]
				]
		]

		* Ben_Anath from Ramesses 4 [ // Ramesses 4 inscription on Wady Hammamat

			J.Couyat-P. Montet, "Les inscriptions Hieroglyphiques et Hieratiques du Ouadi Hammamat",
				"Memoires IFAO du Caire", Volume 34, +1912, plate 4, No. 12 1. 17

				A "son of Anat" may be listed among a large group of thousands of Hapiru who were sent to work in quarries.

				"https://www.jstor.org/stable/27913651?seq=1"
				see: Eva Danlius, "Shamgar Ben Anath" JNES (Journal of Near Eastern Studies), Volume 22, +1963, pages 191-193
				see: N. Shupak, "New Light on Shamgar ben Anath", Bib 70, +1989, pages 517-525
		]

		* Beth_Anath in Galilee [

			fenced cities in the lot of Naphtali Josh 19:38 , Canaanites not driven out Judg 01:33

			Gal, Zvi, "Late Bronze Age in Galilee: A Reassessment",
				BASOR (Bulletin of the American Schools of Oriental Research), Volume 272, +1988 Nov, pages 79-84

			generally considered to be "BiIna" in the "Beit HaKerem Valley"
				archaeologists: Safrai, Albright, Neubauer, Abel, Alt, Saarisalo, Frankel
				probably situated at the mound of Jelamet el-BiIna, less than a mile southeast of the present site of BiIna

			Beth_Anath, aka "House of Anat"
				Anath was a Canaanite goddess linked to a Sumerian predecessor called Ninhursag
		]

		* oxgoad in other literature [ // oxgoad; possibilites

			-1200 BC "Merneptah Stele" claims that Philistine Ashkelon has been overcome
				this is a possible reference to a victory under Shamgar

			-0800 BC Greek myth describes that North Thrace (Sparta) leader Lycurgus
				may represent a distant memory of the account
				used an oxgoad to strike down an army of Bacchus
				some accounts claim this took place near Mount Carmel (Gills Exposition)
		]

		* oxgoad and 600 Philistines [ // oxgoad; miracle vs conventional

			* AI response:

				What image from Middle Kingdom Egypt Beni_Hasan tomb scene shows an oxgoad?

				-2040 -1782 BC, Beni_Hasan cemetery, Middle Kingdom Egypt tomb paintings
					show cattle prods
					Beni_Hasan is 12 miles south of Minya (near Hermopolis)

				-1914 -1843 BC Amenemhat 2 official Khnumhotep 2 "Asiatic Migration" image
					-1880 BC Deir el-Bersha, Middle Kingdom "Djehutihotep Tomb scene"
					shows an oxgoad

			* image: "https://bibilium.com/shamgar-judges-in-the-bible/"

				generally a spear tipped with an iron spike for prodding cattle
				some a foot long, some 10 foot long

			* considerations:

				may have been miraculous
				may have killed captured soldiers (Egypt pharaoh Rameses 3 has monuments showing Philitines being killed in this way)
				may have delegated (others may have killed these while Shamgar assumes the responsibility, like Khufu "building" the Great Pyramid)
				may have accumulated (kills may have accrued over time)
		]
	]
	[ 'h2_070950',	/* 07_Judg0950_Thebez_City */					'07 Judg 09:50'

		(Tubas)
		Judges 9:50
		"https://biblicalgeographicdotcom.wordpress.com/2013/11/02/thebez-tubas-west-bank-israel/"
	]
	[ 'h2_071707',	/* 07_Judg1707 EA252 use of "Labayu" */			'07 Judg 17:07'

		Amarna_Tablets: 20% Akkadian, 40% mixture, 40% Canaanite, Labaya

		Levi in EA252

			"https://oracc.museum.upenn.edu/aemw/amarna/P270946"

			o 003 um-ma (message) mla-ab-a-ya (Labʾaya) IR₃-ka (servant)

				Sakmu (Shechem) 'city-state' 'Man' Labaya (Levi?) to Pharaoh Amenhotep 3
				Jastrow claims Labaya is the Canaanite equivalent of Levi
				Josh 17:02 Shechem goes to Manasseh, Josh 20:07 designated as a Refuge_City
	]

	[ 'h4_090701',	/* 09_1Sam0701_Kiriath_Jearim */				'09 1Sam 07:01',	/* Ark stays 20 years

		aka "City of Forests"where "Kiriath" means "city",
		aka Kiriath_Baal, Baalah, Mahaneh_Dan, near Chesalon, Mount Jearim
		location: Abu Ghosh
		Josh 09:17 from occupation, 1st occurrence
		Josh 15:09 given to Judah, Josh 18:14 close to Benjamin
		1Sam 07:01 Ark moved from Beth_Shemesh to Kiriath_Jearim for 20 years (v2)
		1Chr 02:50 Caleb & Ephrathah > Hur > Shobal > Kiriath-jearim
	]
	[ 'h4_091702',	/* 09_1Sam1702_KhirbetQeiyafa_Ostracon */		'09 1Sam 17:02',

		'Saul and the Israelites assembled and camped in the Valley of Elah \
			and drew up their battle line to meet the Philistines.',

			// Battle with Goliath in Elah_Valley

		'The "Khirbet_Qeiyafa Ostracon".',

		'The "Khirbet_Qeiyafa Ostracon" was discovered in Building 2, Room B. \
			This is a 6 × 6.5 inch ostracon with the longest Proto Hebrew/Canaanite text ever found. \
			It has different translations due to the "proto" nature of the text. \
			However the bulk of translations suggest this writing dealt with protection for slaves and strangers. \
			<br /> \
			<br />The Valley of Elah, Ella Valley ("the valley of the terebinth", from the Hebrew: עמק האלה‎ Emek HaElah), or Wadi es-Sunt (Arabic: وادي السنط), is a long, shallow valley in the Shephelah area of Israel, best known from the Hebrew Bible as the place where David defeated Goliath (1 Samuel 17:2; 1 Samuel 17:19). It is home to several important archaeological sites, including those identified as the ancient towns of Azekah and Socho (1 Samuel 17:1). Rising up from the valley on its extreme southeast end lies the hilltop ruin Adullam, and on its north lie the ruins of the ancient fortress city of Khirbet Qeiyafa, which is identified with the ancient town of ShaAraim (1Sam 17:52).
			<br /> \
			<br />David builds is the Elah_Fortress, known as Tel "Khirbet_Qeiyafa".
			It is dated to -1000 BC near Beth_Shemesh in the "Valley of Elah". \
			This is West of Jerusalem, centered between Gath & Bethlehem. \
			<br /> \
			<br />See also: 1Sam 17:02, 21:09, 2Sam 08:01.
		',

		''
	],
	[ 'h4_092706',	/* 09_1Sam2706_Ziklag_Ruins */					'09 1Sam 27:06',

		'So Achish gave him Ziklag that day; therefore Ziklag has belonged to the kings of Judah to this day.',

		'"Tell esh-Sharia".',

		'The city of Ziklag (aka "winding") is near Gerar on the Besor River. \
			Numerous sites have been proposed for the biblical Ziklag. \
			Tell esh-Sharia is identified as Ziklag by most scholars. \
			Tell esh-Sharia is aka Tel Sera, Tel Sera, Tell esh-Sharia, Tell esh-Shariah, Tell esh-Sharia, Ziglag. \
			These include: Aharoni, Mazar, Kallai, Rainey, Naaman, and Seger. \
			<br /> \
			<br />• Josh 15:31 allocated to Judah \
			<br />• 1Sam 27:06 Achish gave David Ziklag \
			<br />• 1Sam 30:01 Amalekites raid Ziklag \
			<br />• 1Sam 30:26 David returns with spoils to Bethel, Ramoth, Jattir, Aroer, Siphmoth, Eshtemoa, Racal, Jerahmeelites, Kenites, Hormah, BorAshan, Athach, Hebron, and others \
			<br />• 2Sam 01:01 David stays in Ziklag 2 days \
			<br />• 1Chr 12:01 David’s Supporters in Ziklag \
			',

		''
	],

	[ 'h5_100204',	/* 10_2Sam0204_Bubastite_NameRing_106 */		'10 2Sam 02:04',

		'Then the men of Judah came and there anointed David king over the house of Judah.',

		'The "Bubastite_Portal" (aka "Shishak Relief") Name Ring #106 & #105',

		// https://www.bible.ca/archeology/bible-archeology-sheshonq-I-shoshenq-shishak-shishaq-bubastite-karnak-conquest-campaign-canaan-battle-relief-topographical-list-187-cities-conquered-name-rings-926bc.htm
		'The "Bubastite_Portal" records the military conquests of Egypt TIP dynasty #22 pharaoh #01 Shoshenq 1. \
			Shoshenq 1 (aka Shishak) reigned from -0945 -0924 BC, and battled Judah in -0926 BC (see: 1Kin 14:25, 2Chr 12:2). \
			<br /> \
			<br /> \
			',

		'\
			See also the notes for 1Kin 14:25 related to the "Bubastis Portal".'
	],

	[ 'h6_110210',	/* 11_1Kin0210_Davids_Tomb_xxxxxxxxxxxx */		'11 1Kin 02:10',

		'Then David slept with his fathers and was buried in the city of David.',

		'A proposed "Tomb of David" (aka T1) in the "City of David".',

		'The Tomb of David has been ceremonially located in the modern "Mount Zion" location of SouthWest Jerusalem. \
			However, the Bible clearly states that David’s Tomb lies in the "City of David", which is in SouthEast Jerusalem. \
			In 1913, Raymond Weil looked for the "Tomb of David" in the location identified as the "City of David" (aka Wadi Hilweh). \
			He found eight elaborate tombs at the south of Wadi Hilweh. \
			Other archaeologists consider them as strong candidates for the burial locations of the former kings of the city. \
			The largest of the tombs, called "T1", had a specific indented burial site.
			<br /> \
			<br /><b>Some verses related to David’s Tomb</b>\
				<fieldset class = "boxpad"><quote> \
				<br /><br />• 1Kin 2:10/1Chr 29:28 'Then David slept with his fathers and was buried in the city of David.'
				<br /><br />• 2Chr 33:14 Now after this he (Manasseh) built the outer wall of the city of David on the west side of Gihon, in the valley, even to the entrance of the Fish Gate; and he encircled the Ophel with it and made it very high. Then he put army commanders in all the fortified cities of Judah.
				<br /><br />• Neh 3:16 After him Nehemiah the son of Azbuk, official of half the district of Beth-zur, made repairs as far as a point opposite the tombs of David, and as far as the artificial pool and the house of the mighty men.
				<br /><br />• Acts 2:29 Brethren, I may confidently say to you regarding the patriarch David that he both died and was buried, and his tomb is with us to this day.
				</quote></fieldset> \
			<br /> \
			See: 2Sam 05:07 for a map of the "City of David". \
			Also see: 2Sam 7:16. \
			',

		'While we do not know for sure where David was buried, ...'
	],
	[ 'h6_110601',	/* 11_1Kin0601_Masoretic_Text_xxxxxxxxxxxx */	'11_1Kin 06:01',

		'Now it came about in the four hundred and eightieth year after the sons of Israel came out of the land of Egypt, \
			in the fourth year of Solomon’s reign over Israel, in the month of Ziv which is the second month, \
			that he began to build the house of the Lord.',

		'',

		'\ see l2_020108

			MT Masoretic_Text vs Septuagint

			-0966 Solomon builds Temple.

				New Kingdom dynasty #18
				• -1485 -1464 BC pharaoh #05 Hatshepsut
				• -1464 -1431 BC pharaoh #06 Thutmoses_3
				• -1431 -1406 BC pharaoh #07 Amenhotep_2
				• -1406 -1396 BC pharaoh #08 Thutmoses_4
				• -1396 -1358 BC pharaoh #09 Amenhotep_3
			',

		''
	],
	[ 'h6_110915',	/* 11_1Kin0915_xxxxxxxxxxxx */					'11_1Kin 09:15',  // DOUBTFUL

		Could King Solomon be the Ibni-Addu [or Yabni, or Jabin] king of Hazor
		as referred to in the Akkadian tablet ARM VI, 236?

		“One Akkadian tablet (ARM VI, 236, dated to the 18th century B.C.) recorded a shipment of
		tin to "Ibni-Addad king of Hazor." Translated from Akkadian into its West Semitic form
		"Ibni-Addad" becomes "Yabni-Haddad," and "Yabni" linguistically evolves into "Yabin /
		Jabin" in ancient Hebrew”.
	]
	[ 'h6_110928',	/* 11_1Kin0928_Ophir_Ostracon */				'11 1Kin 09:28',

		'They went to Ophir and took four hundred and twenty talents of gold from there, and brought it to King Solomon.',

			https://armstronginstitute.org/1026-the-ophel-pithos-inscription

		'',

		' \
			-0800 BC, Tell Qasile revealed an ostracon inscription reading: "Ophir gold to Bet Horon: 30 shekels" from 1946 excavation
			',

		''
	],
	[ 'h6_111201',	/* 11_1Kin1201_King_List */						'11 1Kin 12:01',	/* Kings List of the Divided Monarchy

		'Then Rehoboam went to Shechem, for all Israel had come to Shechem to make him king.',

		'A "King List" of the Divided Monarchy.',

		'
			The United Monarch included: Saul David, and Solomon.
			Additionally, there was:
			During the time of the Divided Monarchy:
			There are 20 recorded Judaic kings.
			There are 19 recorded Israeli kings.
			',

		''
	],
	[ 'h7_120813',	/* 12_2Kin0813_Lachish_Ostraca_02 */			'12 2Kin 08:13',

		'Then Hazael said, "But what is your servant, who is but a dog, that he should do this great thing?" \
			And Elisha answered, "The Lord has shown me that you will be king over Aram."',

		'The "Lachish_Ostraca #02".',

		'This article focuses on the phrasing and use of the word "dog".
			The Bible has a rich collection of phrases that connect the text to related culture, times, and customs.
			One such phrasing is to use the word "dog" to refer to ones humble status: as in:

			2Sam 9:8

			2Kin 8:13

			The "Lachish_Ostraca #02" uses these phrases.
			Additionally, this ostraca references the name of God (YHWH), & the person name Yaush (Joash).
			See also Lachish_Ostraca #06, and the phrasings of the Amarna_Tablets.
			',

		''
	]

	[ 'h7_120101',	/* 12_2Kin0101_Pottery_Shard_Assyrian */		'12 2Kin 01:01',

		'Now Moab revolted against Israel after the death of Ahab.'

			// "https://biblearchaeologyreport.com/2025/12/26/top-ten-discoveries-in-biblical-archaeology-in-2025/"

		'A "Moabite Inscription at Jericho.',

		'\
			During the Iron Age 2A period (-0960 -0840 BC), the Moabites likely controlled Jericho.
			Jericho was under Moabite control during the reign of Moab king Eglon.
			',

		'',
	],
	[ 'h7_121204',	/* 12_2Kin1204_SiloamPool_DamWall */			'12 2Kin 12:04',

		Huge Dam Wall from the Time of King Joash Unearthed in the Pool of Siloam (Aug. 2025)

		https://biblearchaeologyreport.com/2025/12/26/top-ten-discoveries-in-biblical-archaeology-in-2025/

		see: 2Kin 12:04, 09 / 2Chr 24:04, 08, 27
	],

	[ 'h8_121807',	/* 12_2Kin1807_Pottery_Shard_Assyrian */		'12 2Kin 18:07',

		'And the Lord was with him; wherever he went he prospered. \
			And he rebelled against the king of Assyria and did not serve him.',

			// https://biblearchaeologyreport.com/2025/12/26/top-ten-discoveries-in-biblical-archaeology-in-2025/

		'An "Assyrian Pottery_Shard".',

		'\
			"Dear king of Judah, send the tribute quickly by the first of Av \
				and if not the consequences will be severe." \
			',

		''
	]
	[ 'h8_121935',	/* 12_2Kin1935_Assyrian_Camp */					'12 2Kin 19:35',

		// https://www.patternsofevidence.com/2024/06/28/assyrian-camp-found-from-biblical-battle-fought-2700-years-ago/

		''

		'Ancient Assyrian military camps.',

		'In +2023 AD the NWU archaeologist Stephen Compton used modern mapping techniques to locate ancient Assyrian military camps. \
			His discoveries revealed a string of campaign sites for the invasion of Judah in -0700 BC. \
			A fortified military camp dating to the -0700 BC was identified as "Jebel el Mudawwara", \
			or "hill of the rounded camp". It is also identified with the ancient city of Nob. \
			The site matches the Lachish Mudawwara, with the remains of substantial oval walls around base & summit. \
			The "Jebel el Mudawwara" encampment leads right into Jerusalem where a confrontation took place. \
			<br /> \
			Evidence for the DOSA (Destruction of Sennacheribs Army) includes:
				* Taylor Prism (aka "Sennacherib Prism") \
				* Lachish Siege Ramps \
				* Herodotus "Histories", Book 2 (Euterpe), paragraph 141 \
				* Berossus from Josephus quotation in "Antiquities" 10:21 \
				* Assyrian military camp remains \
			<br /> \
			see also: 2Kin 19:35, 2Chr 32:21, Isa 37:36. \
			',

		'The Destruction of Sennacheribs Army has evidence in the discovery of Assyrian military camps.'
	]
	[ 'h8_122201',	/* 12_2Kin2203_Josiah_WidowsPlea */				'12 2Kin 22:01', 	// 2Chr 34:01, Jer 01:02, Zeph 01:01
	],
	[ 'h8_122212',	/* 12_2Kin2212_Asayahu_Seal */					'12 2Kin 22:12',

		// https://biblearchaeologyreport.com/2025/12/26/top-ten-discoveries-in-biblical-archaeology-in-2025/

		'Then the king commanded Hilkiah the priest, Ahikam the son of Shaphan, \
			Achbor the son of Micaiah, Shaphan the scribe, and Asaiah the king’s servant saying,'

		'',
		'',
		'',

		Belonging to Yed[a‛]yah, son of Asayahu.
		2 Kin 22:12, 2 Chr 34:20
	],
	[ 'h8_122330',	/* 12_2Kin2330_EgyptGreek_Pottery */			'12 2Kin 23:30',

		// https://biblearchaeologyreport.com/2025/12/26/top-ten-discoveries-in-biblical-archaeology-in-2025/

		Egyptian & Greek Pottery dating to the time of Pharaoh Necho was discovered at Megiddo.

		Archaeologists discovered this pottery from 2016 to 2022 in an area called "Area X".
		It is the largest Egyptian pottery assemblage ever discovered in the South Levant.

		-0610 -0595 BC, Egypt Late_Period dynasty #26 pharaoh #02 Necho 2

		2Kin 23:29-30 / 2Chr 35:24: Necho 2 defeats Judah king #16 Josiah at Megiddo. \

		Jer 46:09 Jeremiah appears to claim Greek troops from Lydia fought with Pharaoh Necho

	],
	[ 'h8_122527',	/* 12_2Kin2527_AmelMarduk_Brick */				'12 2Kin 25:27',	// 24 Jer 52:31
	],

	[ 'h0_142609',	/* 14_2Chr2609_Broad_Wall */					'14 2Chr 26:09',

		'Moreover, Uzziah built towers in Jerusalem at the Corner Gate and at the Valley Gate and at the corner buttress and fortified them.'

		https://biblearchaeologyreport.com/2024/12/27/top-ten-discoveries-in-biblical-archaeology-in-2024/
		2. Authors of New Radiocarbon Study Claim to Provide Absolute Chronology for Jerusalem (May 2024)

		'One of the major findings was that Jerusalem was heavily populated and urbanized in the 12h through 10th centuries BC.
			This would align with the biblical description of Jerusalem, particularly during the days of David and Solomon.
			Another conclusion was that the Broad_Wall, aka Hezekiahs_Wall, was likely built during the reign of Uzziah.
			',

		''

		// Uzziah also has an Assyrian Inscription and two bulla
		TP3 annals mention "Ya'uda" king "Azaria'u", possibly "Judah king Azariah"
			TP3 annals have two references to an Azariah, but not related to Judah
			Nadav Naaman claims the fragment is Sennacheribs and refers to Hezekiah

		Azariah appears in two unprovenanced iconic stone seals
			1st discovered 1858 inscribed l’byw ‘bd / ‘zyw, "[belonging] to ’Abiyah, minister of ‘Uziyah"
			2nd discovered 1863 inscribed lšbnyw ‘ / bd ‘zyw, "[belonging] to Shubnayah, minister of ‘Uziyah"
	]
	[ 'he_150310',	/* 15_Ezra0310_Trumpeting_Inscription */		'15 Ezra 03:10',

		'The "Trumpeting Inscription" of the 2nd Temple".',

			// "https://biblearchaeologyreport.com/2019/01/19/top-ten-discoveries-in-biblical-archaeology-relating-to-the-new-testament/"
			// Ezra 03:10 / Neh 04:18 / 2Sam 06:15

		'So the builders laid the foundation of the temple of Yahweh. Then the priests stood in their apparel with trumpets, and the Levites, the sons of Asaph, with cymbals, to praise Yahweh according to the directions of King David of Israel.',

		'\
			1968, archaeologist Benjamin Mazar discovered a 3-foot long stone block among the rubble that had been thrown down from the Temple Courts above during the destruction of the Temple in AD 70.
			Found at the base of the Temple Mount
			"To the place of trumpeting"

			see also

				<br />• 2Sam 06:15/1Chr 13:08 UM Israel king #2 David, Ark \
				<br />• 1Chr 15:24 UM Israel king #2 David, Ark_Tent \
				<br />• 1Kin 01:34 UM Israel king #3 Solomon \
				<br />• 2Chr 05:13/07:06 UM Israel king #3 Solomon, Ark_Temple \
				<br />• 2Chr 13:14 Judah king #01 Rehoboam \
				<br />• 2Chr 15:14 Judah king #03 Asa \
				<br />• 2Chr 20:28 Judah king #04 Jehoshaphat \
				<br />• 2Kin 09:13 Israel king #10 Jehu \
				<br />• 2Kin 11:14/2Chr 23:13 Judah king #08 Jehoash \
				<br />• 2Kin 12:13 Judah king #08 Jehoash, repairs \
				<br />• 2Chr 29:26 Judah king #13 Hezekiah \
				<br />• Ezra 03:10 Governor Ezra \
				<br />• Neh 04:18 Governor Nehemiah \

		'shows it is from where priests blew the trumpets'
	],
]

OT_poet [

	[ 'pt_1900101',	/* 19_Psa00101_Great_Psalm_Scroll */			'19 Psa 001:01',

		'',

		'The "Great_Psalm_Scroll" (aka 11Q5).',

		'The Book of Psalms (aka Psalter, Hebrew: תְּהִלִּים‎, Tehillim, meaning: "praises") \
			is part of the third section of the Tanakh (Hebrew Bible) called Ketuvim (aka "Writings"). \
			Since the Psalms includes poetry from the time of David to the Exile, dating the Psalms is difficult. \
			<br /> \
			<br /> \
			Psalm 29 is considered one of the oldest Psalms because of imagery shared with local Canaanite writings.
			In particular, the Canaanite Baal Cycle is suggested as an influence, \
			leading some scholars to suggest Psalm 29 could date to -1000 BC or even earlier. \
			Others Psalms, such as 137, are clearly after the Babylonian exile, dating them to +0500 BC. \
			<br /> \
			<br />The "Great Psalm Scroll" was discovered in the Dead Sea Scrolls in the Qumran caves. \
			This document is also known as 11Q5, 11QPsa, or the Cave 11 Psalms Scroll. \
			It was copied about +0030 to +0050 AD, and is written in Biblical Hebrew. \
			The "Great Psalm Scroll" is made of dark yellow animal hide about 1 mm thick. \
			It had 5 sheets of leather sewn together at a lenth of 14 feet long. \
			<br /> \
			<br />It contains apocryphal & canonical psalms, and \
			added prose compositions known as David’s Compositions. \
			It references 364 songs, one for each day of the year. \
			It includes decription claiming David composed 3,600 psalms, 364 songs for every daily sacrifice. \
			It goes on to say 52 songs were for the weekly Sabbath sacrifice, and totals about 4050 psalms. \
			',

		''
	],
	[ 'pt_1910607',	/* 19_Psa10607_RedSea_xxxxxxxxxxxx */			'19 Psa 106:07',

		Red Sea				Gulf of Aqaba / 7 more

		Exo 10:19, 13:18, 15:4,22, 23:31
		Num 14:25, 21:4, 33:10,11
		Deu 1:40, 2:1, 11:4
		Psa 66:06, 106:7,9,22, 136:13,15
	]
	[ 'pt_200122',	/* 20_Pro0120_Wisdom_Personification */			'20 Pro 01:20',

		'Wisdom shouts in the street, She lifts her voice in the square; ',

		'',

		'Throughout history Wisdom has been represented by people. \
			A typical personification of Wisdom was as a female figure. \
			This typology is reinforced in Pro 8 & 9, Matt 11:19, and Luke 7:35. \
			<br /> \

			"Book of Sirach" aka "Ecclesiasticus"
				Sirach 51:13-30 has a vivid personification of Wisdom as a female figure
				-0196 -0175 BC Yeshua ben Eleazar ben Sira (Ben Sira) written approximately 180

				• Zeus 1st wife Metis according to Hesiods Theogony was the embodiment of wisdom
				• Muses (Musagetes) were personifications of the sciences
				• Minerva or Pallas was a personification of wisdom by the Romans
				• In the Nag Hammadi library Sophia is described as the mother & source of gnosis (knowledge)
				• In Ancient Egypt, Thoth was married to Maat (aka order, truth), who introduced wisdom to the nation
				• In Mahayana Buddhism, wisdom is often personified by the Bodhisattva Manjushri
				• In Confucian thought, wisdom (zhi, 智) is closely linked to ethical living and social harmony.
			<br /> \
			<br />See also: 1Kin 4:32, Ecc 02:03,
			',

		''
	],
]

OT_proph [

	[ 'f5_235511',		/* 23_Isa5511_Scripts_xxxxxxxxxxxx */		'23 Isa 55:11',

		'So will My word be which goes forth from My mouth; It will not return to Me empty,
			Without accomplishing what I desire, And without succeeding in the matter for which I sent it.',

			// Isa 55:11, John 10:35 Canon? Scripts?, '23 Isa 55:11',

		Canon

			"https://www.bible.ca/b-canon-councils-synods-canons.htm"

			criteria

				1 written by an apostle vs. non-apostles; written during the apostolic age
				2 read aloud in weekly assemblies
				3 consistent, contradiction free
				4 reinforced the consensus of belief, especially by the greater number of churches

			+0100 AD All 27 books of NT circulated and accepted as authoritative except:
				Hebrews, 2Peter, James, 2John, 3John, Revelation. (Revelation had not been distributed yet)
				+0200 AD Muratorian canon does not include James, Hebrews, 3John, 1Peter, 2Peter, but adds Revelation, & Apocalypse of Peter
				+0225 AD All books were quoted by church fathers.
				+0397 AD Council of Carthage officially declares the canon

			+100 +0400 AD All "disputed" books accepted.
				+0367 AD The first list that matches our current canon is in "Alexandria Saint Athanasius Paschal Letter".
				Some churces occasionally read: Shepherd of Hermas, 1 Clement, Didache, Epistle of Barnabas, Wisdom of Solomon, Apocalypse of Peter

		Scripts

			https://www.bible.ca/manuscripts/Septuagint-LXX-Hebrew-ancient-earliest-writing-Bible-scripts-alphabets-origin-Mosaic-heiroglyphic-Paleo-Aramaic-Masoretic-Jewish-Greek.htm

			-1859 -1050 BC	Hieroglyphic Hebrew, invented by Joseph
			-1050 -0458 BC	Paleo-Hebrew, standardized by Samuel
			-0458 +0200 AD	Aramaic Hebrew ("Square Hebrew"), adopted by Ezra
			+0600 +1000 AD	Masoretic Hebrew ("Vowelled Hebrew"), invented by Masoretes
				The Jews outside Judea spoke Greek only, until Hebrew was reintroduced in +1915 AD

				-1859 BC Jacob dies
					Shortly after -1859 BC, Joseph, Ephraim, and Manasseh created "the world’s first & oldest alphabet".
					They selecting 22 of the 765 Egyptian hieroglyphic pictograms as a foundation of written Hebrew.

					-1920 -1874 BC Sesostris_1 In Rudds timeline, is the dreaming pharaoh.
								-1899 -xxxx BC Joseph was sold into slavery at Timnah
												Gen 38:25-26 Judah & Tamar introduce signet ring
								-1886 -1879 BC 7 abundant years, Joseph made ruler the year Isaac died
								-1879 -1872 BC 7 famine years
					-1878 -1843 BC Amenemhat_2 coregency with Sesostris_1
								-1859 BC Jacob dies, alphabet created?
					-1845 -1837 BC Sesostris_2 coregency with Amenemhat_2
					-1837 -1798 BC Sesostris_3 BM10012
					-1818 -1773 BC Amenemhat_3
								-1806 BC Joseph dies
	]
	[ 'f5_242620',		/* 24_Jer2620_Lachish_Ostraca_03 */			'24 Jer 26:20-23',

		'Indeed, there was also a man who prophesied in the name of the Lord, Uriah the son of Shemaiah from Kiriath-jearim; \
			and he prophesied against this city and against this land words similar to all those of Jeremiah. \
			21 When King Jehoiakim and all his mighty men and all the officials heard his words, \
			then the king sought to put him to death; but Uriah heard it, and he was afraid and fled and went to Egypt. \
			22 Then King Jehoiakim sent men to Egypt: Elnathan the son of Achbor and certain men with him went into Egypt. \
			23 And they brought Uriah from Egypt and led him to King Jehoiakim, \
			who slew him with a sword and cast his dead body into the burial place of the common people.',

		'The "Lachish_Ostraca #03".',

		'\
			Jer 26:20-23
			references YHWH, Hoshaiah, Coniah son of Elnatan, Hodaviah son of Ahijah, Tobiah, Uriah, Shallum son of Jaddua

			',

		''
	],
	[ 'f5_243212',		/* 24_Jer3212_BaruchBenNeriah_Seal */		'24 Jer 32:12',

		'and I gave the deed of purchase to Baruch the son of Neriah, the son of Mahseiah, \
			in the sight of Hanamel my uncle’s son and in the sight of the witnesses who signed the deed of purchase, \
			before all the Jews who were sitting in the court of the guard.',

			// "https://armstronginstitute.org/228-baruch-jeremiahs-scribe-proved"
			// "https://www.bible.ca/bulla/bible-bulla-jeremiah-clay-bullae-inscription-Belonging-to-Baruch-Berechiah-Son-of-Neriah-The-scribe-Jer-36-4-1975-1996ad-Reuben-Hecht-israel-museum-605bc-forgery-fake.htm"

		'The "Baruch_BenNeriah" Seal.',

		'\
			Considered by some to be a forgery.

			Supporters on both sides.

			See also: Jer 32:12,16, 36:04,08,14,32, 43:03,06, 45:01, 51:59 (Seraiah). \
			',

		''
	],
	[ 'f5_243406',		/* 24_Jer3406_Lachish_Ostraca_04 */			'24 Jer 34:06-07',

		'Then Jeremiah the prophet spoke all these words to Zedekiah king of Judah in Jerusalem \
			7 when the army of the king of Babylon was fighting against Jerusalem and \
			against all the remaining cities of Judah, that is, Lachish and Azekah, \
			for they alone remained as fortified cities among the cities of Judah.',

			// https://en.mida.org.il/2018/03/30/israeli-attractions-tel-lachish/

		'The "Lachish_Ostraca #04".',

		' \

			The letter was written by Hoshaya, a junior commander stationed in a nearby city to his commander Yaush, who was stationed on Lachish. Hoshaya informs Yaush that Azeka, a town to the north of Lachish has been destroyed by the Babylonians.

			Jer 34:6-7; 6:1, references YHWH, Semachiah, Shemaiah, Fire Signals of Azekah
			',
		''
	],
	[ 'f5_243802',		/* 24_Jer3802_Lachish_Ostraca_09 */			'24 Jer 38:02',

		'',

		'The "Lachish_Ostraca #09".',

		' \
			Jer 38:1; 37:3, references YHWH, & Shelemiah
			',

		''
	],
	[ 'f5_243804',		/* 24_Jer3804_Lachish_Ostraca_06 */			'24 Jer 38:04',

		'Then the officials said to the king, "Now let this man be put to death, \
			inasmuch as he is discouraging the men of war who are left in this city and all the people, \
			by speaking such words to them; for this man is not seeking the well-being of this people but rather their harm."',

		'The "Lachish_Ostraca #06".',

		' \
			Jer 38:4-6, references YHWH, & Yaush
			',

		''
	],
	[ 'f5_244310',		/* 24_Jer4310_BabylonEgypt_Invasion */		'24 Jer 43:10',

		'Thus says the LORD of hosts, the God of Israel: Behold, \
			I will send and take Nebuchadnezzar the king of Babylon... \
			He shall come and strike the land of Egypt.',

			// "https://biblearchaeologyreport.com/2024/09/27/top-ten-discoveries-related-to-the-book-of-jeremiah/"
			// 8. Evidence of Nebuchadnezzar’s Invasion of Egypt
			// https://www.livius.org/sources/content/mesopotamian-chronicles-content/

		'Babylonian Chronicle BM_33041',

		'\
			In -0568 BC, NeoBabylon dynasty #10 king #02 Nebuchadnezzar_2 was in his 37th year or reigning. \
				In that year , military campaign to Egypt \

				The 37th year, Nebuchadnezzar, king of Babylon marched against Egypt to deliver battle. Amasis…of Egypt, called up his army.

			Babylonian Chronicle BM_33041
				Acquisition date 1878, CC BY-NC-SA 4.0

			The "Elephantine Stela of Amasis" describes an invasion of Egypt
				(ie. 567 BC); it is generally agreed that this refers to Nebuchadnezzar’s campaign.
				The enemy of Egypt is described as
				"attacking the land, they cover every path… their hearts plot to overthrow our country;"
				the stele goes on to describe the enemy causing "harm in the cities and districts."
				could be Apries?
				https://istina.msu.ru/media/publications/article/1e3/4f2/2758543/The_Elephantine_Stela_of_Amasis_Endl.pdf
			Victory Stele of Amasis, Cairo 13/6/24/1
				-0570 -0526 BC Egypt Late_Period dynasty #26 pharaoh #05 Amasis 2
				http://www.egyptomaniak.gr/Various%20Texts_N/D26-30/Elephantine.html
			',

		''
	],
	[ 'f5_262910',		/* 26_Eze2910_Migdol_xxxxxxxxxxxx */		'26 Eze 29:10',

			Eze 29:10, 30:06 Migdol to Syene (Aswan)

			Jer 44:1, Eze 29:10, 30:06 point to cities in the Egypt North Delta.
			Proponents of Rammesside Exodus link Migdol to Pharaoh Seti 1 at Karnak from Papyrus Anastasis 5, 20:2-3
			Ramesses_3 at Medinet Habu also implies this
			Migdol of Menmaatre (Seti 1) is possibly Tell el-Borg site T-211 has been identified as possible location for this Migdol
			https://www.bhjournal.au/ojs/index.php/bhjournal/article/view/146/134

			Compare this North Egypt Migdol to possible South Delta Migdol in Exo 14:02, Numbers 33:07.

			See also: Jer 44:1, 46:14, Eze 29:10, 30:06
	]
	[ 'f5_270202',		/* 27_Dan0202_Belshazzar_YBC39 */			'27 Dan 02:02',

		'Then the king gave orders to call in the magicians, the conjurers, \
			the sorcerers and the Chaldeans to tell the king his dreams. \
			So they came in and stood before the king.',

			// https://biblearchaeologyreport.com/2022/08/18/top-ten-discoveries-related-to-the-book-of-daniel/
			// https://biblearchaeologyreport.com/2024/01/19/belshazzar-an-archaeological-biography/
			// https://cdli.mpiwg-berlin.mpg.de/pubs/daily_tablets/YBC_CDLI_039-5ce8493ddd312.jpg

		'The "YBC 39".',

		'The "YBC_CuneiformLetter_39" (Yale Babylonian Collection #39) is a Cuneiform Letter discovered in +1915 AD. \

				Yale Babylonian Collection 1 (1915), Plate No. 39 is a Cuneiform Letter.
				It reads:

					In the month Tebet, day 15th, year 7th
					of Nabonidus, king of Babylon, ShumukIn
					says as follows :
						the great star, Venus,
						Kaksidi, the moon, and the sun
						in my dream I saw, and for
						favor of Nabonidus, king of Babylon,
						my lord, and for favor
						of Belshazzar, the son of the king,
						my lord, may my ear attend to them.
					On the 17th day of Tebet, year 7th
					of Nabonidus, king of Babylon, ShumukIn
					says as follows :
						The great star
						I saw, and the favor
						of Nabonidus, king of Babylon,
						my lord, and the favor of Belshazzar,
						the son of the king, my lord, may my ear attend.

				7 A.T. Clay, Yale Babylonian Collection I (1915), Plate No. 39, Translated on p. 55
					https://babylonian-collection.yale.edu/sites/default/files/files/YOS-1%20CLAY%20A_%201915.pdf

			https://cdli.earth/cdli-tablet/671
				YBC: Highlights 39 (2023-12-02)
				YPM BC 018015, YBC 3950 (aka P305262)
				This clay tablet documents four men in Uruk Eanna Temple prison who report prisoner Dummuqu for
				"pronouncing treasonous words against the king (the Persian ruler Cambyses) inside the prison."

			Dan 2: magicians, conjurers, sorcerers (Dream Statue)

			Dan 3: Plain of Dura (Gold Idol)

			Dan 4: Kings Madness

			Dan 5: Belshazzars Feast, v5 Writing on the Wall, v12 Daniel offered for interpreting

			Dan 6: Lions Den: Inviolable Laws?
			',

		''
	],
	[ 'f5_270433',		/* 27_Dan0433_Nabonidus_Prayer */			'27 Dan 04:33',

		Prayer of Nabonidus (DDS, 4QprNab = 4Q242 Frags. 1-3)

		two kings of Babylon, the first and last, went mad fulfilling Jer 25:16.
	]
	[ 'fm_300907',		/* 30_Amos0907_National_Migration */		'30 Amos 09:07',

		'Are you not as the sons of Ethiopia to Me, O sons of Israel? declares the Lord. \
			Have I not brought up Israel from the land of Egypt, And the Philistines from Caphtor, \
			and the Arameans from Kir?',

		'Examples of "National_Migration".',

		'This verse shows a fascinating collection of national migration in a single place. \
			This may be a complement to the "Heritage of Nations" in Psa 111:6.
			<br /> \
			<br />The "Land of Kir" is the place that NeoAssyria king #10 Tiglath_Pileser_3 carried Arameans after defeating AramDamascus. \
			This "Kir" is situated east of the Euprates or the Tigris River.
			However, Kir’s location is not absolutely known. Some scholars suggest Kir is:
			<br /> \
			<br />• a variant of Cush (Susiana), on the south of Elam
			<br />• a location at Carma on banks of the Mardus River in Iran
			<br />• an area on the Kar River in the North Armenia
			<br />• the city Ihi Dekirah near Hit in Iraq
			<br /> \
			<br />If the last is correct, the ability to control Nineveh after Tiglath_Pileser_1 conquered the Arameans \
			would have powerful symbolic meaning of restoration.
			<br /> \
			<br />For the Israeli exodus from Egypt, see notes for Exodus. \
			<br />For the Philistine migration during the Bronze age collapse, see the notes for Gen 10:14 & Judg 12:08. \
			<br />For the Aramean migration of Kir, see also: 2Kin 16:9, Isa 15:1, 22:6, Jer 48:31, Amos 01:05, 09:07. \
			',

		'Amos shows a prescient awareness of international migrations in this verse.'
	]
	[ 'fm_320303',		/* 32_Jon0303_Nineveh_Gates */				'32 Jon 03:03',

		'So Jonah arose and went to Nineveh according to the word of the Lord. \
			Now Nineveh was an exceedingly great city, a three days’ walk.',

			// https://madainproject.com/gates_of_nineveh

		'',

		'\

			Mashki Gate
			Nergal Gate
			Adad Gate
			Shamash Gate
			Halzi Gate
			',

		''
	]
	[ 'fm_330101',		/* 33_Mic0101_Moresheth_Gath */				'33 Mic 01:01',

		'The word of the Lord which came to Micah of Moresheth in the days of \
			Jotham, Ahaz and Hezekiah, kings of Judah, which he saw concerning Samaria and Jerusalem.',

		'',

		'\
			Jer 26:18, Mic 1:1,14 Micah of Moresheth (aka Moresheth-gath "possession of Gath") \
			Moresheth Gath« was the old name of the site before becoming part of Judah at the end of the 9th century BCE, when the Judahite rulers renamed it Azekah. \
			It may also be the city Muchrashti,[9] mentioned in the Amarna letters,[12] and not coincidentally, as the town was located on an important route to Egypt and the south, explaining its fortification by Rehoboam.[13]
			Its strategic location led to its capture by Sennacherib in his attack on Judah in 701 BC.[14] Centuries later, both Vespasian and Saladin camped nearby on the eve of sacking Jerusalem.[15]
			',

		''
	],
	[ 'fm_330506',		/* 33_Mic0506_Calah_Clay_Brick */			'33 Mic 05:06',

		'They will shepherd the land of Assyria with the sword, The land of Nimrod at its entrances; \
			And He will deliver us from the Assyrian When he attacks our land And when he tramples our territory.',

		'A "Clay_Brick" from Calah (Nimrod).'

		'\
			<br /> \
			<br /> \
			9,1 Clay_Brick
			-0858 BC Calah (Nimrod; Gen 10:11), Shalmaneser_3, Tukulti_Ninurta_2, AssurNasirPal_2
			',

		''
	],
]

NT_newt [

	[ 'ng_400211',		/* 40_Matt0211_Gold_Frankincense_Myrrh */	'40 Matt 02:11',

		/*

			"https://biblearchaeologyreport.com/2023/12/21/top-ten-discoveries-related-to-christmas/"
			"https://biblearchaeologyreport.com/2022/12/22/who-were-the-magi/"
		*/

		'And going into the house they saw the child with Mary his mother, \
			and they fell down and worshiped him. \
			Then, opening their treasures, they offered him gifts, gold and frankincense and myrrh.',

		'Nabatean examples of "Gold, Frankincense, Myrrh".'.

		'\
			The magi, or wise men, that presented Jesus with "Gold, Frankincense, & Myrrh", \
				were likely Babylonian Astrologers, Persian Priests, or Nabataean Merchants. \
			',

		''
	],
	[ 'ng_400828',		/* 40_Matt0828_Gadarenes_xxxxxxxxxxxx */	'40 Matt 08:28',

		Demoniacs in the land of the Gadarenes
		Gadarenes/Gerasenes

		Matt 08:28-34, Mark 05:01-20, Luke 08:26-39

	],
	[ 'ng_401434',		/* 40_Matt1434_Gennesaret_xxxxxxxxxxxx */	'40 Matt 14:34',

		Matt 14:34, Mark 06:53 / Luke 05:01, Kinneret
	]
	[ 'ng_401701',		/* Transfiguration? */						'40 Matt 17:01', ?

		Mount Tabor (1886 feet high, SW of Galilee)
			Between +0185 +0253 AD, Origen early Christian scholar and theologian from Egypt, Alexandria referenced Psa 89:12.
			Judg 04:06, Jer 46:18, Psa 89:12

		Mount Hermon (9232 feet high, NE of Galilee) is suggested because
			it is near Caesarea Philippi (Matt 16:13, Mark 8:27), where the previous events took place
			it is the highest site in the area.
			see Psa 042:06

		Caesarea Philippi
			Banias is a site in the Golan Heights near a natural spring

		Matt 17:01-09, Mark 09:02-10, Luke 09:28-36

		2 Peter 1:16-18, John 1:14?
	]
	[ 'ng_402223'		// 40_Matt2223_Sadducees? */				'40 Matt 22:23',

		' On that day some Sadducees (who say there is no resurrection) came to Jesus and questioned Him,',

			// https://www.jerusalemperspective.com/22937/

		'',

		'The Sadducees were a Jewish sect from -0200 BC to +0070 AD.
			The Sadducees are compared in contemporary sources with Pharisees and the Essenes.

			Antiquities 18.1.2
				The Jews had for a great while had three sects of philosophy peculiar to themselves; the sect of the Essens, and the sect of the Sadducees, and the third sort of opinions was that of those called Pharisees; of which sects, although I have already spoken in the second book of the Jewish War, yet will I a little touch upon them now.

			Antiquities 18:16
				The Sadducees hold that the soul perishes along with the body. (Josephus, Antiq. 18:16).

			Mishnah, Yadayim 4:7, 8
				The Sadducees say, "We vehemently object to you, O you Pharisees, because you..."
				The Pharisees say, "We vehemently object to you, O you Sadducees, because you..."


			See also: Matt 03:07, 16:01; Matt 22:23 / Mark 12:18 / Luke 20:27. \
			',

		''
	],
	[ 'ng_402701',		/* 40_Matt2701_Papyrus_Cotton */			'40 Matt 27:01',

		'Now when morning came, all the chief priests and the elders of the people conferred together against Jesus to put Him to death;',

		// https://www.sci.news/archaeology/papyrus-cotton-13616.html

		'The "Papyrus_Cotton".',

		'Dated to about +0120 AD, a Nabataean papyrus was discovered in the caves of the Judaean desert. \
			The papyrus contained legal text from the time Judea was controlled by +0117 +0138 AD Roman emperor #14 Hadrian. \
			<x>The document included 133 lines with notes a prosecutor would use for a trial before Roman officials.</x> \
			<br /> \
			<br />The court case referenced the defendants Gadalias and Saulos who forged documents to avoid taxes from selling and freeing slaves. \
			The papyrus says that Saulos and his father, a Jewish family, owned multiple slaves. \
			The document does not tell the case resolution, which may have been interrupted by the Bar Kokhba rebellion. \
			The rebellion may have caused the writer to discard the document in the caves of Judaea. \
			It sat for nearly two millennia with other Dead Sea Scrolls. \
			<br /> \
			<br />See:
			<br />Matt 26:57 / Mark 14:53 / Luke 22:66 / John 18:13, trial before Annas & Caiaphas
			<br />Matt 27:01 / Mark 15:01 / Luke 23:01 / John 18:28, trial before Pilate
			',
		The Papyrus_Cotton is the best-documented Roman court case from Judaea apart from the trial of Jesus.\
			It presents a contextual example for us to see Jesus trial.'
	],
	[ 'ng_402726',		/* 40_Matt2726_Tacitus_Christ */			'40 Matt 27:26',

		'Then he released Barabbas for them; but after having Jesus scourged, \
			he handed Him over to be crucified.',

		'',

		'\
			Tacitus

			See: Matt 27:26, Mark 15:15, Luke 23:23, John 19:16

			See also: Acts 2:36, Rom 6:6, 1Cor 1:13, 2Cor 13:4, Gal 2:20, Rev 11:8
			',

		'',
	]
	[ 'ng_402813',		/* 40_Matt2813_Nazareth_Inscription */		'40 Matt 28:13',

		'The "Nazareth Inscription" .',

		'and said, You are to say, "His disciples came by night and stole Him away while we were asleep." \
			14 And if this is heard before the governor, we will win him over and keep you out of trouble. \
			15 And they took the money and did as they had been instructed; \
			and this story was widely spread among the Jews, and is to this day.',

		'The "Nazareth Inscription" is an edict of Caesar dating to the reign of Claudius +0041 +0054 AD. \

			It imposes a death penalty in Israel for anyone caught moving bodies from family tombs, and specifically “sepulcher-sealing tombs,” such as the one Jesus was buried in.

			In 1878, Wilhelm Froeher acquired a marble slab bearing a Greek inscription from Nazareth.  When he died, his collection was acquired by the Paris National Library, where it was “rediscovered.”
			',

		''
	],

	[ Jews who put Jesus to death have never denied even his claim to be the Messiah (BT Sanhedrin 43a). ]
	[ 'ng_410426',		/**/ ng_410949 (positional?)				'41 Mark 04:26',

		Mark 04:26-29 Parable of the seed growing secretly, 09:49-50 Salt with fire
	]
	[ 'ng_410711',		/* 41_Mark0711_Corban_Inscription */		'41 Mark 07:11',

		'but you say, "If a man says to his father or his mother, \
			whatever you might benefit from me is Corban (that is to say, given to God)",',

		'The "Corban_Inscription".',

		'\

			see also: Lev 27:28, Judg 11:31, 2Sam 24:24/1Chr 21:24, Matt 15:5, Mark 07:11
			',

		'',
	],
	[ 'ng_411606',		/* 41_Mark1606_Testimonium_Arabic */		'41 Mark 16:06',

		'And he *said to them, "Do not be amazed; you are looking for Jesus the Nazarene, who has been crucified. \
			He has risen; He is not here; behold, here is the place where they laid Him.',

		'An Arabic rendering of The "Testimonium Flavianum".',

		'The "Antiquities" was published about +0094 AD, and includes a passage called the "Testimonium Flavianum". \
			About +0942, the "Chronicle of Agapius" from Hierapolis contained an Arabic version of the Testimonium. \
			<br /> \
			<br /><b>The <or>Arabic</or> version of "Testimonium Flavianum" reads as follows</b>: \
				<fieldset class = "boxpad"><quote> \
				<br /><quote>At this time there was a wise man who was called Jesus. \
				His conduct was good, and [he] was known to be virtuous. \
				And many people from among the Jews and the other nations became his disciples. \
				Pilate condemned him to be crucified and to die. \
				But those who had become his disciples did not abandon his discipleship. \
				<br /> \
				<br /><x>They reported that he had appeared to them three days after his crucifixion, and that he was alive; </x> \
				accordingly he was perhaps the Messiah concerning whom the prophets have recounted wonders. \
				</quote></fieldset> \
			<br /> \
			See original text quotation on Matt 28:06. \
			See additional notes about Josephus and the Antiquities under Matt 3:1. \
			<br /> \
			<br />See also: Matt 28:06, Mark 16:06, Luke 24:06, John 20:01. \
			',

		'The Arabic "Testimonium Flavianum" references the Life, Death, and Resurrection of Jesus.'
	]
	[ 'ng_422406',		/* 42_Luke2406_Testimonium_Syrian */		'42 Luke 24:06',

		'He is not here, but He has risen. Remember how He spoke to you while He was still in Galilee,',

		'The Chronicle cover page that includes a Syriac rendering of the "Testimonium Flavianum".',

		'The "Antiquities" was published about +0094 AD, and includes a passage called the "Testimonium Flavianum". \
			About +1199, the "Chronicle of Michael" from Syria contained a Syriac version of the Testimonium. \
			<br /> \
			<br /><b>The Syriac version of "Testimonium Flavianum" reads as follows</b>: \
				<fieldset class = "boxpad"><quote><br /> \
				In these times there was a wise man named Jesus, if it be fitting for us to call him a man. \
				For he was a worker of glorious deeds and a teacher of truth. \
				Many from among the Jews and the nations became his disciples. \
				He was thought to be the Messiah. But not according to the testimony of the principal [men] of [our] nation. \
				Because of this, Pilate condemned him to the cross, and he died. \
				For those who had loved him did not cease to love him. \
				<br /> \
				<br /><x>He appeared to them alive after three days. </x>\
				For the prophets of God had spoken with regard to him of such marvelous things [as these]. \
				And the people of the Christians, named after him, have not disappeared till [this] day. \
				</quote></fieldset> \
			<br /> \
			See original text quotation on Matt 28:06. \
			See additional notes about Josephus and the Antiquities under Matt 3:1. \
			<br /> \
			<br />See also: Matt 28:06, Mark 16:06, Luke 24:06, John 20:01. \
			',

		'The Syriac "Testimonium Flavianum" references the Life, Death, and Resurrection of Jesus.'
	],
	[ 'ng_432001',		/* 43_John2001_Testimonium_English */		'43 John 20:01',

		'Now on the first day of the week Mary Magdalene *came early to the tomb, \
			while it *was still dark, and *saw the stone already taken away from the tomb.',

			// https://www.socinian.org/files/TestimoniumFlavianum.pdf

		'An English rendering of the "Testimonium Flavianum".',

		'The "Antiquities" was published about +0094 AD, and includes a passage called the "Testimonium Flavianum". \
			<br /> \
			<br />Variations for this text exist, and secular scholars explicitly assume Christian themes were later interpolated. \
			There are many arguments for and against this view, and it is not the purpose of these articles to debate them. \
			<br /> \
			<br />A strictly secular revisionist interpretation perpetuated by British scholar Vermes reads as follows: \
			<br /> \
			<br /> \<quote>	Now there was about this time Jesus, a wise man. \
			<x>For he was a doer of startling deeds</x>, a teacher of such men as receive the truth with pleasure. \
			And he gained a following both among many Jews and many of Greek origin. He was called the Christ. \
			And when Pilate, at the suggestion of the principal men amongst us, condemned him to the cross, \
			those that loved him at the first did not forsake him. \
			<span style = "color: red;">(note our scholar assumes no claim of resurrection is interpolated)</span>\
			And the tribe of Christians, so named from him, are not extinct at this day. \
			</quote>\
			<br /> \
			<br />A common English translation is shown in the image. See original text quotation on Matt 28:06. \
			See additional notes about Josephus and the Antiquities under Matt 3:1. \
			<br />See also: Matt 28:06, Mark 16:06, Luke 24:06, John 20:01. \
			',

		'The revised "Testimonium Flavianum" references the Miracles, Teaching, Death, and Followers of Jesus.'
	],

	[ 'ng_420207',		/* 42_Luke0207_Stone_Manger */				'42 Luke 02:07',

		'Luke 02:07 And she gave birth to her firstborn son; and she wrapped Him in cloths, and laid Him in a manger, because there was no room for them in the inn.',

		'An example of a "Stone Manger" from Megiddo.',

		'\
			Archaeologist Gary Byers has noted "numerous permanent stone-carved or plastered stone-built mangers \
				have been identified on the ground floor of domestic structures from biblical times." \
				\
			',

		''
	],
	[ 'ng_420711',		/* 42_Luke0711_Nain_City? */				'42 Luke 07:11', ?

		// Nain is mentioned in the writing of Eusebius (c. 263-339)
	]
	[ 'ng_420803',		/* 42_Luke0803_Johanna_Ossuary */			'42 Luke 08:03',

		"https://www.youtube.com/watch?v=w0pjddWhjEk" Johanna_Ossuary

		Luke 08:03, 24:10
	],
	[ 'ng_421301',		/* 42_Luke1301_Pilate_Blood? */				'42 Luke 13:01', ?

		'Now on the same occasion there were some present who reported to Him about the Galileans \
			whose blood Pilate had mixed with their sacrifices.'

		'',

		'\
			Josephus, Antiquities, Book 18.4.1
				https://www.earlyjewishwritings.com/text/josephus/ant18.html

				BUT the nation of the Samaritans did not escape without tumults. \
				The man who excited them to it was one who thought lying a thing of little consequence, \
				and who contrived every thing so that the multitude might be pleased; so he bid them to get together upon Mount Gerizzim, \
				which is by them looked upon as the most holy of all mountains, and assured them, that when they were come thither, \
				he would show them those sacred vessels which were laid under that place, because Moses put them there. \
				So they came thither armed, and thought the discourse of the man probable; and as they abode at a certain village, \
				which was called Tirathaba, they got the rest together to them, and desired to go up the mountain in a great multitude together; \
				but Pilate prevented their going up, by seizing upon file roads with a great band of horsemen and foot-men, \
				who fell upon those that were gotten together in the village; and when it came to an action, \
				some of them they slew, and others of them they put to flight, and took a great many alive, the principal of which, \
				and also the most potent of those that fled away, Pilate ordered to be slain.

			Philo
				https://www.earlyjewishwritings.com/text/philo/book40.html

			',

		''
	],
	[ 'ng_421619',		/* 42_Luke1619_Dives_Lazarus_xxxxxxxxxxxx */'42 Luke 16:19', ?

		 Luke 16:19-31

		(more commentary than anything)
		Dives & Lazarus, compare to "Setne_Khamwas & Si_Osire" (EA 10822,1)
	]
	[ 'ng_420501',		/**/ ng_401434 > Luke 05:01
	]
	[ 'ng_420826',		/**/ ng_400828 > Luke 08:26-39
	]
	[ 'ng_422301',		/**/ ng_402701 > Luke 23:01
	]

	[ 'na_440534',		/* 44_Acts0534_Gamaliel_xxxxxxxxxxxx */		'44 Acts 05:34',

		'But a Pharisee named Gamaliel, a teacher of the Law, respected by all the people, \
			stood up in the Council and gave orders to put the men outside for a short time.',

		'',

		'\
			Gamaliel
			<br /> \
			<br />See also: Num 01:10, Acts 05:34, 22:03. \
			',


		''
	],
	[ 'na_440537',		/* 44_Acts0537_Judas_xxxxxxxxxxxx */		'44 Acts 05:37',

		'',

		'',

		'\
			Judas of Galilee, Josephus, Antiquities and Wars
			',

		''
	],
	[ 'na_441307',		/* 44_Acts1307_SergiusPaulus_Stone */		'44 Acts 13:07',

		'who was with the proconsul, Sergius Paulus, a man of intelligence. \
			This man summoned Barnabas and Saul and sought to hear the word of God.',

			// "https://biblearchaeologyreport.com/2019/01/19/top-ten-discoveries-in-biblical-archaeology-relating-to-the-new-testament/"

		'The "SergiusPaulus_Stone" of Antioch Pisidia.',

		'\
			The "Soli Inscription", in Cyprus Paphos (near ancient Soli), references "proconsul Paulus"; discovered in +1877.

			Antioch Pisidia contains numerous inscriptions naming "L. Sergius Paulus".

			Rome emperor Claudius curator "Lucius Sergius Paulus" of the Tiber River is mentioned in a Roman Inscription.

			Pliny the Elder in "Naturalis Historia" mentions "Sergius Paulus" as an authoritative author.

			',

		''
	],
	[ 'na_441802',		/* 44_Acts1728_Claudius_xxxxxxxxxxxx */		'44 Acts 18:02',

		'And he found a Jew named Aquila, a native of Pontus, having recently come from Italy with his wife Priscilla, \
			because Claudius had commanded all the Jews to leave Rome. He came to them,',

			// see: 44_Acts1128_Claudius

		'',

		'\
			',

		''
	],
	[ 'na_442128',		/* 44_Acts2128_TempleWarning_Inscription */	'44 Acts 21:28',

		Temple Warning Inscription
			Acts 21:28-29, Eph 02:14
			"https://biblearchaeologyreport.com/2019/01/19/top-ten-discoveries-in-biblical-archaeology-relating-to-the-new-testament/"
			Temple Warning Inscription in the Istanbul Archaeological Museum
			"No foreigner is to enter within the railing and enclosure around the temple.  And whoever is caught will be responsible to himself for his subsequent death."
			In 1871 French archaeologist Charles Clermont-Ganneau discovered a limestone slab with a seven-line warning inscription
			described by Josephus
			CC-BY-SA-3.0
	],
	[ 'na_442138',		/* 44_Acts2138_Egypt_xxxxxxxxxxxx */		'44 Acts 21:38',

		'',

		'',

		'\
			Egyptian leader, Josephus Antiquities, Wars
			',

		''
	],
	[ 'na_442324',		/* 44_Acts2324_Felix_xxxxxxxxxxxx */		'44 Acts 23:24',

		'',

		'',

		'\
			Marcus Antonius Felix (Roman Procurator), Josephus Antiquities, Wars, Coins
			',

		''
	],
	[ 'na_442424',		/* 44_Acts2424_Drusilla_xxxxxxxxxxxx */		'44 Acts 24:24',

		'',

		'',

		'\
			Drusilla, Josephus Antiquities
			',

		''
	],
	[ 'na_442427',		/* 44_Acts2427_Festus_xxxxxxxxxxxx */		'44 Acts 24:27',

		'',

		'',

		'\
			Porcius Festus (Roman Procurator), Josephus Antiquities, Coins
			',

		''
	],
	[ 'na_442630',		/* 44_Acts2630_Bernice_xxxxxxxxxxxx */		'44 Acts 26:30',

		'',

		'',

		'\
			Bernice, Josephus Antiquities, Wars, Acts 25:13, 23, 26:30
			',

		''
	],
	[ 'na_442705',		/* 44_Acts2705_Lycia_xxxxxxxxxxxx */		'44 Acts 27:05',

		https://www.youtube.com/watch?v=8DtaB9K9ui4
		https://en.wikipedia.org/wiki/Ancient_regions_of_Anatolia
	],
]
}
//----
