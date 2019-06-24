let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('Teste API Node', function() {
    it('Testando GET', function() {
        chai.request('http://localhost:3000')
        .get('/api')
        .end((err, res) => {
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