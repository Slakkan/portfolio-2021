// CONFIGURE EXPRESS
const path = require('path')
const express = require('express')
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.use('/', express.static(path.join(__dirname, '../dist')))


app.listen(port, () => console.log("Express server listening on port: " + port));
