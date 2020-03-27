const { model, Schema } = require('mongoose')

const GardenSchema = new Schema({
  garden_name: String,
  about: String,
  plant: Array 
})

module.exports = model('user', GardenSchema)