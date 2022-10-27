import { GraphQLID, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { Message } from '../modules/Message';
import { User } from '../modules/User';
import { MessageType } from './message_type';
import { UserType } from './user_type';

export const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve(_, { id }) {
        return User.findById(id);
      },
    },
    message: {
      type: MessageType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, { id }) {
        return Message.findById(id);
      },
    },
  },
});
