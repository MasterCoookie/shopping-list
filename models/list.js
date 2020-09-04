const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    authorId: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    prodList: [{
        prodName: String,
        prodQuan: Number,
        prodChecked: Boolean
    }]
    
}, { timestamps: true });

const List = mongoose.model('List', listSchema);
module.exports = List;