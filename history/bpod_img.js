// ©2021, 2023 Martin George , All rights reserved.
// 3service/bpod_img.js

const imgLaws =	[ // 05 books; 01-05

	[ 'l1_010101',		'01_Gen0101_creation',						'' ],
	[ 'l1_010102',		'01_Gen0102_time',							'' ],
	[ 'l1_010109',		'01_Gen0109_Minerals_Chart',				'' ],
	[ 'l1_010111',		'01_Gen0111_Roche_Biochemical_Pathway',		'' ],
	[ 'l1_010114',		'01_Gen0114_JWST_DeepField1',				'' ],
	[ 'l1_010125',		'01_Gen0125_Brontosaur_NarmerPalette',		'' ],
	[ 'l1_010209',		'01_Gen0209_Tree_Of_Life',					'' ],
	[ 'l1_010214',		'01_Gen0214_Shatt_AlArab',					'' ],
	[ 'l1_010306',		'01_Gen0306_CylinderSeal_ME89326',			'' ],
	[ 'l1_010324',		'01_Gen0324_SpeiserSeal_TepeGawraMound',	'' ],
	[ 'l1_010503',		'01_Gen0503_WeldPrism_EdenTigrisEuprates',	'' ],
	[ 'l1_010604',		'01_Gen0604_Robert_Wadlow',					'' ],
	[ 'l1_010614',		'01_Gen0614_NoahsArk',						'' ],
	[ 'l1_010617_0',	'01_Gen0617_Flood1_Genesis_Bereshith',		'' ],
	[ 'l1_010617_1',	'01_Gen0617_Flood2_BookOfGates_12thHour',	'' ],
	[ 'l1_010617_2',	'01_Gen0617_Flood3_EriduGenesis_Ziusudra',	'' ],
	[ 'l1_010617_3',	'01_Gen0617_Flood3_AtrahasisTablet3',		'' ],
	[ 'l1_010617_4',	'01_Gen0617_Flood3_DelugeTablet_Utnapishtim',	'' ],
	[ 'l1_010617_5',	'01_Gen0617_Flood4_MatsyaPurana',			'' ],
	[ 'l1_010617_6',	'01_Gen0617_Flood5_ShuJing_CanonYao',		'' ],
	[ 'l1_010617_7',	'01_Gen0617_Flood6_Ovid_Metamorphoses',		'' ],
	[ 'l1_010617_8',	'01_Gen0617_Flood7_PopolVuh',				'' ],
	[ 'l1_010617_9',	'01_Gen0617_WeldBlundellPrism_SKL',			'' ],
	[ 'l1_010804',		'01_Gen0804_MountainsOfArarat',				'' ],
	[ 'l1_011006',		'01_Gen1006_Egypt_LuxorObelisk',			'' ],
	[ 'l1_011010',		'01_Gen1010_Shinar_Uruk',					'' ],
	[ 'l1_011101_01',	'01_Gen1101_EtemenankiZiggarut',			'' ],
	[ 'l1_011101_02',	'01_Gen1101_EtemenankiZiggarutArial',		'' ],
	[ 'l1_011101_03',	'01_Gen1101_BabelTowerStele',				'' ],
	[ 'l1_011101_04',	'01_Gen1101_BabelTowerStele_a',				'' ],
	[ 'l1_011101_05',	'01_Gen1101_BabelTowerSteleDiagram',		'' ],
	[ 'l1_011101_06',	'01_Gen1101_BorsippaZiggurat',				'' ],
	[ 'l1_011101_07',	'01_Gen1101_BorsippaZigguratSide',			'' ],
	[ 'l1_011101_08',	'01_Gen1101_AnuZiggurat',					'' ],
	[ 'l1_011101_09',	'01_Gen1101_UrNammuZiggurat',				'' ],
	[ 'l1_011101_10',	'01_Gen1101_UrNammuZiggurat1',				'' ],
	[ 'l1_011101_11',	'01_Gen1101_EriduRuins',					'' ],
	[ 'l1_011101_12',	'01_Gen1101_ChogaZanbilZiggurat',			'' ],
	[ 'l1_011101_13',	'01_Gen1101_ChogaZanbilZiggurat1',			'' ],
	[ 'l1_011101_14',	'01_Gen1101_CholulaPyramid',				'' ],
	[ 'l1_011128',		'01_Gen1128_UrChaldeesCity',				'' ],
	[ 'l1_011206',		'01_Gen1206_Shechem_TellBalata',			'' ],
	[ 'l1_011210',		'01_Gen1210_Egypt_Pyramids',				'' ],
	[ 'l1_011215',		'01_Gen1215_MID_dynasty11_Mentuhotep3',		'' ],
	[ 'l1_011220',		'01_Gen1220_MID_dynasty12_Amenemhat1',		'' ],
	[ 'l1_011401',		'01_Gen1401_SiddimBattle',					'' ],
	[ 'l1_011408',		'01_Gen1408_EblaSite',						'' ],
	[ 'l1_011418',		'01_Gen1418_Execration_Texts',				'' ],
	[ 'l1_011520',		'01_Gen1520_HattianSunDisk',				'' ],
	[ 'l1_011901',		'01_Gen1901_BabEdhDhraRuins',				'' ],
	[ 'l1_012001',		'01_Gen2001_Gerar_TelHaror',				'' ],
	[ 'l1_012114',		'01_Gen2114_Isaac_Beersheba_wells',			'' ],
	[ 'l1_012213',		'01_Gen2213_RamInThicket_front',			'' ],
	[ 'l1_012633',		'01_Gen2633_Isaac_Beersheba_wells',			'' ],
	[ 'l1_014140',		'01_Gen4140_MID_dynasty12_Senusret1',		'' ],
	[ 'l1_014143',		'01_Gen4143_Metal_Chariots',				'' ],
	[ 'l1_014145',		'01_Gen4145_On_Heliopolis',					'' ],
	[ 'l1_014154',		'01_Gen4154_FamineStela',					'' ],
	[ 'l1_014627',		'01_Gen4627_MID_dynasty12_Senusret2',		'' ],
	[ 'l1_014711',		'01_Gen4711_TellElDaba_CityAvaris',			'' ],

	[ 'l2_020108',		'02_Exo0108_MID_dynasty18_Amenhotep1',		'' ],
	[ 'l2_020111',		'02_Exo0111_Pithom_TellElRetabeh',			'' ],
	[ 'l2_020114',		'02_Exo0114_Slave_Bricks',					'' ],
	[ 'l2_020115',		'02_Exo0115_BrooklynPapyrus_Shiphrah',		'' ],
	[ 'l2_020314',		'02_Exo0314_YHWH_Amenhotep3_inscription',	'' ],
	[ 'l2_020501',		'02_Exo0501_2ND_dynasty16_Dedumose2',		'' ],
	[ 'l2_020704',		'02_Exo0704_IpuwerPapyrus',					'' ],
	[ 'l2_020720',		'02_Exo0720_IpuwerPapyrus_Edge',			'' ],
	[ 'l2_021421',		'02_Exo1421_Manetho_Aegyptiaca',			'' ],
	[ 'l2_021429',		'02_Exo1429_Tacitus_Histories',				'' ],
	[ 'l2_021706',		'02_Exo1706_natural_formation',				'' ],
	[ 'l2_021911',		'02_Exo1911_MountSinai_MountMusa',			'' ],
	[ 'l2_021922',		'02_Exo1922_MountSinai_JabalAlLawz',		'' ],
	[ 'l2_022001',		'02_Exo2001_HammurabiStele',				'' ],
	[ 'l2_022510',		'02_Exo2510_Anubis_Chest',					'' ],
	[ 'l2_022817',		'02_Exo2817_Gemstones_Hoshen',				'' ],

	[ 'l3_030101',		'03_Lev0101_Charred_Lev_Scroll',			'' ],
	[ 'l3_030407',		'03_Lev0407_HornedAltar',					'' ],
	[ 'l3_031102',		'03_Lev1102_Taxonomic_Variation',			'' ],
	[ 'l3_031821',		'03_Lev1821_Tophets_Carthage',				'' ],
	[ 'l3_032301',		'03_Lev2301_Feasts',						'' ],
	[ 'l3_032305',		'03_Lev2305_1PSO',							'' ],
	[ 'l3_032306',		'03_Lev2306_2FUB',							'' ],
	[ 'l3_032309',		'03_Lev2309_3FOF',							'' ],
	[ 'l3_032315',		'03_Lev2315_4FOW',							'' ],
	[ 'l3_032323',		'03_Lev2323_5FOT',							'' ],
	[ 'l3_032326',		'03_Lev2326_6DOA',							'' ],
	[ 'l3_032333',		'03_Lev2333_7FOB',							'' ],

	[ 'l4_040623',		'04_Num0623_KetefHinnom_Scrolls',			'' ],
	[ 'l4_041403',		'DUPLICATE',								'l3_031102' ],	// 03_Lev1102_Taxonomic_Variation
	[ 'l4_042014',		'04_Num2014_Edom_arial',					'' ],
	[ 'l4_042101',		'04_Num2101_CanaanNegevArad_TelArad',		'' ],
	[ 'l4_042123',		'04_Num2123_Jahaz_WadiAthThamad',			'' ],
	[ 'l4_042125',		'04_Num2125_Heshbon_city',					'' ],
	[ 'l4_042133',		'04_Num2133_Edrei_Daraa',					'' ],
	[ 'l4_042201',		'04_Num2201_JerichoCity_Arial',				'' ],
	[ 'l4_042205',		'04_Num2205_DeirAlla_Inscription',			'' ],
	[ 'l4_042501',		'04_Num2501_Shittim_TellHammam',			'' ],
	[ 'l4_043233',		'04_Num3233_Bashan_Dolmens',				'' ],
	[ 'l4_043301',		'04_Num3301_exodus_route_arial',			'' ],
	[ 'l4_043316',		'04_Num3316_exodus_route_lines',			'' ],
	[ 'l4_043337',		'04_Num3337_exodus_route_alt',				'' ],
	[ 'l4_043506',		'04_Num3506_refugeCities',					'' ],

	[ 'l5_050102',		'05_Deu0102_KadeshBarnea_Arial',			'' ],
	[ 'l5_050104',		'05_Deu0104_Ashtaroth',						'' ],
	[ 'l5_050107',		'05_Deu0107_Lebanon_Cedars',				'' ],
	[ 'l5_050201',		'05_Deu0201_Mount_Baqir',					'' ],
	[ 'l5_050219',		'05_Deu0219_AmmanCitadelInscription',		'' ],
	[ 'l5_052304',		'05_Deu0304_DeirAlla_Tablets',				'' ],
	[ 'l5_052708',		'05_Deu2708_613Laws',						'' ],
	[ 'l5_052712',		'05_Deu2712_MountGerizim_MountEbal',		'' ],
	[ 'l5_053401',		'05_Deu3401_MountNebo',						'' ],
	[ 'l5_053402',		'05_Deu3402_MountNebo_View',				'' ],
];

