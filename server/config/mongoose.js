var mongoose = require('mongoose'),
  crypto = require('crypto');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('MEANproject db opened');
  });

  var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    salt: String,
    hashed_pwd: String,
    roles: [String]
  });
  userSchema.methods = {
    authenticate: function(passwordToMatch) {
      return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
  };

  var User = mongoose.model('User', userSchema);

  User.find({}).exec(function(err, collection) {
    if (collection.length === 0) {
      var salt, hash;
      salt = createSalt();
      hash = hashPwd(salt, 'joe');
      User.create({
        firstName: 'Joe',
        lastName: 'Cocker',
        username: 'joe',
        salt: salt,
        hashed_pwd: hash,
        roles: ['admin']
      });
      salt = createSalt();
      hash = hashPwd(salt, 'bob');
      User.create({
        firstName: 'Bob',
        lastName: 'Dylan',
        username: 'bob',
        salt: salt,
        hashed_pwd: hash,
        roles: []
      });
      salt = createSalt();
      hash = hashPwd(salt, 'jim');
      User.create({
        firstName: 'Jim',
        lastName: 'Morrison',
        username: 'jim',
        salt: salt,
        hashed_pwd: hash
      });
    }
  });
};

function createSalt() {
  return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt, pwd) {
  var hmac = crypto.createHmac('sha1', salt);
  return hmac.update(pwd).digest('hex');
}
