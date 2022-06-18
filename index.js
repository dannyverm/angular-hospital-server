require('dotenv').config();
const express = require('express');
const { dbConection } = require('./database/config');
const cors= require('cors')

const app = express();

//Configurar CORS
app.use(cors());

//Lectura y parseo del body
app.use( express.json() );

// MongoDB
dbConection();
// user: root
// pass: UjIQ0F2ef8MR1RZb


//Rutas
app.use( '/api/usuarios', require( './routes/usuarios' ) )
app.use( '/api/hospitales', require( './routes/hospitales' ) )
app.use( '/api/medicos', require( './routes/medicos' ) )
app.use( '/api/login', require( './routes/auth' ) )

app.listen(process.env.PORT, () => {
    console.log("Server ok, Port: ", process.env.PORT)
})