use youtubeDB;
db.usuariCollection.insertOne({
	"id_usuari": 1,
	"email_usuari": 'rata@hotmail.com',
	"password": '123456',
	"nom_usuari": 'rata',
	"data_naixement": '2006-10-2',
	"sexe": 'H',
	"pais": 'Espanya',
	"codi_postal": '08012',
	"video": [{
		"id_video": 1,
		"titol": 'Gat miolant',
		"descripcio": 'Es un gat que miola',
		"grandaria": 567,
		"nom_arxiu": 'c:\\dsfdsfsd.avi',
		"durada": 5.6,
		"thumbnail": 'c:\\dfadsfdas.jpg',
		"nombre_reproduccions": 31,
		"estat_video": 'public',
		"data_publicacio_video": new Date(),
		"comentaris": [
			{
				"id_comentari": 4,
				"id_usuari": 5,
				"comentari": 'Útil',
				"data_comentari": new Date(),
			},
			{
				"id_comentari": 1,
				"id_usuari": 4,
				"comentari": 'Que maco',
				"data_comentari": new Date(),
				"recompte_likes_comentaris": [
					{"id_usuari": 2,
					"like_dislike": true,
					"data_like_comentari": new Date()}
				]
			}
		],
	},
	{
		"id_video": 2,
		"titol": 'Gos bordant',
		"descripcio": 'Es un gos que borda',
		"grandaria": 256,
		"nom_arxiu": 'c:\\ere.avi',
		"durada": 3.2,
		"thumbnail": 'c:\\eqewqw.jpg',
		"nombre_reproduccions": 50,
		"estat_video": 'ocult',
		"data_publicacio_video": new Date(),
		"likes_videos": [
			{
				"id_usuari": 4,
				"like_dislike": true,
				"data_publicacio_like_video": new Date()
			},
			{
				"id_usuari": 3,
				"like_dislike": true,
				"data_publicacio_like_video": new Date()
			}
		],
		"comentaris": [
			{
				"id_comentari": 2,
				"id_usuari": 4,
				"comentari": 'M\'agrada',
				"data_comentari": new Date(),
				"recompte_likes_comentaris": [
					{
					"id_usuari": 1,
					"like_dislike": false,
					"data_like_comentari": new Date()}
				]
			}
		]
	},
	{
		"id_video": 3,
		"titol": 'Nen plorant',
		"descripcio": 'Es un nen que plora',
		"grandaria": 879,
		"nom_arxiu": 'c:\\dewrdsfsd.avi',
		"durada": 1.2,
		"thumbnail": 'c:\\nv.bn.vbn.jpg',
		"nombre_reproduccions": 200,
		"estat_video": 'public',
		"data_publicacio_video": new Date(),
		"etiquetes": [
			{
				"id_etiqueta": 1,
				"id_usuari": 2,
				"nom_etiqueta": 'Etiqueta 1',
			},
			{
				"id_etiqueta": 2,
				"id_usuari": 3,
				"nom_etiqueta": 'Etiqueta 2',
			},
			{
				"id_etiqueta": 3,
				"id_usuari": 4,
				"nom_etiqueta": 'Etiqueta 3',
			}

		],
		"comentaris": [
			{
				"id_comentari": 3,
				"id_usuari": 5,
				"comentari": 'Molt interessant',
				"data_comentari": new Date(),
				"recompte_likes_comentaris": [
					{
					"id_usuari": 5,
					"like_dislike": true,
					"data_like_comentari": new Date()}
				]
			}
		]
	}
	],
	"canal": {
		"id_canal": 1,
		"nom_canal": 'El canal de la rata',
		"descripcio_canal": 'Els meus videos',
		"data_creacio": new Date()
	},
	"subscripcions": [
		{"id_canal": 2}
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
	"codi_postal": '08016',
	"video": [{
		"id_video": 4,
		"titol": 'Broma',
		"descripcio": 'Ensurt',
		"grandaria": 3435,
		"nom_arxiu": 'c:\\dfdsa.avi',
		"durada": 30.6,
		"thumbnail": 'c:\\dftrrhhj.jpg',
		"nombre_reproduccions": 34,
		"estat_video": 'privat',
		"data_publicacio_video": new Date(),
		"comentaris": [
			{
				"id_comentari": 5,
				"id_usuari": 3,
				"comentari": 'Refrescant',
				"data_comentari": new Date(),
			}
		]
	},
	{
		"id_video": 5,
		"titol": 'Gameplay',
		"descripcio": 'Demostracio d\'un joc',
		"grandaria": 13423,
		"nom_arxiu": 'c:\\dsfdsfuiiusd.avi',
		"durada": 45.30,
		"thumbnail": 'c:\\wqewqew.jpg',
		"nombre_reproduccions": 104,
		"estat_video": 'public',
		"data_publicacio_video": new Date(),
	}
	],
	"canal": {
		"id_canal": 2,
		"nom_canal": 'El canal del gos',
		"descripcio_canal": 'Videos casolans',
		"data_creacio": new Date()
	},
	"subscripcions": [
		{"id_canal": 1}
	]
});

db.usuariCollection.insertOne({
	"id_usuari": 3,
	"email_usuari": 'gat@hotmail.com',
	"password": '098765',
	"nom_usuari": 'gat',
	"data_naixement": '2006-10-2',
	"sexe": 'D',
	"pais": 'Espanya',
	"codi_postal": '08013',
	"subscripcions": [
		{"id_canal": 1},
		{"id_canal": 2}
	],
	"playlist": {
		"id_playlist": 2,
		"nom_playlist": 'Videos interessants',
		"data_creacio": '2021-10-1',
		"playlist_publica": true,
		"contingut_playlist": [
			{"id_video": 4},
			{"id_video": 5}
		]
	}
});

db.usuariCollection.insertOne({
	"id_usuari": 4,
	"email_usuari": 'ruc@hotmail.com',
	"password": 'qwerty',
	"nom_usuari": 'ruc',
	"data_naixement": '2006-10-2',
	"sexe": 'H',
	"pais": 'Espanya',
	"codi_postal": '09018',
	"subscripcions": [
		{"id_canal": 1}
	],
	"playlist": {
		"id_playlist": 1,
		"nom_playlist": 'Recull videos',
		"data_creacio": '2021-9-11',
		"playlist_publica": false,
		"contingut_playlist": [
			{"id_video": 1},
			{"id_video": 2},
			{"id_video": 3}
		]
	}
});