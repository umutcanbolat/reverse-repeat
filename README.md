# reverse-repeat

[![Build status](https://img.shields.io/travis/umutcanbolat/reverse-repeat/master.svg?style=flat)](https://travis-ci.org/umutcanbolat/reverse-repeat)
[![Test coverage](https://img.shields.io/codecov/c/github/umutcanbolat/reverse-repeat.svg?style=flat)](https://codecov.io/gh/umutcanbolat/reverse-repeat)
[![NPM version](https://img.shields.io/npm/v/reverse-repeat.svg?style=flat)](https://www.npmjs.com/package/reverse-repeat)
[![NPM Downloads](https://img.shields.io/npm/dm/reverse-repeat.svg?style=flat)](https://www.npmjs.com/package/reverse-repeat)

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
