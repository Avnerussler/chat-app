import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { User } from '../modules/User';
import { UserType } from './user_type';

export const RoomType = new GraphQLObjectType({
  name: 'Room',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent) {
        return User.find({ userId: parent._id });
      },
    },
  }),
});
