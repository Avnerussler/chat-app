import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { Message } from '../modules/Message';
import { MessageType } from './message_type';

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    messages: {
      type: new GraphQLList(MessageType),
      resolve(parent) {
        return Message.find({ userId: parent._id });
      },
    },
  }),
});
