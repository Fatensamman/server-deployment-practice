'use strict';
// const { TestScheduler } = require('@jest/core');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/bad',(req,res)=>{
  throw new Error('Something went wrong');
});
const notFoundHandler = require('./error_handlers/404.js');
const errorHandler = require('./error_handlers/500.js');

function start(port){
  app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
  });
}

app.use('*',notFoundHandler);
app.use(errorHandler);

module.exports = {
  app: app,
  start: start,
};