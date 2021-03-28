'use strict';
// tryy
// test('it must be 5',()=>{
//   expect(1+4).toBe(44);
// });

const superTest = require('supertest');
const server = require('../server.js');

const request =superTest(server.app);

// heading of my test
describe('server',()=>{
//  place where we do the test 
  it('handle invalid routes', async ()=>{
    const response = await request.get('/hhhh');
    expect(response.status).toEqual(404);
  });
  it('handle server errors', async ()=>{
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });
  it('handle working routes', async ()=>{
    const response = await request.get('/');
    // console.log(response);
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Hello World');
  });
});
