var path = require('path');

// Cargar Modelo ORM
var Sequelize = require('sequelize');
// var sequelize =new Sequelize (null, null, null,
//			{dialect: "sqlite", storage: "quiz.squlite"});

//Usar BBDD SQLite:
//	DATABASE_URL = sqlite:///
//	DATABASE_STORAGE = quiz.sqlite
// Usar BBDD Postgress:
// DATABASE_URL = postgres://user:passwd@host:port/database


var url = process.env.DATABASE_URL;
var storage = process.env.DATABASE_STORAGE || "";


//var DATABASE_STORAGE  = process.env.DATABASE_STORAGE;
var sequelize = new Sequelize(url,
				{ storage: storage,
				  omitNull: true
				});


// Importar la definicion de la tabla Quiz de quiz.js
var Quiz = sequelize.import(path.join(__dirname,'quiz'));


// sequelize.sync() crea e inicializa tabla de preguntas en DB
sequelize.sync()
    .then(function() {
        // Ya se han creado las tablas necesarias.
          return Quiz.count()
                .then(function (c) {
                    if (c === 0) {   // la tabla se inicializa solo si está vacía
                        return Quiz.bulkCreate([ {question: 'Capital decvcvc Italia',   answer: 'Roma'},
                                                 {question: 'Capital de Portugal', answer: 'Lisboa'}
                                              ])
                                   .then(function() {
                                        console.log('Base de datos inicializada con datos');
                                    });
                    }
                });
    })
    .catch(function(error) {
        console.log("Error Sincronizando las tablas de la BBDD:", error);
        process.exit(1);
    });

exports.Quiz = Quiz; // exportar definición de tabla Quiz

