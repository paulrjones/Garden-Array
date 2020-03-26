const { model, Schema } = require('mongoose')

const UserSchema = new Schema({
    first_name: String,
    last_name: String,
    username: String,
    email: String
})

UserSchema.plugin(require('passport-local-mongoose'))

module.exports = model('user', UserSchema)
