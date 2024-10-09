import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    }
});
 
const Message = mongoose.model("Message", messageSchema);

export default Message;