const imgHst1 =	[ // 12 books; 06-17 | Josh, Judg, Ruth, 1&2Sam (2Sam = 1Chr)

	[ 'h1_060101',		'06_Josh0101_map',							'' ],
	[ 'h1_060201',		'DUPLICATE',								'l4_042501' ],	// 04_Num2501_Shittim_TellHammam
	[ 'h1_060314',		'06_Josh0314_Jordan_River',					'' ],
	[ 'h1_060601',		'06_Josh0601_JerichoWalls',					'' ],
	[ 'h1_060721',		'06_Josh0721_MeliShipak_Kudurru',			'' ],
	[ 'h1_060830',		'06_Josh0830_JoshuaAltar',					'' ],
	[ 'h1_061001_0',	'06_Josh1001_AmarnaTablets_map',			'' ],
	[ 'h1_061001_1',	'06_Josh1001_EA019_Tushratta',				'' ],
	[ 'h1_061001_2',	'06_Josh1001_EA161_Aziru',					'' ],
	[ 'h1_061001_3',	'06_Josh1001_EA286_AbdiHeba',				'' ],
	[ 'h1_061001_4',	'06_Josh1001_EA287_AbdiHeba',				'' ],
	[ 'h1_061001_5',	'06_Josh1001_EA243_Biridija',				'' ],
	[ 'h1_061003',		'06_Josh1003_Hebron_LMLKSeal_Jar',			'' ],
	[ 'h1_061013',		'06_Josh1013_NabuIqisha_Tablet',			'' ],
	[ 'h1_061033',		'06_Josh1033_GezerWalls',					'' ],
	[ 'h1_061041',		'06_Josh1041_TellNebiMend_TNM054',			'' ],
	[ 'h1_061101',		'06_Josh1101_HazorCity',					'' ],
	[ 'h1_061108',		'06_Josh1108_Balawat_Bronze_Bands',			'' ],
	[ 'h1_061110',		'06_Josh1110_EA228_AbdiTirsi',				'' ],
	[ 'h1_061303',		'06_Josh1303_EkronTablet',					'' ],
	[ 'h1_061305',		'06_Josh1305_Gebal_ruins',					'' ],
	[ 'h1_061801',		'06_Josh1801_Shiloh_KhirbetSeilun',			'' ],
	[ 'h1_061906',		'06_Josh1906_Sharuhen_City',				'' ],
	[ 'h1_061912',		'06_Josh1912_Mount_Tabor',					'' ],
	[ 'h1_062002',		'DUPLICATE',								'l4_043506' ],	// 04_Num3506_refugeCities

	[ 'h2_070126',		'07_Judg0126_Hittite_Silver_Vessel',		'' ],
	[ 'h2_070127',		'07_Judg0127_BeisanSteles',					'' ],
	[ 'h2_070213',		'07_Judg0213_Baal_Stele',					'' ],
	[ 'h2_070305',		'07_Judg0305_Muwatalli2_Coin',				'' ],
	[ 'h2_070312',		'07_Judg0312_Moab_DibonCity',				'' ],
	[ 'h2_070315',		'07_Judg0315_Eglons_Palace',				'' ],
	[ 'h2_070403',		'DUPLICATE',								'l1_014143' ],	// 01_Gen4143_Metal_Chariots
	[ 'h2_070407',		'07_Judg0407_Deborah_Jabin_Tablet',			'' ],
	[ 'h2_070414',		'DUPLICATE',								'h1_061912' ],	// 06_Josh1912_Mount_Tabor
	[ 'h2_070719',		'07_Judg0719_Jerubbaal_Inscription',		'' ],
	[ 'h2_070833',		'07_Judg0833_BaalBerith_Temple',			'' ],
	[ 'h2_071011',		'07_Judg1011_NEW_dynasty19_MerneptahStele',	'' ],
	[ 'h2_071208',		'07_Judg1208_BronzeAgeCollapse',			'' ],
	[ 'h2_071324',		'07_Judg1324_Samson_Seal',					'' ],
	[ 'h2_071623',		'07_Judg1623_Dagon_Stele',					'' ],
	[ 'h2_071629',		'07_Judg1629_Philistine_Temple',			'' ],
	[ 'h2_071829',		'07_Judg1829_Eli_Danites_LaishCity',		'' ],

	[ 'h3_080101',		'08_Ruth0101_Bethlehem_City',				'' ],
	[ 'h3_080417',		'08_Ruth0417_TellDanStele',					'' ],

	[ 'h4_090119',		'09_1Sam0119_Nabi_Samwil',					'' ],
	[ 'h4_090401',		'09_1Sam0401_Aphek_Ruins',					'' ],
	[ 'h4_090615',		'09_1Sam0615_Beth_Shemesh',					'' ],
	[ 'h4_091305',		'09_1Sam1305_Michmash_River', 				'' ],
	[ 'h4_091613',		'09_1Sam1613_TellDanStele_Inscription',		'' ],
	[ 'h4_091701',		'09_1Sam1701_TellAzekah_Caves',				'' ],
	[ 'h4_091704',		'DUPLICATE',								'l1_010604' ],	// 01_Gen0604_Robert_Wadlow
	[ 'h4_091723',		'09_1Sam1723_Gath_city',					'' ],
	[ 'h4_092329',		'09_1Sam2329_EinGedi_Site',					'' ],
	[ 'h4_092804',		'09_1Sam2804_Mount_Gilboa',					'' ],
	[ 'h4_093011',		'09_1Sam3011_Psusennes_Sarcophagus',		'' ],
	[ 'h4_093111',		'09_1Sam3111_Jabesh_Gilead',				'' ],

	[ 'h5_100213',		'10_2Sam0213_PoolGibeon',					'' ],
	[ 'h5_100507',		'10_2Sam0507_CityOfDavid',					'' ],
	[ 'h5_100511',		'10_2Sam0511_TyreKingHiram',				'' ],
	[ 'h5_100517',		'10_2Sam0517_LargeStoneStructure_overview',	'' ],
	[ 'h5_100801',		'10_2Sam0801_Khirbet_Qeiyafa',				'' ],
	[ 'h5_100803',		'10_2Sam0803_MilqartStele',					'' ],
	[ 'h5_100805',		'10_2Sam0805_Zobal_TellTzuba',				'' ],
	[ 'h5_101224',		'10_2Sam1224_Solomon_Bulla',				'' ],
	[ 'h5_101523',		'10_2Sam1523_Kidron_Valley',				'' ],
	[ 'h5_101530',		'10_2Sam1530_Mount_Olives',					'' ],
	[ 'h5_102014',		'10_2Sam2014_Beth_Maacah',					'' ],
	[ 'h5_102321',		'10_2Sam2321_Amenemope_Mask',				'' ],
];

