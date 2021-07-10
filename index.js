'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fileRoutes = require('./routes/file-upload-route');
const fileUploadRoute = require('./routes/file-upload-route');
const app = express();  
const Qpapers = require('./models/file')

require('./database')();
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));

app.use('/api', fileRoutes.routes);

const port = 3030;
app.listen(port, () => console.log(`Server started on port ${port}`));