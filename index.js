var Promise = require('promise');
var getPartialDirs = require('get-assemble-partial-dirs');

var fs = require('fs'),
  path = require('path');

module.exports = function (params, partial, cb) {

  getPartialDirs(params, function (err, dirs) {
    if (err) {
      cb(err);
    }

    Promise.all(dirs.map(function (dir) {

      return new Promise(function (resolve, reject) {
        fs.stat(path.resolve(dir, partial + '.hbs'), function (error, stats) {
          if (error) {

            // if the partial file does not found:
            // - node 0.10 : errno => 34
            // - node 0.12 : errno => -2
            if (error.errno === -2 || error.errno === 34) {
              resolve(null);
            } else {
              reject(error);
            }
          }

          resolve(path.relative(process.cwd(), path.resolve(dir, partial + '.hbs')));
        });
      });
    }))
    .then(function (res) {
      var partialPath = res.filter(function (item, idx) {
        return !!item;
      });
      cb(null, partialPath[0]);
    })
    .catch(function (e) {
      cb(e);
    });

  });
};