const imgHst2 = [ // ░░ 1&2Kin, 1&2Chr

	[ 'h6_110301',		'11_1Kin0301_TIP_dynasty21_pharaoh_Siamun',	'' ],
	[ 'h6_110501',		'11_1Kin0501_Ahiram_Sarcophagus',			'' ],
	[ 'h6_110701',		'11_1Kin0701_Solomons_Walls',				'' ],
	[ 'h6_110708',		'11_1Kin0708_Gezer_Well',					'' ],
	[ 'h6_110723',		'11_1Kin0723_Tablet_YBC7302',				'' ],
	[ 'h6_110915',		'11_1Kin0915_GezerCalendar',				'' ],
	[ 'h6_110917',		'11_1Kin0917_BethHoron',					'' ],
	[ 'h6_111001',		'11_1Kin1001_ShebaInscription',				'' ],
	[ 'h6_111022',		'11_1Kin1022_Tarshish_NoraStone',			'' ],
	[ 'h6_111225',		'11_1Kin1225_Mahanaim_Penuel',				'' ],
	[ 'h6_111140',		'11_1Kin1140_TIP_pharaoh_Shishak',			'' ],
	[ 'h6_111425',		'11_1Kin1425_Bubastis_Portal',				'' ],
	[ 'h6_111426',		'11_1Kin1426_Shishak_Relief',				'' ],
	[ 'h6_111520',		'11_1Kin1520_CeramicHead_AbelBethMaacah',	'' ],
	[ 'h6_111616',		'11_1Kin1616_Nimrud_Slab',					'' ],
	[ 'h6_111624',		'11_1Kin1624_SamariaCity',					'' ],
	[ 'h6_111628',		'11_1Kin1628_KurkhMonolith_Ahab',			'' ],
	[ 'h6_111631',		'11_1Kin1631_Jezebel_Seal',					'' ],
	[ 'h6_111915',		'11_1Kin1915_StormIdol_HazaelInscription',	'' ],
	[ 'h6_111916',		'11_1Kin1916_Elisha_Ostraca',				'' ],
	[ 'h6_112108',		'11_1Kin2108_Israeli_Seal',					'' ],

	[ 'h7_120304',		'12_2Kin0304_MeshaStele',					'' ],
	[ 'h7_120902',		'12_2Kin0902_KurbailStatue_JehuInscription','' ],
	[ 'h7_120914',		'12_2Kin0914_Nimshi_Inscription',			'' ],
	[ 'h7_121029',		'12_2Kin1029_BlackObelisk_Shalmaneser3',	'' ],
	[ 'h7_121031',		'12_2Kin1031_BlackObelisk_Jehu',			'' ],
	[ 'h7_121220',		'12_2Kin1220_Millo',						'' ],
	[ 'h7_121320',		'12_2Kin1320_ElKerak_Inscription',			'' ],
	[ 'h7_121303',		'12_2Kin1303_ZakkurStele_BenHadad3',		'' ],
	[ 'h7_121305',		'12_2Kin1305_Sabaa_Stele',					'' ],
	[ 'h7_121310',		'12_2Kin1310_TellRimahStele_Joash',			'' ],
	[ 'h7_121423',		'12_2Kin1423_Jeroboam2_Seal',				'' ],
	[ 'h7_121503',		'12_2Kin1505_Jotham_Ahaz_Seal',				'' ],
	[ 'h7_121514',		'12_2Kin1514_TP3_Menehem',					'' ],
	[ 'h7_121519',		'12_2Kin1519_Nimrud_Tablet',				'' ],
	[ 'h7_121529',		'12_2Kin1529_TP3_Pekah',					'' ],
	[ 'h7_121530',		'12_2Kin1530_Hoshea_Seal',					'' ],
	[ 'h7_121537',		'12_2Kin1537_TP3_Rezin',					'' ],
	[ 'h7_121601',		'12_2Kin1601_Ushna_Seal',					'' ],
	[ 'h7_121703',		'12_2Kin1703_Shalmaneser5_prince',			'' ],
	[ 'h7_121704',		'12_2Kin1704_TIP_dynasty22_Osorkon4',		'' ],
	[ 'h7_121706',		'12_2Kin1706_Nimrud_Prism',					'' ],
	[ 'h8_121801',		'12_2Kin1801_Hezekiah_Seal',				'' ],	 // ████ Judah ████
	[ 'h8_121813',		'12_2Kin1813_TaylorPrism_Hezekiah',			'' ],
	[ 'h8_121814',		'12_2Kin1814_Lachish_Relief',				'' ],
	[ 'h8_121817',		'12_2Kin1817_Siloam_Inscription',			'' ],
	[ 'h8_121908',		'12_2Kin1908_Lachish_SiegeRamps',			'' ],
	[ 'h8_121909',		'12_2Kin1909_Taharqa_KarnakTemple',			'' ],
	[ 'h8_121935',		'12_2Kin1935_Herodotus_Histories',			'' ],
	[ 'h8_121937',		'12_2Kin1937_ArdaMulissu_Relief',			'' ],
	[ 'h8_121937b',		'12_2Kin1937_Esarhaddon_VictoryStele',		'' ],
	[ 'h8_122012',		'12_2Kin2012_Babylon_MerodachBaladan',		'' ],
	[ 'h8_122020',		'12_2Kin2020_HezekiahTunnelCenter',			'' ],
	[ 'h8_122101',		'12_2Kin2101_Manasseh_Seal',				'' ],
	[ 'h8_122311',		'12_2Kin2311_NathanMelech_Seal',			'' ],
	[ 'h8_122313',		'12_2Kin2313_MilkomServantBaalis_Seal',		'' ],
	[ 'h8_122329',		'12_2Kin2329_LATE_dynasty26_Necho2',		'' ],
	[ 'h8_122401',		'12_2Kin2401_Jerusalem_Chronicle',			'' ],
	[ 'h8_122522',		'12_2Kin2522_GedaliahBenAhikam_Seal',		'' ],
	[ 'h8_122523',		'12_2Kin2523_IshmaelBenNethaniah_Seal',		'' ],
	[ 'h8_122527',		'12_2Kin2527_EvilMerodach',					'' ],
	[ 'h8_122530',		'12_2Kin2530_Jehoiachin_Ration',			'' ],

	[ 'h9_130318',		'13_1Chr0318_PedaiahBenJehoiachin_Seal',	'' ],
	[ 'h9_131105',		'DUPLICATE',								'h5_100507' ],	// 10_2Sam0507_CityOfDavid
	[ 'h9_131123',		'DUPLICATE',								'h5_102321' ],	// 10_2Sam2321_Amenemope_Mask
	[ 'h9_131206',		'13_1Chr1206_HoshAyahu_Seal',				'' ],
	[ 'h9_131401',		'DUPLICATE',								'h5_100511' ],	// 10_2Sam0511_TyreKingHiram
	[ 'h9_131408',		'DUPLICATE',								'h5_100517' ],	// 10_2Sam0517_LargeStoneStructure_overview
	[ 'h9_131801',		'DUPLICATE',								'h5_100801' ],	// 10_2Sam0801_Khirbet_Qeiyafa
	[ 'h9_131803',		'DUPLICATE',								'h5_100803' ],	// 10_2Sam0803_MilqartStele
	[ 'h9_131805',		'DUPLICATE',								'h5_100805' ],	// 10_2Sam0805_Zobal_TellTzuba
	[ 'h9_131907',		'DUPLICATE',								'h5_102014' ],	// 10_2Sam2014_Beth_Maacah
	[ 'h9_132001',		'DUPLICATE',								'h5_101224' ],	// 10_2Sam1224_Solomon_Bulla

	[ 'h0_140402',		'DUPLICATE',								'h6_110723' ],	// 11_1Kin0723_Tablet_YBC7302
	[ 'h0_140811',		'DUPLICATE',								'h6_110708' ],	// 11_1Kin0708_Gezer_Well
	[ 'h0_141109',		'14_2Chr1109_Rehoboam_Wall',				'' ],
	[ 'h0_141202',		'DUPLICATE',								'h6_111425' ],	// 11_1Kin1425_Bubastis_Portal
	[ 'h0_141204',		'DUPLICATE',								'h6_111426' ],	// 11_1Kin1426_Shishak_Relief
	[ 'h0_141409',		'14_2Chr1409_MareshahCaves',				'' ],
	[ 'h0_141413',		'DUPLICATE',								'l1_012001' ],	// 01_Gen2001_Gerar_TelHaror
	[ 'h0_143201',		'DUPLICATE',								'h8_121814' ],	// 12_2Kin1814_Lachish_Relief
	[ 'h0_143209',		'DUPLICATE',								'h8_121908' ],	// 12_2Kin1908_Lachish_SiegeRamps
	[ 'h0_143231',		'DUPLICATE',								'h8_121935' ],	// 12_2Kin1935_Herodotus_Histories
	[ 'h0_143520',		'14_2Chr3520_CarchemishRuins',				'' ],			// f5_231009
	[ 'h0_143524',		'DUPLICATE',								'h8_122329' ],	// 12_2Kin2329_LATE_dynasty26_Necho2
	[ 'h0_143606',		'DUPLICATE',								'h8_122401' ], 	// 12_2Kin2401_Jerusalem_Chronicle
	[ 'h0_143610',		'DUPLICATE',								'h8_122530' ],	// 12_2Kin2530_Jehoiachin_Ration
	[ 'h0_143620',		'14_2Chr3620_Achaemenid_Persia',			'' ],
	[ 'h0_143622',		'14_2Chr3622_CyrusTomb',					'' ],
];

