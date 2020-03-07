"use strict"
let app = require('express')();

app = require('./middlewares/requiredMiddlewares')(app); // change this route to point the index route

app.use(require('./routes'));

app.listen(3000, () => console.log('Server is up and running.'));