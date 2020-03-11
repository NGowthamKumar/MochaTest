let chai = require('chai');
let chaiHttp = require('chai-http');
require('../index');

chai.use(chaiHttp);
var expect = chai.expect;

describe('Basic Mocha Test', function () {
 describe("GET /events check",()=>{
        it('check for 2 properties',(done)=>{
            chai.request('localhost:8000')
            .get('/events')
            .end((err,res)=>{
                expect(res.body).to.have.property('related events');
                expect(res.body).to.have.property('description');
                done();
            })
        })
        it('check for event location',(done)=>{
          chai.request('localhost:8000')
          .get('/events')
          .end((err,res)=>{
              expect(res.body).to.have.nested.property('related events[0].event_location','coimbatore');
              done();
          })
      })
    })
  });




    