const imgHst3 = [ // ░░ Ezra, Neh, Esth

	[ 'he_150101',		'15_Ezra0101_CyrusCylinder',				'' ],
	[ 'he_150402',		'15_Ezra0402_EsarhaddonBlock',				'' ],
	[ 'he_150405',		'15_Ezra0405_Darius1_BehistunInscription',	'' ],
	[ 'he_150406',		'15_Ezra0406_Xerxes1_VanInscription',		'' ],
	[ 'he_150407',		'15_Ezra0407_Artaxerxes1_Tombs',			'' ],
	[ 'he_150409',		'15_Ezra0409_Susa_AshurbanipalSiege',		'' ],
	[ 'he_150410',		'15_Ezra0410_Ashurbanipal_Horse',			'' ],
	[ 'he_150503',		'15_Ezra0503_Tattannu_Fragment',			'' ],
	[ 'he_150701',		'15_Ezra0701_Azariah_Seal',					'' ],
	[ 'he_150810',		'15_Ezra0810_Shelomit_Seal',				'' ],
	[ 'he_150816',		'15_Ezra0816_ElNathan_Seal',				'' ],

	[ 'hn_160101',		'16_Neh0101_Darius1_SusaApadana',			'' ],
	[ 'hn_160210',		'16_Neh0210_TobiahPalace',					'' ],
	[ 'hn_160219',		'16_Neh0219_ElephantinePapyri',				'' ],
	[ 'hn_160301',		'16_Neh0301_Jerusalem_Gates',				'' ],
	[ 'hn_160804',		'16_Neh0804_ShelemiahBenShema_Seal',		'' ],
	[ 'hn_161222',		'16_Neh1222_Darius2Nothos_Persian',			'' ],
	[ 'hn_161232',		'16_Neh1232_LachishOstraca',				'' ],

	[ 'hs_170101',		'17_Esth0101_Xerxes_and_Darius',			'' ],
	[ 'hs_170105',		'17_Esth0105_Darius1_Foundation_Charter',	'' ],
	[ 'hs_170107',		'17_Esth0107_Persia_Rhyton',				'' ],
	[ 'hs_170203',		'17_Esth0203_Persepolis_Harem',				'' ],
	[ 'hs_170205',		'17_Esth0205_Mordecai_TreasuryTablet',		'' ],
	[ 'hs_170217',		'17_Esth0217_Persia_Queen',					'' ],
	[ 'hs_170309',		'17_Esth0309_Persia_Coins',					'' ],
	[ 'hs_170501',		'17_Esth0501_Susa_Floorplan',				'' ],
	[ 'hs_170604',		'17_Esth0604_Courtyard_Reliefs',			'' ],
	[ 'hs_170707',		'17_Esth0707_Naqse_Rustam_DNb',				'' ],
	[ 'hs_170809',		'17_Esth0809_Daiva_Inscription',			'' ],
	[ 'hs_170926',		'17_Esth0926_Purim_Lot',					'' ],
];

