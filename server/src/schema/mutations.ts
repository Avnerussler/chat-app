import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { Message } from '../modules/Message';
import { Room } from '../modules/Room';
import { User } from '../modules/User';
import { MessageType } from './message_type';
import { RoomType } from './room_type';
import { UserType } from './user_type';

export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, { firstName, lastName }) {
        const user = new User({
          firstName,
          lastName,
        });

        return user.save();
      },
    },
    addMessage: {
      type: MessageType,
      args: {
        text: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, { userId, text }) {
        const message = new Message({
          userId,
          text,
        });

        return message.save();
      },
    },
    createRoom: {
      type: RoomType,
      args: {
        roomName: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, { roomName }) {
        const room = new Room({
          roomName,
        });

        return room.save();
      },
    },
  },
});
