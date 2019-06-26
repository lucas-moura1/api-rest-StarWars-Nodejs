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

    it('Testando GET por id, deve retornar os dado do planeta pesquisado', function(done)  {
        
        let _id = "5d12d403f3b4f921145f9382";
       
        chai.request(server)
            .get('/api/id/' + _id)
            .end(function(err, res)  {
                res.should.have.status(200);
                res.body.should.have.property('_id').eql(_id);
                res.body.should.have.property('nome');
                res.body.should.have.property('clima');
                res.body.should.have.property('terreno');
            done();
        });
    });

    it('Testando GET por nome, deve retornar os dado do planeta pesquisado', function(done) {

        let nome = "Alderaan";

        chai.request(server)
            .get('/api/nome/' + nome)
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
            done();
        });
    });

    it('Testando POST', function(done) {
        let planeta = { 
            nome: "Teste", 
            clima: "testeclima",
            terreno: "testeTerreno"
        }

        chai.request(server)
            .post('/api/')
            .send(planeta)
            .end(function(err, res) {
                res.should.have.status(200);
            done();
        });
    });

    it('Testando DELETE', function(done) {

        let nome = "Teste";

        chai.request(server)
            .delete('/api/del/nome/' + nome)
            .end(function(err, res) {
                res.should.have.status(200);
            done();
        });
    });
});