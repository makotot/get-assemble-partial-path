var getPartialPath = require('./');

module.exports = function (params, cb) {

  getPartialPath(params, 'header', function (err, data) {
    console.log(data);
    cb();
  });
};

module.exports.options = {
  stage: 'render:post:pages'
};
