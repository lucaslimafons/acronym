const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;

// curl -v -H "Authorization: Bearer 123456789" http://127.0.0.1:3000/
// curl -v http://127.0.0.1:3000/?access_token=123456789
passport.use(new BearerStrategy(async function (token, done) {
  console.log('TOKEN DO USUÁRIO ::: ' + token);

  // Here we can do whatever we want to validate the token :)
  return done(null, (token && token === 'g2i' ? true : false));
}));

module.exports = passport;
