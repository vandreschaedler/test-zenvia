import chai from 'chai'
import chaiHttp from 'chai-http'
import {expect} from 'chai'

import app from './../../server'
import { doesNotReject } from 'assert'

chai.use(chaiHttp)


describe('Testing api request', () => {
  describe('GET /status', () => {
    it('should make a /status and return a json object', (done) => {
      chai.request('http://localhost:9000')
      .get('/status')
      .end((err, res) => {
        if (err) {
          console.log(err);
          done(err)
        }
        expect(res).have.status(200)
        done()
      })
    })
  });

  describe('GET /', () => {
    it('should make a / and return a 404 error', (done) => {
      chai.request('http://localhost:9000')
      .get('/')
      .end((err, res) => {
        if (err) {
          console.log(err);
          done(err)
        }
        expect(res).have.status(404)
        done()
      })
    })
  });
});