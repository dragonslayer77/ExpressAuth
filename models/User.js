const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        isRequired: true,
    },
    password: {
        type: String,
        isRequired: true,
    }
});

const User = mongoose.model('User', userSchema);

User.prototype.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = User;
  