const imgPoet =	[ // 05 books; 18-22, psalms label is in hex

	[ 'pt_180101',		'18_Job0101_Esarhaddon_Succession_Treaty',	'' ],
	[ 'pt_180115',		'18_Job0115_SabeanRuins_YemenMarib',		'' ],
	[ 'pt_180120',		'18_Job0120_LudlulBelNemeqiText',			'' ],
	[ 'pt_180909',		'18_Job0909_Plieades_Asterism',				'' ],
	[ 'pt_182801',		'DUPLICATE',								'l1_010109' ],	// 01_Gen0109_Minerals_Chart
	[ 'pt_184015',		'18_Job4015_Behemoth_Leviathan',			'' ],

	[ 'pt_1900206',		'DUPLICATE',								'h5_100507' ],	// 10_2Sam0507_CityOfDavid
	[ 'pt_1900803',		'19_Psa00803_Moon_Stars',					'' ],
	[ 'pt_1901901',		'DUPLICATE',								'l1_010114' ],	// 01_Gen0114_JWST_DeepField1
	[ 'pt_1902212',		'DUPLICATE',								'l4_043233' ],	// 04_Num3233_Bashan_Dolmens
	[ 'pt_1902906',		'DUPLICATE',								'l5_050107' ],	// 05_Deu0107_Lebanon_Cedars
	[ 'pt_1902908',		'DUPLICATE',								'h1_061041' ],	// 06_Josh1041_TellNebiMend_TNM054
	[ 'pt_1904206',		'19_Psa04206_Mount_Hermon',					'' ],
	[ 'pt_1904512',		'DUPLICATE',								'f5_262607' ],	// 26_Eze2607_Seige_Of_Tyre
	[ 'pt_1905601',		'DUPLICATE',								'h4_091723' ],	// 09_1Sam1723_Gath_city
	[ 'pt_1906001',		'DUPLICATE',								'h5_100805' ],	// 10_2Sam0805_Zobal_TellTzuba
	[ 'pt_1906006',		'DUPLICATE',								'l1_011206' ],	// 01_Gen1206_Shechem_TellBalata
	[ 'pt_1906008',		'DUPLICATE',								'l4_042014' ],	// 04_Num2014_Edom_arial
	[ 'pt_1906808',		'DUPLICATE',								'l2_021922' ],	// 02_Exo1922_MountSinai_JabalAlLawz
	[ 'pt_1906815',		'DUPLICATE',								'l4_043233' ],	// 04_Num3233_Bashan_Dolmens
	[ 'pt_1907208',		'DUPLICATE',								'l1_010214' ],	// 01_Gen0214_Shatt_AlArab
	[ 'pt_1907812',		'DUPLICATE',								'l1_011210' ],	// 01_Gen1210_Egypt_Pyramids
	[ 'pt_1907843',		'DUPLICATE',								'h5_102321' ],	// 10_2Sam2321_Amenemope_Mask
	[ 'pt_1907860',		'DUPLICATE',								'h1_061801' ],	// 06_Josh1801_Shiloh_KhirbetSeilun
	[ 'pt_1908307',		'DUPLICATE',								'h1_061305' ],	// 06_Josh1305_Gebal_ruins
	[ 'pt_1908912',		'DUPLICATE',								'h1_061912' ],	// 06_Josh1912_Mount_Tabor
	[ 'pt_1910401',		'19_Psa10401_AtenGreatHymn',				'' ],
	[ 'pt_1910808',		'DUPLICATE',								'h4_093111' ],	// 09_1Sam3111_Jabesh_Gilead
	[ 'pt_1911403',		'DUPLICATE',								'h1_060314' ],	// 06_Josh0314_Jordan_River
	[ 'pt_1913206',		'DUPLICATE',								'h3_080101' ],	// 08_Ruth0101_Bethlehem_City

	[ 'pt_201001',		'DUPLICATE',								'h5_101224' ],	// 10_2Sam1224_Solomon_Bulla
	[ 'pt_202217',		'20_Pro2217_TIP_dynasty21_Amenemopet',		'' ],
	[ 'pt_202501',		'DUPLICATE',								'h8_121801' ],	// 12_2Kin1801_Hezekiah_Seal
	[ 'pt_203121',		'20_Pro3121_Fabric_Colored',				'' ],

	[ 'pt_210101',		'21_Ecc0101_HarpersSong_TombNakht',			'' ],

	[ 'pt_220310',		'22_Son0310_Purple_Fabric',					'' ],
	[ 'pt_220613',		'22_Son0613_AmarnaTablet_365_Shunem',		'' ],
	[ 'pt_220704',		'22_Son0704_HeshbonPool',					'' ],
];

