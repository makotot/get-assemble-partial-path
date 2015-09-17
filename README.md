# get-assemble-partial-path

[![npm version](http://img.shields.io/npm/v/get-assemble-partial-path.svg?style=flat-square)](https://github.com/makotot/get-assemble-partial-path)
[![travis](http://img.shields.io/travis/makotot/get-assemble-partial-path.svg?style=flat-square)](https://github.com/makotot/get-assemble-partial-path)
[![dependencies](http://img.shields.io/david/makotot/get-assemble-partial-path.svg?style=flat-square)](https://github.com/makotot/get-assemble-partial-path)
[![devDependencies](http://img.shields.io/david/dev/makotot/get-assemble-partial-path.svg?style=flat-square)](https://github.com/makotot/get-assemble-partial-path)
[![License](http://img.shields.io/npm/l/get-assemble-partial-path.svg?style=flat-square)](https://github.com/makotot/get-assemble-partial-path)

> Get the [assemble](http://assemble.io/) partial path


## Install

```sh
$ npm i --save get-assemble-partial-path
```


## Usage

In assemble plugin:
```js
var getPartialPath = require('get-assemble-partial-path');

module.exports = function (params, cb) {

  getPartialPath(params, 'header', function (err, data) {
    console.log(data);
    cb();
  });
};

module.exports.options = {
  stage: 'render:post:pages'
};
```


## License

MIT

