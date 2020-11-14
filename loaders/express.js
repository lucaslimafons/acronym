const bodyParser = require('body-parser');
const cors = require('./cors');
const logger = require('morgan');
const compression = require('compression');
const passport = require('passport');

module.exports = ({ app }) => {
  app.use(compression());
  app.use(logger('dev'));
  app.use(bodyParser.json({ limit: '5mb' }));
  app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }));
  app.use(cors());
  app.use(passport.initialize())
  app.use(passport.session())
}
