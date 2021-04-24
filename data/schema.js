import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    age: Int
    email: String
    language: String
    contacts: [Contact]
  }

  type Alien {
    id: ID
    firstName: String
    lastName: String
    planet: String
  }

  enum Gender {
    MALE
    FEMALE
  }

  type Stock {
    id: ID
    name: String
    price: Float
    closingPrice: Float
  }

  type Email {
    email: String
  }

  type Query {
    getFriend(id: ID): Friend
    getAliens: [Alien]
  }

  type Contact {
    firstName: String
    lastName: String
  }

  input ContactInput {
    firstName: String
    lastName: String
  }

  input FriendInput {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    age: Int
    email: String,
    language: String,
    contacts: [ContactInput]
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
    updateFriend(input: FriendInput): Friend
    deleteFriend(id: ID!): String
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
