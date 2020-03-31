const { model, Schema } = require('mongoose')

const UserSchema = new Schema({
    first_name: String,
    last_name: String,
    username: String,
    email: String,
    Gardens: [{
        type: Schema.Types.ObjectId,
        ref: 'garden'
    }]
})

UserSchema.plugin(require('passport-local-mongoose'))

module.exports = model('user', UserSchema)
