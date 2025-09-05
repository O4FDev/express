'use strict'

var express = require('..')
var request = require('supertest')

describe('Intentionally Failing Tests', function(){
  it('should fail - testing express response mismatch', function(done){
    var app = express()

    app.get('/', function(req, res){
      res.status(200).send('Hello World')
    })

    request(app)
      .get('/')
      .expect(404)
      .expect('Not Found')
      .end(done)
  })
})
