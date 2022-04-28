use pizzeriaDB;
db.clientCollection.insertOne({
	"id_client": 1, 
	"nom_client": 'Oscar', 
	"adreca": 'Carrer Mallorca 55', 
	"codi_postal": '08013', 
	"id_localitat": 1, 
	"telefon_client": '537272',
	"comanda": [
		{"id_comanda": 1,
		"tipus_comanda": 'repartiment a domicili', 
		"productes_comanda":[
			{ "id_producte": 1,
			"quantitat_producte": 1
			},
			{ "id_producte":2,
			"quantitat_producte": 1
			},
			{ "id_producte":9,
			"quantitat_producte": 2
			}
		],
		"preu_total": 35.95, 
		"id_botiga": 1,
		"data_entrega": '2020-07-10 14:50:23',
		"id_empleat": 1
		},
		{"id_comanda": 3,
		"tipus_comanda": 'recollir a botiga', 
		"productes_comanda":[
			{ "id_producte": 3,
			"quantitat_producte": 3
			},
			{ "id_producte":5,
			"quantitat_producte": 1
			}
		],
		"preu_total": 35.95, 
		"id_botiga": 1
		},
		{"id_comanda": 6,
		"tipus_comanda": 'repartiment a domicili', 
		"productes_comanda":[
			{ "id_producte": 2,
			"quantitat_producte": 1
			},
			{ "id_producte":5,
			"quantitat_producte": 1
			},
			{ "id_producte":8,
			"quantitat_producte": 1
			},
			{ "id_producte":9,
			"quantitat_producte": 1
			}
		],
		"preu_total": 19.90, 
		"id_botiga": 1,
		"data_entrega": '2021-07-23 20:50:23',
		"id_empleat": 2
	},
	]

});

db.clientCollection.insertOne({
	"id_client": 2, 
	"nom_client": 'Ramon', 
	"adreca": 'Carrer Girona 32', 
	"codi_postal": '08013', 
	"id_localitat": 1, 
	"telefon_client": '4535245',
	"comanda": [
		{"id_comanda": 2,
		"tipus_comanda": 'recollir a botiga', 
		"productes_comanda":[
			{ "id_producte": 4,
			"quantitat_producte": 2
			},
			{ "id_producte":8,
			"quantitat_producte": 2
			}
		],
		"preu_total": 15.95, 
		"id_botiga": 2,
		}
	]
});

db.clientCollection.insertOne({
	"id_client": 3, 
	"nom_client": 'Jordi', 
	"adreca": 'Carrer Valencia 67', 
	"codi_postal": '08012', 
	"id_localitat": 1, 
	"telefon_client": '87876',
	"comanda": [
		{"id_comanda": 4,
		"tipus_comanda": 'repartiment a domicili', 
		"productes_comanda":[
			{ "id_producte": 1,
			"quantitat_producte": 1
			},
			{ "id_producte":2,
			"quantitat_producte": 2
			},
			{ "id_producte":3,
			"quantitat_producte": 1
			},
			{ "id_producte":8,
			"quantitat_producte": 2
			},
			{ "id_producte":9,
			"quantitat_producte": 1
			}
		],
		"preu_total": 34.95, 
		"id_botiga": 3,
		"data_entrega": '2020-06-9 19:50:23',
		"id_empleat": 1
		}
	]
});

db.clientCollection.insertOne({
	"id_client": 4, 
	"nom_client": 'Ariadna', 
	"adreca": 'Carrer Castillejos 23', 
	"codi_postal": '08014', 
	"id_localitat": 1, 
	"telefon_client": '234124',
	"comanda": [
		{"id_comanda": 5,
		"tipus_comanda": 'recollir a botiga', 
		"productes_comanda":[
			{ "id_producte": 1,
			"quantitat_producte": 1
			},
			{ "id_producte":2,
			"quantitat_producte": 2
			},
			{ "id_producte":6,
			"quantitat_producte": 2
			},
			{ "id_producte":7,
			"quantitat_producte": 1
			},
			{ "id_producte":8,
			"quantitat_producte": 2
			},
			{ "id_producte":9,
			"quantitat_producte": 2
			}
		],
		"preu_total": 57.90, 
		"id_botiga": 4
		}
	]
});

