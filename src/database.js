const mongoose = require('mongoose');

const URL  = 'mongodb://localhost:27017/clientes';

mongoose.connect(URL, {
   useNewUrlParser: true,
useUnifiedTopology: true})
.then(db => console.log('conectado a la base de datos ....'))
.catch(err => console.log(err));

module.exports = mongoose;