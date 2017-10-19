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
'  hello  '.trim(); // hello
'\n\nhello\n\n'.trim(); // hello
'\t\thello\t\t'.trim(); // hello
'\t\nhello\t\n'.trim(); // hello
' \t\nhello\t\n '.trim(); // hello

// Trim any character
'__hello__'.trim('_'); // hello
'_-hello-_'.trim('_-'); // hello
'_-\nhello\n-_'.trim('_-'); // \nhello\n

// Left trim
'  hello  '.leftTrim(); // hello  
'\n\nhello\n\n'.leftTrim(); // hello\n\n
'\t\thello\t\t'.leftTrim(); // hello\t\t
'\t\nhello\t\n'.leftTrim(); // hello\t\n
' \t\nhello\t\n '.leftTrim(); // hello\t\n 

// Left trim any character
'__hello__'.leftTrim('_'); // hello__
'_-hello-_'.leftTrim('_-'); // hello-_
'_-\nhello\n-_'.leftTrim('_-'); // \nhello\n-_

// Right trim
'  hello  '.rightTrim(); //   hello
'\n\nhello\n\n'.rightTrim(); // \n\nhello
'\t\thello\t\t'.rightTrim(); // \t\thello
'\t\nhello\t\n'.rightTrim(); // \t\nhello
' \t\nhello\t\n '.rightTrim(); //  \t\nhello

// Right trim any character
'__hello__'.rightTrim('_'); // __hello
'_-hello-_'.rightTrim('_-'); // _-hello
'_-\nhello\n-_'.rightTrim('_-'); // _-\nhello\n
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

