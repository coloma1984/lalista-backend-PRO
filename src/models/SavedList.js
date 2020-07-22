const { Schema, model } = require('mongoose');
//const User = require('./User');

const savedListSchema = new Schema({
    userId: { type: String, required: true },
    list: { type: String, required: true }
}, {
    timestamps:true
});

module.exports= model('SavedList', savedListSchema);
