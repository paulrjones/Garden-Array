const { model, Schema } = require('mongoose')

const GardenSchema = new Schema({
  garden_name: {
   type:  String, 
   required: true
  },
  about: {
    type: String,
    required: false
  },
  plant: {
    type: Array,
    required: false
  }, 
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
})

module.exports = model('garden', GardenSchema)