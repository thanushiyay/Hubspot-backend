const express = require('express');
const errorHandling = require('./Utils/errorHandling');
const app = express();
const headerConfig = require('./Utils/headerConfig');
const user = require('./Controllers/User');
const dbConn = require('./Delegates/databaseConfig');
const hubspot = require('./Controllers/Hubspot');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(headerConfig);

app.use('/api/hubspot', hubspot)
app.use('/api/users', user);
app.use(errorHandling);

const port = 3003;

app.listen(port, () => {
  console.log('server listening at ' + port);
});
