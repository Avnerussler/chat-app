import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  text: { type: String, required: true },
  userId: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
});

export const Message = mongoose.model('Message', MessageSchema);
