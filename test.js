'use strict';

let chai = require('chai'),
    should = chai.should();

describe('Test String polyfill for trim character', function() {

    before(function() {
        // Register polyfill
        require('./index.js');
    });

    describe('Test all trim method registered', function() {
        it('Should trim is a function', function() {
            'hello'.trim.should.be.a('function');
        });

        it('Should ltrim is a function', function() {
            'hello'.ltrim.should.be.a('function');
        });

        it('Should rtrim is a function', function() {
            'hello'.rtrim.should.be.a('function');
        });
    });

    describe('Test String.prototype.trim', function() {
        it('Should return string without whitespace, tab or new line', function() {
            '  hello  '.trim().should.to.equal('hello');
            '\n\nhello\n\n'.trim().should.to.equal('hello');
            '\t\thello\t\t'.trim().should.to.equal('hello');
            '\t\nhello\t\n'.trim().should.to.equal('hello');
            ' \t\nhello\t\n '.trim().should.to.equal('hello');
        });

        it('Should return string without character defined at trim argument', function() {
            '__hello__'.trim('_').should.to.equal('hello');
            '..hello..'.trim('.').should.to.equal('hello');
            '"hello"'.trim('"').should.to.equal('hello');
            '<hello>'.trim('<').trim('>').should.to.equal('hello');
            '((hello))'.trim('(').trim(')').should.to.equal('hello');
            '[[hello]]'.trim('[').trim(']').should.to.equal('hello');
            '{{hello}}'.trim('{').trim('}').should.to.equal('hello');
            '\\\\hello//'.trim('\\').trim('/').should.to.equal('hello');
            '_-hello-_'.trim('_').trim('-').should.to.equal('hello');
            '_-\nhello\n-_'.trim('_').trim('-').should.to.equal('\nhello\n');
            '/hello/'.trim('/').should.to.equal('hello');
            '/ hello/ '.trim('/ ').should.to.equal('hello');
        });
    });

    describe('Test String.prototype.ltrim', function() {
        it('Should return string without whitespace, tab or new line on left side', function() {
            '  hello  '.ltrim().should.to.equal('hello  ');
            '\n\nhello\n\n'.ltrim().should.to.equal('hello\n\n');
            '\t\thello\t\t'.ltrim().should.to.equal('hello\t\t');
            '\t\nhello\t\n'.ltrim().should.to.equal('hello\t\n');
            ' \t\nhello\t\n '.ltrim().should.to.equal('hello\t\n ');
        });

        it('Should return string without character defined at ltrim argument on left side', function() {
            '__hello__'.ltrim('_').should.to.equal('hello__');
            '..hello..'.ltrim('.').should.to.equal('hello..');
            '"hello"'.ltrim('"').should.to.equal('hello"');
            '<hello>'.ltrim('<').should.to.equal('hello>');
            '((hello))'.ltrim('(').should.to.equal('hello))');
            '[[hello]]'.ltrim('[').should.to.equal('hello]]');
            '{{hello}}'.ltrim('{').should.to.equal('hello}}');
            '\\\\hello//'.ltrim('\\').should.to.equal('hello//');
            '_-hello-_'.ltrim('_-').should.to.equal('hello-_');
            '_-\nhello\n-_'.ltrim('_-').should.to.equal('\nhello\n-_');
            '/hello'.trim('/').should.to.equal('hello');
            '/ hello'.trim('/ ').should.to.equal('hello');
        });
    });

    describe('Test String.prototype.rtrim', function() {
        it('Should return string without whitespace, tab or new line', function() {
            '  hello  '.rtrim().should.to.equal('  hello');
            '\n\nhello\n\n'.rtrim().should.to.equal('\n\nhello');
            '\t\thello\t\t'.rtrim().should.to.equal('\t\thello');
            '\t\nhello\t\n'.rtrim().should.to.equal('\t\nhello');
            ' \t\nhello\t\n '.rtrim().should.to.equal(' \t\nhello');
        });

        it('Should return string without character defined at rtrim argument on right side', function() {
            '__hello__'.rtrim('_').should.to.equal('__hello');
            '..hello..'.rtrim('.').should.to.equal('..hello');
            '"hello"'.rtrim('"').should.to.equal('"hello');
            '<hello>'.rtrim('>').should.to.equal('<hello');
            '((hello))'.rtrim(')').should.to.equal('((hello');
            '[[hello]]'.rtrim(']').should.to.equal('[[hello');
            '{{hello}}'.rtrim('}').should.to.equal('{{hello');
            '\\\\hello//'.rtrim('/').should.to.equal('\\\\hello');
            '_-hello-_'.rtrim('-_').should.to.equal('_-hello');
            '_-\nhello\n-_'.rtrim('-_').should.to.equal('_-\nhello\n');
            'hello/'.trim('/').should.to.equal('hello');
            'hello/ '.trim('/ ').should.to.equal('hello');
        });
    });
});
