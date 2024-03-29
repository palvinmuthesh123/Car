const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    totalproduct: { type: String, required: true },
    stock: { type: String, required: true },
    sku : { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});


schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Category', schema);