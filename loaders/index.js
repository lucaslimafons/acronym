const expressLoader = require('./express');
require('./logger');
require('./passport');

exports.default = ({ app }) => {
  expressLoader({ app });
}
