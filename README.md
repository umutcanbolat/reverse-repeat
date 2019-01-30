# reverse-repeat &middot;  [![npm version](https://badge.fury.io/js/reverse-repeat.svg)](https://badge.fury.io/js/reverse-repeat) [![codecov](https://codecov.io/gh/umutcanbolat/reverse-repeat/branch/master/graph/badge.svg)](https://codecov.io/gh/umutcanbolat/reverse-repeat) [![Build Status](https://travis-ci.org/umutcanbolat/reverse-repeat.svg?branch=master)](https://travis-ci.org/umutcanbolat/reverse-repeat)
A reversed approach to the javascript's [repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) method.

## Install

```sh
npm install reverse-repeat --save
```

```sh
yarn add reverse-repeat
```

## Usage

```javascript
const reverseRepeat = require('reverse-repeat');

var chorus = 'Because I\'m happy. ';

console.log('Chorus lyrics for "Happy": ' + chorus.repeat(3));
// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. "

console.log(reverseRepeat(chorus.repeat(3)));
// expected output: "{ repeated: 'Because I\'m happy. ', count: 3 }"
```


## Credits
Developed by [Umut Canbolat](https://github.com/umutcanbolat).

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
