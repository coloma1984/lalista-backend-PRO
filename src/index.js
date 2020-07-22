const express = require ('express');
const app = express();
const cors = require('cors');
const morgan  = require('morgan');

//settings
const PORT = process.env.PORT || 3000;

//db connection
const { mongoose } = require('./database');
//require('./database');

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', require('./routes/index'));
app.use('/api/crud/savedlists', require('./routes/savedList.routes'));


//starting the server
app.listen(PORT, () => 
console.log('Server on port', PORT));