const imgProp =	[ // 17 books; 23-39, 17 = 05 + 12; Major & Minor

	[ 'f5_230101',		'23_Isa0101_Isaiah_Seal',					'' ],
	[ 'f5_230601',		'23_Isa0601_Uzziah_Inscription',			'' ],
	[ 'f5_230701',		'23_Isa0701_TiglathPileser_Reliefs',		'' ],
	[ 'f5_231009',		'DUPLICATE',								'h0_143520' ],	// 14_2Chr3520_CarchemishRuins
	[ 'f5_231111',		'23_Isa1111_Pathros_Tablet_Q003289',		'' ],
	[ 'f5_231317',		'23_Isa1317_Median_Soldier',				'' ],
	[ 'f5_232001',		'23_Isa2001_Sargon_Ashdod',					'' ],
	[ 'f5_232111',		'DUPLICATE',								'l5_050201' ],	// 05_Deu0201_Mount_Baqir
	[ 'f5_232215',		'23_Isa2215_Shebna_Tomb',					'' ],
	[ 'f5_233004',		'23_Isa3004_Hanes_Bas_Relief',				'' ],
	[ 'f5_233008',		'23_Isa3008_Great_Isaiah_Scroll',			'' ],
	[ 'f5_233406',		'23_Isa3406_EdomBozrah',					'' ],
	[ 'f5_233601',		'DUPLICATE',								'h8_121814' ],	// 12_2Kin1814_Lachish_Relief
	[ 'f5_233602',		'DUPLICATE',								'h8_121817' ],	// 12_2Kin1817_Siloam_Inscription
	[ 'f5_233708',		'DUPLICATE',								'h8_121908' ],	// 12_2Kin1908_Lachish_SiegeRamps
	[ 'f5_233709',		'DUPLICATE',								'h8_121909' ],	// 12_2Kin1909_Taharqa_KarnakTemple
	[ 'f5_233736',		'DUPLICATE',								'h8_121935' ],	// 12_2Kin1935_Herodotus_Histories
	[ 'f5_233738',		'DUPLICATE',								'h8_121937' ],	// 12_2Kin1937_ArdaMulissu_Relief
	[ 'f5_233901',		'DUPLICATE',								'h8_122012' ],	// 12_2Kin2012_Babylon_MerodachBaladan
	[ 'f5_234501',		'23_Isa4501_CMa_Inscription',				'' ],

	[ 'f5_240216',		'24_Jer0216_Tahpanhes_City',				'' ],
	[ 'f5_242001',		'24_Jer2001_GedaliahBenImmer_Seal',			'' ],
	[ 'f5_242401',		'24_Jer2401_Babylon_Arrowhead',				'' ],
	[ 'f5_242801',		'24_Jer2801_HananiahBenAzariah_Seal',		'' ],
	[ 'f5_242903',		'24_Jer2903_HananBenHilkiah_Seal',			'' ],
	[ 'f5_243610',		'24_Jer3610_GemariahBenShaphan_Seal',		'' ],
	[ 'f5_243612',		'24_Jer3612_ElishamaBenSemachiah_Seal',		'' ],
	[ 'f5_243626',		'24_Jer3626_JerahmeelBenJehoiakim_Seal',	'' ],
	[ 'f5_243703',		'24_Jer3703_JehucalBenShelemiah_Seal',		'' ],
	[ 'f5_243801',		'24_Jer3801_GedaliahBenPashur_Seal',		'' ],
	[ 'f5_243806',		'24_Jer3806_MalchiahBenZedekiah_Seal',		'' ],
	[ 'f5_243903',		'24_Jer3903_NeboSarsekimTablet',			'' ],
	[ 'f5_243913',		'24_Jer3913_Neriglissar_Chronicle',			'' ],
	[ 'f5_244008',		'24_Jer4008_MiamenBenEphai_Seal',			'' ],
	[ 'f5_244014',		'24_Jer4014_AmmonKingBaalis_Seal',			'' ],
	[ 'f5_244602',		'DUPLICATE',								'h8_122329' ], // 12_2Kin2329_LATE_dynasty26_Necho2; ?h0_143520? Carchemish
	[ 'f5_244625',		'24_Jer4625_Thebes_LuxorTemple',			'' ],
	[ 'f5_244430',		'24_Jer4430_Wahibre_Stele',					'' ],
	[ 'f5_245111',		'24_Jer5111_Median_Ecbatana',				'' ],
	[ 'f5_245159',		'24_Jer5159_SeraiahBenNeriah_Seal',			'' ],
	[ 'f5_245217',		'DUPLICATE',								'h8_122401' ],	// 12_2Kin2401_Jerusalem_Chronicle
	[ 'f5_245228',		'24_Jer5228_ExileTablets',					'' ],
	[ 'f5_245231',		'DUPLICATE',								'h8_122527' ],	// 12_2Kin2527_EvilMerodach
	[ 'f5_245234',		'DUPLICATE',								'h8_122530' ],	// 12_2Kin2530_Jehoiachin_Ration
	[ 'f5_250421',		'25_Lam0421_Uz_WarScroll',					'' ],

	[ 'f5_260101',		'26_Eze0101_ChebarRiver',					'' ],
	[ 'f5_260315',		'26_Eze0315_Murashu_Archive',				'' ],
	[ 'f5_260811',		'26_Eze0811_JaazaniahBenShaphan_Seal',		'' ],
	[ 'f5_261715',		'26_Eze1715_Psamtik2_NubianStele',			'' ],
	[ 'f5_262607',		'26_Eze2607_Seige_Of_Tyre',					'' ],
	[ 'f5_262902',		'DUPLICATE',								'f5_244430' ],	// 24_Jer4430_Wahibre_Stele
	[ 'f5_263014',		'DUPLICATE',								'f5_244625' ],	// 24_Jer4625_Thebes_City
	[ 'f5_263018',		'DUPLICATE',								'f5_240216' ],	// 24_Jer0216_Tahpanhes_City
	[ 'f5_263502',		'DUPLICATE',								'l5_050201' ],	// 05_Deu0201_Mount_Baqir
	[ 'f5_264710',		'DUPLICATE',								'h4_092329' ],	// 09_1Sam2329_EinGedi_Site

	[ 'f5_270101',		'27_Dan0101_Nebuchadnezzar_Brick',			'' ],
	[ 'f5_270106',		'27_Dan0106_Nebuchadnezzar2_Prism',			'' ],
	[ 'f5_270501',		'27_Dan0501_Nabonidus_CylinderUr',			'' ],
	[ 'f5_270502',		'27_Dan0502_Nabonidus_HarranStela',			'' ],
	[ 'f5_270529',		'27_Dan0529_Nabonidus_Verse_Account',		'' ],
	[ 'f5_270531',		'27_Dan0531_Nabonidus_Chronicle',			'' ],

	[ 'fm_280104',		'28_Hos0104_JezreelValley',					'' ],
	[ 'fm_280501',		'DUPLICATE',								'h1_061912' ],	// 06_Josh1912_Mount_Tabor
	[ 'fm_290308',		'29_Joel0308_SabeanScript_Yemen',			'' ],
	[ 'fm_290318',		'29_Joel0318_Shittim_Valley',				'' ],
	[ 'fm_300101',		'30_Amos0101_Khirbet_Teqoa',				'' ],
	[ 'fm_300508',		'DUPLICATE',								'pt_180909' ],	// 18_Job0909_Plieades_Asterism
	[ 'fm_310101',		'DUPLICATE',								'l4_042014' ],	// 04_Num2014_Edom_arial
	[ 'fm_310103',		'31_Obad0103_Edom_Petra_AlKhazneh',			'' ],
	[ 'fm_310119',		'31_Obad0119_Shephelah_Foothills',			'' ],
	[ 'fm_320102',		'32_Jon0102_Nineveh_AdadGate',		 		'' ],
	[ 'fm_320103',		'32_Jon0103_Joppa_City',					'' ],
	[ 'fm_320201',		'32_Jon0201_Cachalot_Whale',				'' ],
	[ 'fm_320306',		'32_Jon0306_AshurDan3_Cone',				'' ],
	[ 'fm_320402',		'DUPLICATE',								'h6_111022' ],	// 11_1Kin1022_Tarshish_NoraStone
	[ 'fm_330502',		'DUPLICATE',								'h3_080101' ],	// 08_Ruth0101_Bethlehem_City

	[ 'fm_340101',		'34_Nah0101_Iraq_Alqosh',					'' ],
	[ 'fm_340208',		'DUPLICATE',								'fm_320102' ],	// 32_Jon0102_Nineveh_AdadGate
	[ 'fm_340308',		'DUPLICATE',								'f5_244625' ],	// 24_Jer4625_Thebes_City
	[ 'fm_350303',		'35_Hab0303_MountParan_ABR',				'' ],
	[ 'fm_360111',		'36_Zeph0111_Morter_MachteshRamon',			'' ],
	[ 'fm_370101',		'37_Hag0101_Darius_Persepolis',				'' ],
	[ 'fm_380101',		'38_Zech0101_Darius1_PersepolisApadana',	'' ],
	[ 'fm_381404',		'DUPLICATE',								'h5_101530' ],	// 10_2Sam1530_Mount_Olives
	[ 'fm_390101',		'39_Mal0101_Persia_Artaxerxes1',			'' ],
];

