const express = require ('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

require('./database');

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/index'));
//tcp/80
app.listen(PORT);
console.log('Server on port', 3000);
