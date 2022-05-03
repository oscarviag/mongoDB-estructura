use spotifyDB;
db.usuariCollection.insertOne({
	"id_usuari": 1,
	"email_usuari": 'rata@hotmail.com',
	"password": '123456',
	"nom_usuari": 'rata',
	"data_naixement": '2006-10-2',
	"sexe": 'H',
	"pais": 'Espanya',
	"codi_postal": '08012',
	"tipus_usuari": 'premium',
	"premium": {
		"data_inici": '2020-1-2' ,
		"data_renovacio": '2021-10-2',
		"data_pagament": '2021-10-2',
		"id_ordre": 1,
		"total_pvp": 14.95,
		"targeta": {
			"numero_targeta": '242342342' ,
			"mes": '02',
			"codi_targeta": '103' 
		},
	},
	"playlist": 
	[	{
		"id_playlist": 5,
		"titol": 'Musica catalana',
		"nombre_cancons": 5,
		"data_creacio": '2021-6-17',
		"cancos_playlist": [{
			"id_canco": 1,
			"id_usuari": 1,
			"data_afegit": '2021-2-7',
			},{
			"id_canco": 2,
			"id_usuari": 1,
			"data_afegit":'2021-2-7',
			},{
			"id_canco": 5,
			"id_usuari": 1,
			"data_afegit":'2021-2-7',
			},{
			"id_canco": 7,
			"id_usuari": 1,
			"data_afegit":'2021-2-7'
			}],
		},
		{
		"id_playlist": 1,
		"titol": 'Proves',
		"nombre_cancons": 0,
		"data_creacio": '2019-9-7',
		"data_eliminacio": '2019-9-7',
		"cancos_playlist": [{
			"id_canco": 1,
			"id_usuari": 1,
			"data_afegit": '2021-2-7',
		},{
			"id_canco": 2,
			"id_usuari": 1,
			"data_afegit":'2021-2-7',
		}],
	}],

	"albums_favorits":[
		{"id_album": 1},
		{"id_album": 3}
	],
	"cancons_favorites":[
		{"id_canco": 8},
		{"id_canco": 10},
		{"id_canco": 3}
	],
	"seguiment_artistes": [{
		"id_artista": 1},
		{"id_artista": 2}
	]
});

db.usuariCollection.insertOne({
	"id_usuari": 2,
	"email_usuari": 'gos@hotmail.com',
	"password": '123456',
	"nom_usuari": 'gos',
	"data_naixement": '2006-10-2',
	"sexe": 'H',
	"pais": 'Espanya',
	"codi_postal": '08013',
	"tipus_usuari": 'premium',
	"premium": {
		"data_inici": '2020-1-2' ,
		"data_renovacio": '2022-10-2',
		"data_pagament": '2022-3-2',
		"id_ordre": 2,
		"total_pvp": 14.95,
		"paypal":{
			"nom_usuari_paypal":'gos@hotmail.com',
		}
	},
	"playlist": 
	[	{
		"id_playlist": 2,
		"titol": 'Pop',
		"nombre_cancons": 2,
		"data_creacio": '2021-5-21',
		"cancos_playlist": [{
			"id_canco": 3,
			"id_usuari": 2,
			"data_afegit": '2021-2-7',
			},{
			"id_canco": 4,
			"id_usuari": 3,
			"data_afegit":'2021-2-7',
			},{
			"id_canco": 6,
			"id_usuari": 4,
			"data_afegit":'2021-2-7',
			},{
			"id_canco": 2,
			"id_usuari": 2,
			"data_afegit":'2021-2-7'
			}],
		},
		{
		"id_playlist": 3,
		"titol": 'Proves2',
		"nombre_cancons": 0,
		"data_creacio": '2019-9-7',
		"data_eliminacio": '2019-9-7',
		"cancos_playlist": [{
			"id_canco": 7,
			"id_usuari": 2,
			"data_afegit": '2021-2-7',
		},{
			"id_canco": 9,
			"id_usuari": 3,
			"data_afegit":'2021-2-7',
		}],
	}],

	"albums_favorits":[
		{"id_album": 3},
		{"id_album": 2}
	],
	"cancons_favorites":[
		{"id_canco": 2},
		{"id_canco": 3}
	],
	"seguiment_artistes": [{
		"id_artista": 3},
		{"id_artista": 2}
	]
});

