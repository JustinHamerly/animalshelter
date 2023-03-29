const mongoose = require ('mongoose');

const commentSchema = new mongoose.Schema ({

  animalID: {type: Number, required: true},
  name: {type: String, required: true},
  text: {type: String, required: true}
  
})

const commentModel = mongoose.model ('comment', commentSchema)

module.exports = commentModel;