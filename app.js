const express = require('express');
const app = express();

//routes
app.get('/', (req, res) => {
  res.send('server up');
});

//listen to server
app.listen(6969);