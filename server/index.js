const express = require('express');
const routes = require('./routes');
const db = require('./dbConnection')
const cors = require('cors')
const app = express();
app.use(cors())


app.use('/', routes)
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})