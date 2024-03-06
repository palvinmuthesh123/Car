const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    email: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    phone: { type: String },
    defaultAddress: {type: String, default: "" },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);