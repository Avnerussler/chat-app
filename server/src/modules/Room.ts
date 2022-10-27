import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  roomName: { type: String, required: true },
  users: { type: Array },
});

export const Room = mongoose.model('Room', RoomSchema);
