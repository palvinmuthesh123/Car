const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    uid: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    productId: { type: String, required: true },
    status: { type: String, required: false }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Orders', schema);