import mongoose from 'mongoose';

export const connectDB = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI);
  await mongoose.connection.useDb('chat-app');

  console.log(`MongoDB Connected`, connection.connection.host);
};