db.clientCollection.insertOne({
	"id_client": 5, 
	"nom_client": 'Miquel', 
	"adreca": 'Carrer Roc i boronat 245', 
	"codi_postal": '08016', 
	"id_localitat": 1, 
	"telefon_client": '567956'
});

db.clientCollection.insertOne({
	"id_client": 6, 
	"nom_client": 'Guillem', 
	"adreca": 'Carrer del Call 25', 
	"codi_postal": '08516', 
	"id_localitat": 4, 
	"telefon_client": '9236334'
});

db.botigaCollection.insertOne({
	"id_botiga": 1,
	"id_localitat": 1,
	"adreca": 'Carrer Padilla 55',
	"codi_postal": '08013',
	empleats: [
		{
		"id_empleat": 1,	
		"nom_empleat": 'Ruben',   
		"cognoms_empleat": 'Romero',  
		"nif_empleat": '42524F', 
		"telefon_empleat": '5236272', 
		"feina_empleat": 'repartidor'
		},
		{
		"id_empleat": 2,	
		"nom_empleat": 'Marta',      
		"cognoms_empleat": 'Garcia',  
		"nif_empleat": '32423G', 
		"telefon_empleat": '4523564', 
		"feina_empleat": 'repartidor'
		},
		{
		"id_empleat": 3,	
		"nom_empleat": 'Elisenda',    
		"cognoms_empleat": 'Lopez',  
		"nif_empleat": '8754233K',
		"telefon_empleat": '678969', 
		"feina_empleat": 'cuiner'
		},
		{
		"id_empleat": 4,	
		"nom_empleat": 'Carles',    
		"cognoms_empleat": 'Rodriguez',  
		"nif_empleat": '234234C', 
		"telefon_empleat": '56785567',  
		"feina_empleat": 'cuiner'
		}
	]
});

db.botigaCollection.insertOne({
	"id_botiga": 2,
	"id_localitat": 1,
	"adreca": 'Carrer Corsega 155',
	"codi_postal": '08014',
});

db.botigaCollection.insertOne({
	"id_botiga": 3,
	"id_localitat": 1,
	"adreca": 'Carrer Sardenya 34',
	"codi_postal": '08016',
});

db.botigaCollection.insertOne({
	"id_botiga": 4,
	"id_localitat": 1,
	"adreca": 'Carrer Aragó 145',
	"codi_postal": '08013',
});

db.botigaCollection.insertOne({
	"id_botiga": 5,
	"id_localitat": 4,
	"adreca": 'Carrer Fonadors 12',
	"codi_postal": '08315',
	empleats: [
		{
		"id_empleat": 5,	
		"nom_empleat": 'Pere',    
		"cognoms_empleat": 'Gonzalez',  
		"nif_empleat": '4555534V', 
		"telefon_empleat": '768568', 
		"feina_empleat": 'repartidor'
		},
		{
		"id_empleat": 6,	
		"nom_empleat": 'David',    
		"cognoms_empleat": 'Trias', 
		"nif_empleat": '2352422S', 
		"telefon_empleat": '578576', 
		"feina_empleat": 'cuiner' 
		}
	]
});

db.botigaCollection.insertOne({
	"id_botiga": 6,
	"id_localitat": 4,
	"adreca":'Carrer del Call 7',
	"codi_postal": '08021',
});

db.producteCollection.insertOne({
	"id_producte": 1,
	"nom_producte": 'Pizza vegetal', 
	"descripcio_producte": 'Perfecte pels vegetarians',
	"imatge": 'c:\\dasdas\\adadsas.jpg',
	"preu": 7.95,
	"tipus_producte": 'pizza',
	"categoria": 'Vegetariana'
});

