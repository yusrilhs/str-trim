# str-trim
This library is String polyfill for trim whitespace, tab, new line or any character.

## Installation
Using npm
`npm install str-trim --save`

Using yarn
`yarn add str-trim`


## How to use
```javascript

require('str-trim');

// Trim
'  hello  '.trim().should.to.equal('hello');
'\n\nhello\n\n'.trim().should.to.equal('hello');
'\t\thello\t\t'.trim().should.to.equal('hello');
'\t\nhello\t\n'.trim().should.to.equal('hello');
' \t\nhello\t\n '.trim().should.to.equal('hello');

// Trim any character
'__hello__'.trim('_').should.to.equal('hello');
'_-hello-_'.trim('_-').should.to.equal('hello');
'_-\nhello\n-_'.trim('_-').should.to.equal('\nhello\n');

// Left trim
'  hello  '.leftTrim().should.to.equal('hello  ');
'\n\nhello\n\n'.leftTrim().should.to.equal('hello\n\n');
'\t\thello\t\t'.leftTrim().should.to.equal('hello\t\t');
'\t\nhello\t\n'.leftTrim().should.to.equal('hello\t\n');
' \t\nhello\t\n '.leftTrim().should.to.equal('hello\t\n ');

// Left trim any character
'__hello__'.leftTrim('_').should.to.equal('hello__');
'_-hello-_'.leftTrim('_-').should.to.equal('hello-_');
'_-\nhello\n-_'.leftTrim('_-').should.to.equal('\nhello\n-_');

// Right trim
'  hello  '.rightTrim().should.to.equal('  hello');
'\n\nhello\n\n'.rightTrim().should.to.equal('\n\nhello');
'\t\thello\t\t'.rightTrim().should.to.equal('\t\thello');
'\t\nhello\t\n'.rightTrim().should.to.equal('\t\nhello');
' \t\nhello\t\n '.rightTrim().should.to.equal(' \t\nhello');

// Right trim any character
'__hello__'.rightTrim('_').should.to.equal('__hello');
'_-hello-_'.rightTrim('_-').should.to.equal('_-hello');
'_-\nhello\n-_'.rightTrim('_-').should.to.equal('_-\nhello\n');
```

## License
Copyright (c) 2017 Yusril Herlian Syah

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.

