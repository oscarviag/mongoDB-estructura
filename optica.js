use opticaDB;
db.clientCollection.insertOne({
	"nom_client": "Oscar",
	"carrer": "Mallorca",
	"numero_carrer": '89',
	"pis": '1',
	"porta": '5',
	"ciutat": 'Barcelona',
	"codi_postal": '08013',
	"pais": 'Espanya',
	"telefon": '4434836',
	"email": 'oscar@gmail.com',
	"client_recomana": 'Ramon',
	"compres":[
		{ "factura": 1,
		"data_venda": '2019-06-25',
		"graduacio_esq": 2.5,
		"graduacio_dret": 1.3 ,
		"tipus_montura": 'pasta' ,
		"color_montura": 'negre',
		"color_vidre_esq": 'transparent',
		"color_vidre_dret": 'transparent',
		"pvp": 139.95,
		"venedor": 'Ramon',
		"marca": 'Afflelou'	
		},
		{ "factura": 3,
		"data_venda": '2019-07-25',
		"graduacio_esq": 2.5,
		"graduacio_dret": 1.3 ,
		"tipus_montura": 'pasta' ,
		"color_montura": 'blau',
		"color_vidre_esq": 'groc',
		"color_vidre_dret": 'groc',
		"pvp": 19.95,
		"venedor": 'Llluis',
		"marca": 'Afflelou'	
		},
		{ "factura": 7,
		"data_venda": '2022-06-17',
		"graduacio_esq": 1.5,
		"graduacio_dret": 0.7 ,
		"tipus_montura": 'pasta' ,
		"color_montura": 'daurat',
		"color_vidre_esq": 'transparent',
		"color_vidre_dret": 'transparent',
		"pvp": 149.95,
		"venedor": 'Ramon',
		"marca": 'Rayban'	
		}
	] 
});

db.clientCollection.insertOne({
	"nom_client": 'Ramon',
	"carrer": 'Corsega',
	"numero_carrer": '8',
	"pis": '2',
	"porta": '2',
	"ciutat": 'Barcelona',
	"codi_postal": '08013',
	"pais": 'Espanya',
	"telefon": '89358399',
	"email": 'ramon@gmail.com',
	"compres":[ 
		{ "factura": 2,
		"data_venda": '2019-08-2',
		"graduacio_esq": 2.5,
		"graduacio_dret": 1.3 ,
		"tipus_montura": 'pasta' ,
		"color_montura": 'negre',
		"color_vidre_esq": 'transparent',
		"color_vidre_dret": 'transparent',
		"pvp": 139.95,
		"venedor": 'Ramon',
		"marca": 'Rayban'	
		},
		{ "factura": 6,  
		"data_venda": '2021-07-30',
		"graduacio_esq": 2.4,
		"graduacio_dret": 2.5,
		"tipus_montura": 'pasta' ,
		"color_montura": 'negre',
		"color_vidre_esq": 'groc',
		"color_vidre_dret": 'groc',
		"pvp": 199.95,
		"venedor": 'Ricard',
		"marca": 'Oakley'	
		}
	] 
});

db.clientCollection.insertOne({
	"nom_client": 'Elisenda',
	"carrer": 'Sardenya',
	"numero_carrer": '126',
	"pis": '7',
	"porta": '1A',
	"ciutat": 'Barcelona',
	"codi_postal": '08012',
	"pais": 'Espanya',
	"telefon": '637829765',
	"email": 'eli@hotmail.com',
	"client_recomana": 'Oscar',
	"compres":[ 
		{ "factura": 4, 
		"data_venda": '2020-02-2',
		"graduacio_esq": 1.5,
		"graduacio_dret": 0.3 ,
		"tipus_montura": 'metal.lica' ,
		"color_montura": 'groc',
		"color_vidre_esq": 'negre',
		"color_vidre_dret": 'negre',
		"pvp": 49.95,
		"venedor": 'Ramon',
		"marca": 'Rayban'	
		}
	] 
});

db.clientCollection.insertOne({
	"nom_client": 'Marta',
	"carrer": 'Compte Borrell',
	"numero_carrer": '34',
	"pis": '11',
	"porta": '7',
	"ciutat": 'Barcelona',
	"codi_postal": '08016',
	"pais": 'Espanya',
	"telefon": '45378292',
	"email": 'marta@yahoo.com',
	"client_recomana": 'Elisenda',
	"compres":[ 
		{ "factura": 4, 
		"data_venda": '2021-03-3',
		"graduacio_esq": 2.0,
		"graduacio_dret": 1.4,
		"tipus_montura": 'pasta' ,
		"color_montura": 'crom',
		"color_vidre_esq": 'transparent',
		"color_vidre_dret": 'transparent',
		"pvp": 79.95,
		"venedor": 'Lluis',
		"marca": 'Rayban'	
		}
	] 
});

db.clientCollection.insertOne({
	"nom_client": 'Sonia',
	"carrer": 'Diputacio',
	"numero_carrer": '321',
	"pis": '3',
	"porta": '2',
	"ciutat": 'Barcelona',
	"codi_postal": '08014',
	"pais": 'Espanya',
	"telefon": '52382924',
	"email": 'sonia@hotmail.com' 
});

db.proveidorCollection.insertOne({
	"nom_proveidor":'Gafas Guai',      
	"carrer": 'Corsega',
	"numero_carrer": '8',
	"pis": '2',
	"porta": '2',
	"ciutat": 'Barcelona',
	"codi_postal": '08013',
	"pais": 'Espanya',
	"telefon": '89358399',
	"fax": '89358399',
	"nif": '89358399D',
	"marques_distribueix": [
		{"nom_marca": 'Rayban'},
		{"nom_marca": 'Carrera'}
	]
});

db.proveidorCollection.insertOne({
	"nom_proveidor": 'Ulleres Pro',  
	"carrer": 'Corsega',
	"numero_carrer": '28',
	"pis": '1',
	"porta": '3',
	"ciutat": 'Barcelona',
	"codi_postal": '08014',
	"pais": 'Espanya',
	"telefon": '46746',
	"fax": '433434',
	"nif": '2358399F',
	"marques_distribueix": [
		{"nom_marca": 'Afflelou'}
	]
});

db.proveidorCollection.insertOne({
	"nom_proveidor": 'Distri Optics',
	"carrer": 'Sardenya',
	"numero_carrer": '126',
	"pis": '7',
	"porta": '1A',
	"ciutat": 'Barcelona',
	"codi_postal": '08012',
	"pais": 'Espanya',
	"telefon": '637829765',
	"fax": '637829765',
	"nif": '829765G',
	"marques_distribueix": [
		{"nom_marca": 'Oakley'}
	]
});

db.proveidorCollection.insertOne({
	"nom_proveidor": 'Optiques Associades',
	"carrer": 'Compte Borrell',
	"numero_carrer": '34',
	"pis": '11',
	"porta": '7',
	"ciutat": 'Barcelona',
	"codi_postal": '08016',
	"pais": 'Espanya',
	"telefon": '45378292',
	"fax": '45378292',
	"nif": '378292S'
});