db.producteCollection.insertOne({
	"id_producte": 2,
	"nom_producte": 'Pizza Quatre Estacions',
	"descripcio_producte": 'Pizza molt gustosa',
	"imatge": 'c:\\dasdas\\erewwe.jpg',
	"preu": 7.95,
	"tipus_producte": 'pizza',
	"categoria": 'D\'estiu'
});

db.producteCollection.insertOne({
	"id_producte": 3,
	"nom_producte": 'Pizza Barbacoa',
	"descripcio_producte": 'Pizza amb massa gruixuda',
	"imatge": 'c:\\dasdas\\tuiui.jpg',
	"preu": 7.95,
	"tipus_producte": 'pizza',
	"categoria": 'Tot carn'
});

db.producteCollection.insertOne({
	"id_producte": 4,
	"nom_producte": 'Pizza Quatre formatges', 
	"descripcio_producte": 'Pizza aroma intens',
	"imatge": 'c:\\dasdas\\uipp.jpg',
	"preu": 7.95,
	"tipus_producte": 'pizza',
	"categoria": 'Sense Gluten'
});

db.producteCollection.insertOne({
	"id_producte": 5,
	"nom_producte": 'Hamburguesa bacon i formatge', 
	"descripcio_producte": 'Carn de primera qualitat',
	"imatge": 'c:\\dasdas\\qweqrw.jpg',
	"preu": 7.95,
	"tipus_producte": 'hamburguesa'
});

db.producteCollection.insertOne({
	"id_producte": 6,
	"nom_producte": 'Hamburguesa complerta',
	"descripcio_producte":  'Porta ou ferrat, becon, formatge, enciam, ceba',
	"imatge": 'c:\\dasdas\\xzxzxz.jpg',
	"preu": 7.95,
	"tipus_producte": 'hamburguesa'
});

db.producteCollection.insertOne({
	"id_producte": 7,
	"nom_producte": 'Vi', 
	"descripcio_producte": 'Vi de la casa',
	"imatge": 'c:\\dasdas\\rioh.jpg',
	"preu": 8.95,
	"tipus_producte": 'beguda'
});

db.producteCollection.insertOne({
	"id_producte": 8,
	"nom_producte": 'Aigua', 
	"descripcio_producte": 'Aigua del Pirineu',
	"imatge": 'c:\\dasdas\\xchllui.jpg',
	"preu": 0.95,
	"tipus_producte": 'beguda'
});

db.producteCollection.insertOne({
	"id_producte": 9,
	"nom_producte": 'Refresc',
	"descripcio_producte": 'Refresc a triar',
	"imatge": 'c:\\dasdas\\fwewew.jpg',
	"preu":  1.95,
	"tipus_producte": 'beguda'
});

db.provinciaCollection.insertOne({
	"id_provincia": 1,
	"nom_provincia": 'Barcelona',
	"localitats": [
		{"id_localitat": 1 ,
		"nom_localitat":'Barcelona'
		},
		{"id_localitat": 5 ,
		"nom_localitat":'L\'Hospitalet de Llobregat'
		},
		{"id_localitat": 6 ,
		"nom_localitat":'Cornellà'
		},
		{"id_localitat": 7 ,
		"nom_localitat": 'Badalona'
		},

	]
});

db.provinciaCollection.insertOne({
	"id_provincia": 2,
	"nom_provincia": 'Tarragona',
	"localitats": [
		{"id_localitat": 2,
		"nom_localitat": 'Tarragona'
		}
	]
});

db.provinciaCollection.insertOne({
	"id_provincia": 3,
	"nom_provincia": 'Lleida',
	"localitats": [
		{"id_localitat": 3,
		"nom_localitat": 'Lleida'
		},
		{"id_localitat": 8,
		"nom_localitat": 'Mollerussa'
		},
		{"id_localitat": 9,
		"nom_localitat": 'Guissona'
		}
	]
});

db.provinciaCollection.insertOne({
	"id_provincia": 4,
	"nom_provincia": 'Girona',
	"localitats": [
		{"id_localitat": 4,
		"nom_localitat": 'Girona'
	}
	]
});