const imgNewGos=[ // 27 books; 40-66, Gospels MMLJ

	[ 'ng_400101',		'40_Matt0101_Jesus',					'' ],
	[ 'ng_400201',		'40_Matt0201_Herodium',					'' ],
	[ 'ng_400202',		'40_Matt0202_TheStar',					'' ],
	[ 'ng_400206',		'DUPLICATE',							'h3_080101' ],	// 08_Ruth0101_Bethlehem_City
	[ 'ng_400219',		'40_Matt0219_HerodSarcophagus',			'' ],
	[ 'ng_400222',		'40_Matt0222_HerodArchelaus_coin',		'' ],
	[ 'ng_400223',		'40_Matt0223_Nazareth_House',			'' ],
	[ 'ng_400301',		'40_Matt0301_Antiquities',				'' ],
	[ 'ng_400405',		'40_Matt0405_Herods_Temple',			'' ],
	[ 'ng_400413',		'40_Matt0413_Capernaum_City',			'' ],
	[ 'ng_400423',		'40_Matt0423_Theodotos_Inscription',	'' ],
	[ 'ng_401406', 		'40_Matt1406_Aristobulus_Salome_coin',	'' ],
	[ 'ng_402101',		'DUPLICATE',							'h5_101530' ],	// 10_2Sam1530_Mount_Olives
	[ 'ng_402219',		'40_Matt2219_Tiberius_Coin',			'' ],
	[ 'ng_402402',		'40_Matt2402_Titus_Arch_Spoils',		'' ],
	[ 'ng_402603',		'40_Matt2603_CaiaphasOssuary',			'' ],
	[ 'ng_402636',		'40_Matt2636_GethsemaneGarden',			'' ],
	[ 'ng_402702',		'40_Matt2702_PilateInscription',		'' ],
	[ 'ng_402726',		'40_Matt2726_Crucified_Foot',			'' ],
	[ 'ng_402806',		'40_Matt2806_Testimonium_Greek',		'' ],

	[ 'ng_410104',		'DUPLICATE',							'ng_400301' ],	// 40_Matt0301_Antiquities
	[ 'ng_410109',		'DUPLICATE',							'ng_400223' ],	// 40_Matt0223_Nazareth_House
	[ 'ng_410121',		'41_Mark0121_Capernaum_Synagogue',		'' ],			// ng_430659
	[ 'ng_410201',		'DUPLICATE',							'ng_400413' ],	// 40_Matt0413_Capernaum_City
	[ 'ng_410306',		'DUPLICATE',							'ng_400201' ],	// 40_Matt0201_Herodium
	[ 'ng_410622',		'DUPLICATE',							'ng_401406' ],	// 40_Matt1406_Aristobulus_Salome_coin
	[ 'ng_411101',		'DUPLICATE',							'h5_101530' ],	// 10_2Sam1530_Mount_Olives
	[ 'ng_411111',		'DUPLICATE',							'ng_400423' ],	// 40_Matt0423_Theodotos_Inscription
	[ 'ng_411115',		'DUPLICATE',							'ng_400405' ],	// 40_Matt0405_Herods_Temple
	[ 'ng_411215',		'DUPLICATE',							'ng_402219' ],	// 40_Matt2219_Tiberius_Coin
	[ 'ng_411302',		'DUPLICATE',							'ng_402402' ],	// 40_Matt2402_Titus_Arch_Spoils
	[ 'ng_411432',		'DUPLICATE',							'ng_402636' ],	// 40_Matt2636_GethsemaneGarden
	[ 'ng_411447',		'DUPLICATE',							'ng_402603' ],	// 40_Matt2603_CaiaphasOssuary
	[ 'ng_411501',		'DUPLICATE',							'ng_402702' ],	// 40_Matt2702_PilateInscription
	[ 'ng_411524',		'DUPLICATE',							'ng_402726' ],	// 40_Matt2726_Crucified_Foot
	[ 'ng_411606',		'DUPLICATE',							'ng_402806' ],	// 40_Matt2806_Testimonium_Greek

	[ 'ng_420105',		'DUPLICATE',							'ng_400201' ],	// 40_Matt0201_Herodium
	[ 'ng_420109',		'DUPLICATE',							'ng_400405' ],	// 40_Matt0405_Herods_Temple
	[ 'ng_420126',		'DUPLICATE',							'ng_400223' ],	// 40_Matt0223_Nazareth_House
	[ 'ng_420163',		'DUPLICATE',							'ng_400301' ],	// 40_Matt0301_Antiquities
	[ 'ng_420201',		'42_Luke0201_Augustus',					'' ],
	[ 'ng_420202',		'42_Luke0202_QuiriniusInscription',		'' ],
	[ 'ng_420301_1',	'42_Luke0301_Tiberias_Ceasar',			'' ],
	[ 'ng_420301_2',	'42_Luke0301_Pilate_Inscripton',		'' ],
	[ 'ng_420301_3',	'42_Luke0301_HerodAntipas_Coins',		'' ],
	[ 'ng_420301_4',	'42_Luke0301_HerodPhillip_Coins',		'' ],
	[ 'ng_420301_5',	'42_Luke0301_Lysanias_Inscripton',		'' ],
	[ 'ng_420302',		'DUPLICATE',							'ng_402603' ],	// 40_Matt2603_CaiaphasOssuary
	[ 'ng_420319',		'DUPLICATE',							'ng_401406' ],	// 40_Matt1406_Aristobulus_Salome_coin
	[ 'ng_420415',		'DUPLICATE',							'ng_400423' ],	// 40_Matt0423_Theodotos_Inscription
	[ 'ng_420431',		'DUPLICATE',							'ng_400413' ],	// 40_Matt0413_Capernaum_City
	[ 'ng_421929',		'DUPLICATE',							'h5_101530' ],	// 10_2Sam1530_Mount_Olives
	[ 'ng_422024',		'DUPLICATE',							'ng_402219' ],	// 40_Matt2219_Tiberius_Coin
	[ 'ng_422106',		'DUPLICATE',							'ng_402402' ],	// 40_Matt2402_Titus_Arch_Spoils
	[ 'ng_422239',		'DUPLICATE',							'ng_402636' ],	// 40_Matt2636_GethsemaneGarden
	[ 'ng_422301',		'DUPLICATE',							'ng_402702' ],	// 40_Matt2702_PilateInscription
	[ 'ng_422333',		'DUPLICATE',							'ng_402726' ],	// 40_Matt2726_Crucified_Foot
	[ 'ng_422406',		'DUPLICATE',							'ng_402806' ],	// 40_Matt2806_Testimonium_Greek

	[ 'ng_430101',		'43_John0101_Christian_Mosaic',			'' ],
	[ 'ng_430106',		'DUPLICATE',							'ng_400301' ],	// 40_Matt0301_Antiquities
	[ 'ng_430145',		'DUPLICATE',							'ng_400223' ],	// 40_Matt0223_Nazareth_House
	[ 'ng_430212',		'DUPLICATE',							'ng_400413' ],	// 40_Matt0413_Capernaum_City
	[ 'ng_430214',		'DUPLICATE',							'ng_400405' ],	// 40_Matt0405_Herods_Temple
	[ 'ng_430502',		'43_John0502_BethesdaPool',				'' ],
	[ 'ng_430659',		'DUPLICATE',							'ng_410121' ],	// 41_Mark0121_Capernaum_Synagogue
	[ 'ng_430801',		'DUPLICATE',							'h5_101530' ],	// 10_2Sam1530_Mount_Olives
	[ 'ng_430907',		'43_John0907_PoolSiloam',				'' ],
	[ 'ng_431022',		'43_John1022_Hanukkah',					'' ],
	[ 'ng_431829',		'DUPLICATE',							'ng_402702' ],	// 40_Matt2702_PilateInscription
	[ 'ng_431831',		'43_John1831_33_RylandP457Recto',		'' ],
	[ 'ng_431837',		'43_John1837_38_RylandP457Verso',		'' ],
	[ 'ng_431918',		'DUPLICATE',							'ng_402726' ],	// 40_Matt2726_Crucified_Foot
	[ 'ng_432001',		'DUPLICATE',							'ng_402806' ],	// 40_Matt2806_Testimonium_Greek
	[ 'ng_432028',		'43_John2028_Alexamenos_Graffito',		'' ],
];

