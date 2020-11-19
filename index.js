const express = require('express');
const app = express();

app.use('/', (req, res)=>{
  res.send("Hello");
});

app.listen(80, err=>{
  if(err) return console.error(err);
  console.log("Listening on port 80");
});
