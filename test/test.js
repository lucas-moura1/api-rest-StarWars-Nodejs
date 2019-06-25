process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/server')
let should = chai.should();

chai.use(chaiHttp);

describe('Teste API Node', function() {

    it('Testando GET, deve retornar todas os dados do banco', function(done) {
        chai.request(server)
        .get('/api')
        .end(function(err, res) {
            res.should.have.status(200);
            res.body.should.be.a('array');
        done();
        });
    });

   /* it('Testando GET por nome', (done) => {
        chai.request('http://localhost:3000')
        .get('/api'+ nome)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('_id');
            res.body.should.have.property('nome').eql(nome);
            res.body.should.have.property('clima');
            res.body.should.have.property('terreno');
        done();
        });
    });*/
});