const imgNewEpi=[ // Acts_Pauline_General_Rev

	[ 'na_440827',		'44_Acts0827_EthiopianQueenCandace',	'' ],
	[ 'na_440911',		'44_Acts0911_Street_Straight',			'' ],
	[ 'na_441128',		'44_Acts1128_Claudius',					'' ],
	[ 'na_441201',		'44_Acts1201_HerodAgrippa1_Coin',		'' ],
	[ 'na_441719',		'44_Acts1719_MarsHill',					'' ],
	[ 'na_441723',		'44_Acts1723_AltarUnknownGod',			'' ],
	[ 'na_441728',		'44_Acts1728_Aratus_Soli',				'' ],
	[ 'na_441812',		'44_Acts1812_GallioInscription',		'' ],
	[ 'na_441924',		'44_Acts1924_ArtemisStatue',			'' ],
	[ 'na_441927',		'44_Acts1927_ArtemisTemple',			'' ],
	[ 'na_441929',		'44_Acts1929_EphesusTheater',			'' ],
	[ 'na_442513',		'44_Acts2513_HerodAgrippa2_TitusCoin',	'' ],
	[ 'na_442712',		'44_Acts2712_Phoenix_Arch',				'' ],

	// 13 books; 45-57	PaulineEpistles
	[ 'np_450107',		'45_Rom0107_Colosseum',					'' ],
	[ 'np_451601',		'45_Rom1601_Kechries_Basilica', 		'' ],
	[ 'np_451610',		'45_Rom1610_Aristobulus_Coin',			'' ],

	[ 'np_460101',		'46_1Cor0101_Corinth',					'' ],
	[ 'np_461533',		'46_1Cor1533_Menander_Masks',			'' ],
	[ 'np_471132',		'47_2Cor1132_NabateaAretas4_coin',		'' ],
	[ 'np_471133',		'47_2Cor1133_1209_P046',				'' ],

	[ 'np_480101',		'48_Gal0101_RomanTheatre',				'' ],	// - 48_Gal0101_TheatreRoman
	[ 'np_480101_1',	'48_Gal0101_SideTheatre',				'' ],	// x 48_Gal0101_TheatreSide
	[ 'np_490101',		'49_Eph0101_Church',					'' ],	// - 49_Eph0101_Church
	[ 'np_490101_1',	'49_Eph0101_Theater',					'' ],	// x 49_Eph0101_Theater
	[ 'np_500101',		'50_Phil0101_city',						'' ],	// - 50_Phil0101_Ruins
	[ 'np_500101_1',	'50_Phil0101_theater',					'' ],	// x 50_Phil0101_Theater
	[ 'np_510101',		'51_Col0101_ruins',						'' ],	// - 51_Col0101_Ruins
	[ 'np_510101_1',	'51_Col0101_acropolis',					'' ],	// x 51_Col0101_Theater
	[ 'np_520101',		'52_1The0101_acropolis',				'' ],	// - 52_1The0101_Theater
	[ 'np_520101_1',	'52_1The0101_queenThessaloniki',		'' ],	// x 52_1The0101_queenThessaloniki
	[ 'np_530101',		'53_2The0101_ruins',					'' ],	// - 53_2The0101_Ruins

	[ 'np_540313',		'54_1Tim0313_0408_P133',				'' ],
	[ 'np_540613',		'DUPLICATE',							'ng_402702' ],	// 40_Matt2702_PilateInscription
	[ 'np_550420',		'55_2Tim0420_ErastusInscription',		'' ],
	[ 'np_560112',		'56_Titu0112_Epimenides_Cretans',		'' ],
	[ 'np_570013',		'57_Phle13_P087',						'' ],

	// 09 books; 58-65, 09 = 08 + 01; GeneralEpistles & Revelation
	[ 'ne_580107',		'58_Heb0107_12_P114',					'' ],
	[ 'ne_581010',		'58_Heb1010_Talmud_Fragments',			'' ],
	[ 'ne_590101',		'59_Jam0101_Antiquities',				'' ],
	[ 'ne_590226',		'59_Jam0226_P020',						'' ],
	[ 'ne_600101',		'60_1Pet0101_map',						'' ],
	[ 'ne_610101',		'61_2Pet0101_P072',						'' ],
	[ 'ne_610114',		'61_2Pet0114_Nero',						'' ],
	[ 'ne_620101',		'62_1John0101_Domitian',				'' ],
	[ 'ne_630101',		'63_2John0101_Uncial_recto',			'' ],
	[ 'ne_640101',		'64_3John0101_CodexSinaiticus',			'' ],
	[ 'ne_650014',		'65_Jude_14_Enoch_12',					'' ],

	[ 'nr_660104',		'66_Rev0104_7Churches_map',				'' ],
	[ 'nr_660109',		'66_Rev0109_Patmos_Island',				'' ],
	[ 'nr_660110',		'66_Rev0110_Patmos_Cave',				'' ],
	[ 'nr_660111',		'66_Rev0111_7Churches',					'' ],
	[ 'nr_660113',		'66_Rev0113_P098',						'' ],
	[ 'nr_660201',		'66_Rev0201_1Ephesus',					'' ],
	[ 'nr_660208',		'66_Rev0208_2Smyrna',					'' ],
	[ 'nr_660212',		'66_Rev0212_3Pergamon',					'' ],
	[ 'nr_660218',		'66_Rev0218_4Thyatira',					'' ],
	[ 'nr_660301',		'66_Rev0301_5Sardis',					'' ],
	[ 'nr_660307',		'66_Rev0307_6Philadelphia',				'' ],
	[ 'nr_660314',		'66_Rev0314_7Laodicea',					'' ],
	[ 'nr_660501',		'66_Rev0501_overview_seals',			'' ],
	[ 'nr_660802',		'66_Rev0802_overview_trumpets',			'' ],
	[ 'nr_661601',		'66_Rev1601_overview_bowls',			'' ],
	[ 'nr_661616',		'66_Rev1616_TellMegiddo_plain',			'' ],
	[ 'nr_662119',		'66_Rev2119_GemstonesNewJerusalem',		'' ],

	[ 'gospel',			'gospel',								'' ],
];

const pictures =[ ...imgLaws, ...imgHst1, ...imgHst2, ...imgHst3, ...imgPoet, ...imgProp, ...imgNewGos, ...imgNewEpi ];
//----
