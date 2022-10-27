import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { UserType } from './user_type';

export const MessageType = new GraphQLObjectType({
  name: 'Message',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    text: { type: GraphQLString },
    userId: { type: new GraphQLNonNull(UserType) },
  }),
});
