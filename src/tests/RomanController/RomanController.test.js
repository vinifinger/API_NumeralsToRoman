//var should = require('should');
var request = require('request');
var { expect } = require('chai');
var urlBase = 'http://localhost:3333';    

// Teste para conversão dos Números decimais para Romanos
describe('API - RomanController', () => {
    
    it("Test 1  - Number 2", (done) => {
        const number = '2';
        const expected = 'II';

        request(
            {
                url: `${urlBase}/numerals`,
                method :"POST",
                headers : {
                    "content-type": "application/json",
                },
                body: {numerals: number},
                json: true
            },
            (error, res, body) => {

                var _body = {};
                try {
                    _body = body;
                } catch (err) {
                    _body = {};   
                }

                expect(res.statusCode).to.equal(200);
                
                if ( expect(_body).to.have.property('Roman') ) {
                    expect(_body.Roman).to.equal(expected, `Roman: ${_body.Roman} !== Esperado: ${expected}`);
                }
                done();
            }
        );
    });

    it('Test 2  - Number 45', (done) => {
        const number = '45';
        const expected = 'XLV';
    
        request(
            {
                url: `${urlBase}/numerals`,
                method :"POST",
                headers : {
                    "content-type": "application/json",
                },
                body: {numerals: number},
                json: true
            },
            (error, res, body) => {

                var _body = {};
                try {
                    _body = body;
                } catch (err) {
                    _body = {};   
                }

                expect(res.statusCode).to.equal(200);
                
                if ( expect(_body).to.have.property('Roman') ) {
                    expect(_body.Roman).to.equal(expected, `Roman: ${_body.Roman} !== Esperado: ${expected}`);
                }
                done();
            }
        );
    });
    
    it("Test 3  - Number 230", (done) => {
        const number = '230';
        const expected = 'CCXXX';
        
        request(
            {
                url: `${urlBase}/numerals`,
                method :"POST",
                headers : {
                    "content-type": "application/json",
                },
                body: {numerals: number},
                json: true
            },
            (error, res, body) => {

                var _body = {};
                try {
                    _body = body;
                } catch (err) {
                    _body = {};   
                }

                expect(res.statusCode).to.equal(200);
                
                if ( expect(_body).to.have.property('Roman') ) {
                    expect(_body.Roman).to.equal(expected, `Roman: ${_body.Roman} !== Esperado: ${expected}`);
                }
                done();
            }
        );
    });

    it("Test 4  - Number 674", (done) => {
        const number = '674';
        const expected = 'DCLXXIV';

        request(
            {
                url: `${urlBase}/numerals`,
                method :"POST",
                headers : {
                    "content-type": "application/json",
                },
                body: {numerals: number},
                json: true
            },
            (error, res, body) => {

                var _body = {};
                try {
                    _body = body;
                } catch (err) {
                    _body = {};   
                }

                expect(res.statusCode).to.equal(200);
                
                if ( expect(_body).to.have.property('Roman') ) {
                    expect(_body.Roman).to.equal(expected, `Roman: ${_body.Roman} !== Esperado: ${expected}`);
                }
                done();
            }
        );
    });

    it("Test 5  - Number 821", (done) => {
        const number = '821';
        const expected = 'DCCCXXI';
        
        request(
            {
                url: `${urlBase}/numerals`,
                method :"POST",
                headers : {
                    "content-type": "application/json",
                },
                body: {numerals: number},
                json: true
            },
            (error, res, body) => {

                var _body = {};
                try {
                    _body = body;
                } catch (err) {
                    _body = {};   
                }

                expect(res.statusCode).to.equal(200);
                
                if ( expect(_body).to.have.property('Roman') ) {
                    expect(_body.Roman).to.equal(expected, `Roman: ${_body.Roman} !== Esperado: ${expected}`);
                }
                done();
            }
        );
    });

    it("Test 6  - Number 1013", (done) => {
        const number = '1013';
        const expected = 'MXIII';
        
        request(
            {
                url: `${urlBase}/numerals`,
                method :"POST",
                headers : {
                    "content-type": "application/json",
                },
                body: {numerals: number},
                json: true
            },
            (error, res, body) => {

                var _body = {};
                try {
                    _body = body;
                } catch (err) {
                    _body = {};   
                }

                expect(res.statusCode).to.equal(200);
                
                if ( expect(_body).to.have.property('Roman') ) {
                    expect(_body.Roman).to.equal(expected, `Roman: ${_body.Roman} !== Esperado: ${expected}`);
                }
                done();
            }
        );
    });

    it("Test 7  - Number 1023", (done) => {
        const number = '1023';
        const expected = 'MXXIII';

        request(
            {
                url: `${urlBase}/numerals`,
                method :"POST",
                headers : {
                    "content-type": "application/json",
                },
                body: {numerals: number},
                json: true
            },
            (error, res, body) => {

                var _body = {};
                try {
                    _body = body;
                } catch (err) {
                    _body = {};   
                }

                expect(res.statusCode).to.equal(200);
                
                if ( expect(_body).to.have.property('Roman') ) {
                    expect(_body.Roman).to.equal(expected, `Roman: ${_body.Roman} !== Esperado: ${expected}`);
                }
                done();
            }
        );
    });

    it("Test 8  - Number 1397", (done) => {
        const number = '1397';
        const expected = 'MCCCXCVII';
        
        request(
            {
                url: `${urlBase}/numerals`,
                method :"POST",
                headers : {
                    "content-type": "application/json",
                },
                body: {numerals: number},
                json: true
            },
            (error, res, body) => {

                var _body = {};
                try {
                    _body = body;
                } catch (err) {
                    _body = {};   
                }

                expect(res.statusCode).to.equal(200);
                
                if ( expect(_body).to.have.property('Roman') ) {
                    expect(_body.Roman).to.equal(expected, `Roman: ${_body.Roman} !== Esperado: ${expected}`);
                }
                done();
            }
        );
    });

    it("Test 9  - Number 1455", (done) => {
        const number = '1455';
        const expected = 'MCDLV';
        
        request(
            {
                url: `${urlBase}/numerals`,
                method :"POST",
                headers : {
                    "content-type": "application/json",
                },
                body: {numerals: number},
                json: true
            },
            (error, res, body) => {

                var _body = {};
                try {
                    _body = body;
                } catch (err) {
                    _body = {};   
                }

                expect(res.statusCode).to.equal(200);
                
                if ( expect(_body).to.have.property('Roman') ) {
                    expect(_body.Roman).to.equal(expected, `Roman: ${_body.Roman} !== Esperado: ${expected}`);
                }
                done();
            }
        );
    });

    it("Test 10 - Number 1847", (done) => {
        const number = '1847';
        const expected = 'MDCCCXLVII';
        
        request(
            {
                url: `${urlBase}/numerals`,
                method :"POST",
                headers : {
                    "content-type": "application/json",
                },
                body: {numerals: number},
                json: true
            },
            (error, res, body) => {

                var _body = {};
                try {
                    _body = body;
                } catch (err) {
                    _body = {};   
                }

                expect(res.statusCode).to.equal(200);
                
                if ( expect(_body).to.have.property('Roman') ) {
                    expect(_body.Roman).to.equal(expected, `Roman: ${_body.Roman} !== Esperado: ${expected}`);
                }
                done();
            }
        );
    });
    
    it("Test 11 - Number 2491", (done) => {
        const number = '2491';
        const expected = 'MMCDXCI';
        
        request(
            {
                url: `${urlBase}/numerals`,
                method :"POST",
                headers : {
                    "content-type": "application/json",
                },
                body: {numerals: number},
                json: true
            },
            (error, res, body) => {

                var _body = {};
                try {
                    _body = body;
                } catch (err) {
                    _body = {};   
                }

                expect(res.statusCode).to.equal(200);
                
                if ( expect(_body).to.have.property('Roman') ) {
                    expect(_body.Roman).to.equal(expected, `Roman: ${_body.Roman} !== Esperado: ${expected}`);
                }
                done();
            }
        );
    });

    it("Test 12 - Number 2766", (done) => {
        const number = '2766';
        const expected = 'MMDCCLXVI';

        request(
            {
                url: `${urlBase}/numerals`,
                method :"POST",
                headers : {
                    "content-type": "application/json",
                },
                body: {numerals: number},
                json: true
            },
            (error, res, body) => {

                var _body = {};
                try {
                    _body = body;
                } catch (err) {
                    _body = {};   
                }

                expect(res.statusCode).to.equal(200);
                
                if ( expect(_body).to.have.property('Roman') ) {
                    expect(_body.Roman).to.equal(expected, `Roman: ${_body.Roman} !== Esperado: ${expected}`);
                }
                done();
            }
        );
    });

    it("Test 13 - Number 3103", (done) => {
        const number = '3103';
        const expected = 'MMMCIII';
        
        request(
            {
                url: `${urlBase}/numerals`,
                method :"POST",
                headers : {
                    "content-type": "application/json",
                },
                body: {numerals: number},
                json: true
            },
            (error, res, body) => {

                var _body = {};
                try {
                    _body = body;
                } catch (err) {
                    _body = {};   
                }

                expect(res.statusCode).to.equal(200);
                
                if ( expect(_body).to.have.property('Roman') ) {
                    expect(_body.Roman).to.equal(expected, `Roman: ${_body.Roman} !== Esperado: ${expected}`);
                }
                done();
            }
        );
    });

    it("Test 14 - Number 4000", (done) => {
        const number = '4000';
        const expected = 'Limite maximo permitido é de \'3999\'';
        
        request(
            {
                url: `${urlBase}/numerals`,
                method :"POST",
                headers : {
                    "content-type": "application/json",
                },
                body: {numerals: number},
                json: true
            },
            (error, res, body) => {

                var _body = {};
                try {
                    _body = body;
                } catch (err) {
                    _body = {};   
                }

                expect(res.statusCode).to.equal(200);
                
                if ( expect(_body).to.have.property('Roman') ) {
                    expect(_body.Roman).to.equal(expected, `Roman: ${_body.Roman} !== Esperado: ${expected}`);
                }
                done();
            }
        );
    });

    it("Test 15 - Number \'\'", (done) => {
        const number = '';
        const expected = 'É necessário informar algum número válido';
        
        request(
            {
                url: `${urlBase}/numerals`,
                method :"POST",
                headers : {
                    "content-type": "application/json",
                },
                body: {numerals: number},
                json: true
            },
            (error, res, body) => {

                var _body = {};
                try {
                    _body = body;
                } catch (err) {
                    _body = {};   
                }

                expect(res.statusCode).to.equal(200);
                
                if ( expect(_body).to.have.property('Roman') ) {
                    expect(_body.Roman).to.equal(expected, `Roman: ${_body.Roman} !== Esperado: ${expected}`);
                }
                done();
            }
        );
    });
});