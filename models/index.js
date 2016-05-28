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



exports.Quiz = Quiz; // exportar definición de tabla Quiz