db.usuariCollection.insertOne({
	"id_usuari": 3,
	"email_usuari": 'gat@hotmail.com',
	"password": '23423423',
	"nom_usuari": 'gat',
	"data_naixement": '2006-10-2',
	"sexe": 'D',
	"pais": 'Espanya',
	"codi_postal": '08013',
	"tipus_usuari": 'premium',
	"premium": {
		"data_inici": '2021-1-2' ,
		"data_renovacio": '2022-9-2',
		"data_pagament": '2022-4-22',
		"id_ordre": 2,
		"total_pvp": 16.95,
		"paypal":{
			"nom_usuari_paypal":'gat@hotmail.com',
		}
	},
	"albums_favorits":[
		{"id_album": 1},
		{"id_album": 2}
	],
	"cancons_favorites":[
		{"id_canco": 2},
		{"id_canco": 3}
	],
	"seguiment_artistes": [{
		"id_artista": 1},
		{"id_artista": 2}
	]
});

db.artistesCollection.insertOne({
	"id_artista": 1,
	"nom": 'Suu',
	"imatge_artista": 'c:\\b,b,m.m\\QEQE.jpg',
	"albums": [{
		"id_album": 1,
		"titol": 'Natural',
		"any_publicacio": '2018',
		"imatge_portada": 'c:\\rwewqrqewr.jpg',
		"cancons": [{
			"id_canco": 1,
			"titol": 'Diuen',
			"durada": 2.30,
			"reproduccions": 405
			},
			{"id_canco": 2,
			"titol": 'Parlant de tu',
			"durada": 3.05,
			"reproduccions": 341
			}
		]},
		{"id_album": 2,
		"titol": 'Ventura',
		"any_publicacio": '2020',
		"imatge_portada": 'c:\\adsfaewrew.jpg',
		"cancons": [{
			"id_canco": 3,
			"titol": 'Tant de bo',
			"durada": 2.45,
			"reproduccions": 269
			},
			{"id_canco": 4,
			"titol": 'Todo lo que canto',
			"durada": 4.05,
			"reproduccions": 602
			}
		]}
	],
	"artistes_semblants": [
		{
		"id_artista": 2},
		{"id_artista": 3}
	]
});

db.artistesCollection.insertOne({
	"id_artista": 2,
	"nom": 'Txarango',
	"imatge_artista": 'c:\\b,b,m.m\\QEQE.jpg',
	"albums": [{
		"id_album": 3,
		"titol": 'Som riu',
		"any_publicacio": '2014',
		"imatge_portada": 'c:\\rwewqrqewr.jpg',
		"cancons": [{
			"id_canco": 5,
			"titol": 'Esperança',
			"durada": 2.30,
			"reproduccions": 405
			},
			{"id_canco": 6,
			"titol": 'Compta Amb Mi',
			"durada": 3.05,
			"reproduccions": 341
			}
		]},
		{"id_album": 4,
		"titol": 'Del vent i les ales',
		"any_publicacio": '2020',
		"imatge_portada": 'c:\\adsfaewrew.jpg',
		"cancons": [{
			"id_canco": 7,
			"titol": 'A la deriva' ,
			"durada": 2.45,
			"reproduccions": 269
			},
			{"id_canco": 8,
			"titol": 'La foguera',
			"durada": 4.05,
			"reproduccions": 602
			},
			{
			"id_canco": 9,
			"titol": 'Nous camins',
			"durada": 2.45,
			"reproduccions": 269
			},
		]}
	],
	"artistes_semblants": [
		{
		"id_artista": 1},
		{"id_artista": 3}
	]
});

db.artistesCollection.insertOne({
	"id_artista": 3,
	"nom": 'Zoo',
	"imatge_artista": 'c:\\b,b,m.m\\QEQE.jpg',
	"albums": [{
		"id_album": 5,
		"titol": 'Llepolies',
		"any_publicacio": '2014',
		"imatge_portada": 'c:\\rwewqrqewr.jpg',
		"cancons": [{
			"id_canco": 10,
			"titol": 'Llepolies',
			"durada": 2.30,
			"reproduccions": 405
			},
			{"id_canco": 11,
			"titol": 'Avant',
			"durada": 3.05,
			"reproduccions": 341
			},
			{
			"id_canco": 12,
			"titol": 'Sereno',
			"durada": 2.30,
			"reproduccions": 405
			},
			{"id_canco": 13,
			"titol": 'Tir al ninot',
			"durada": 3.05,
			"reproduccions": 341
			}
		],
	}],
	"artistes_semblants": [
		{
		"id_artista": 1}
	]
});