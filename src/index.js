const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('./database');

const app = express();

// Ajustes 
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json());

// Rutas 
app.use('/api', require('./rutas/rutas'))

// Arichivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
   console.log('servidor iniciado el puerto ' + app.get('port'));
})