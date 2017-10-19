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

        it('Should leftTrim is a function', function() {
            'hello'.leftTrim.should.be.a('function');
        });

        it('Should rightTrim is a function', function() {
            'hello'.rightTrim.should.be.a('function');
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
            '_-hello-_'.trim('_-').should.to.equal('hello');
            '_-\nhello\n-_'.trim('_-').should.to.equal('\nhello\n');
        });
    });

    describe('Test String.prototype.leftTrim', function() {
        it('Should return string without whitespace, tab or new line on left side', function() {
            '  hello  '.leftTrim().should.to.equal('hello  ');
            '\n\nhello\n\n'.leftTrim().should.to.equal('hello\n\n');
            '\t\thello\t\t'.leftTrim().should.to.equal('hello\t\t');
            '\t\nhello\t\n'.leftTrim().should.to.equal('hello\t\n');
            ' \t\nhello\t\n '.leftTrim().should.to.equal('hello\t\n ');
        });

        it('Should return string without character defined at trim argument on left side', function() {
            '__hello__'.leftTrim('_').should.to.equal('hello__');
            '_-hello-_'.leftTrim('_-').should.to.equal('hello-_');
            '_-\nhello\n-_'.leftTrim('_-').should.to.equal('\nhello\n-_');
        });
    });

    describe('Test String.prototype.rightTrim', function() {
        it('Should return string without whitespace, tab or new line', function() {
            '  hello  '.rightTrim().should.to.equal('  hello');
            '\n\nhello\n\n'.rightTrim().should.to.equal('\n\nhello');
            '\t\thello\t\t'.rightTrim().should.to.equal('\t\thello');
            '\t\nhello\t\n'.rightTrim().should.to.equal('\t\nhello');
            ' \t\nhello\t\n '.rightTrim().should.to.equal(' \t\nhello');
        });

        it('Should return string without character defined at trim argument', function() {
            '__hello__'.rightTrim('_').should.to.equal('__hello');
            '_-hello-_'.rightTrim('_-').should.to.equal('_-hello');
            '_-\nhello\n-_'.rightTrim('_-').should.to.equal('_-\nhello\n');
        });
    });
});
