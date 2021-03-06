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
        prodChecked: {
            type: Boolean,
            default: false
        }
    }],
    sharedWith: {
        type: [Schema.Types.ObjectId],
        default: undefined
    }
    
}, { timestamps: true });

const List = mongoose.model('List', listSchema);
module.exports = List;