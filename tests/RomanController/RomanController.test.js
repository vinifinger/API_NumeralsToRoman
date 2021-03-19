var request = require('request');
var { expect } = require('chai');
var urlBase = 'http://localhost:3333';    

// Teste para conversão dos Números decimais para Romanos
describe('API - RomanController', () => {
    
    it("Test 1  - Number 2", (done) => {
        const number = 2;
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
        const number = 45;
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
        const number = 230;
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
    
    it("Test 4 - Number 2491", (done) => {
        const number = 2491;
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

    it("Test 5 - Number 2766", (done) => {
        const number = 2766;
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

    it("Test 6 - Number 3103", (done) => {
        const number = 3103;
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

    it("Test 7 - Number 4000", (done) => {
        const number = 4000;
        const expected = `\"numerals\" must be less than or equal to 3999`;

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

                expect(res.statusCode).to.equal(400);
                
                if ( expect(_body.validation.body).to.have.property('message') ) {
                    expect(_body.validation.body.message).to.equal(expected, `Roman: ${_body.validation.message} !== Esperado: ${expected}`);
                }

                done();
            }
        );
    });

    it("Test 8 - Number \'\'", (done) => {
        const number = '';
        const expected = `\"numerals\" must be a number`;
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

                expect(res.statusCode).to.equal(400);
                
                if ( expect(_body.validation.body).to.have.property('message') ) {
                    expect(_body.validation.body.message).to.equal(expected, `Roman: ${_body.validation.message} !== Esperado: ${expected}`);
                }

                expect(res.statusCode).to.equal(400);
                
                done();
            }
        );
    });

    it("Test 9 - Invalid Field ", (done) => {
        const number = '';
        const expected = `\"numerals\" is required`;
        request(
            {
                url: `${urlBase}/numerals`,
                method :"POST",
                headers : {
                    "content-type": "application/json",
                },
                body: {numero: number},
                json: true
            },
            (error, res, body) => {

                var _body = {};
                try {
                    _body = body;
                } catch (err) {
                    _body = {};   
                }

                expect(res.statusCode).to.equal(400);
                
                if ( expect(_body.validation.body).to.have.property('message') ) {
                    expect(_body.validation.body.message).to.equal(expected, `Roman: ${_body.validation.message} !== Esperado: ${expected}`);
                }

                expect(res.statusCode).to.equal(400);
                
                done();
            }
        );
    });
});