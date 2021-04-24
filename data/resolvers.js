import { Friends, Aliens } from './dbConnectors';

const resolvers = {
  Query: {
    getFriend: (root, { id }) => new Promise((resolve, reject) => {
      Friends.findById({ _id: id }, (err, friend) => {
        if (err) reject(err);
        else resolve(friend);
      });
    }),
    getAliens: () => Aliens.findAll(),
  },
  Mutation: {
    createFriend: (root, { input }) => {
      const newFriend = new Friends({
        firstName: input.firstName,
        lastName: input.lastName,
        gender: input.gender,
        language: input.language,
        age: input.age,
        email: input.email,
        contacts: input.contacts,
      });

      newFriend.id = newFriend._id;

      return new Promise((resolve, reject) => {
        newFriend.save((err) => {
          if (err) {
            reject(err);
          } else {
            resolve(newFriend);
          }
        });
      });
    },
    updateFriend: (root, { input }) => new Promise((resolve, reject) => {
      Friends.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, friend) => {
        if (err) reject(err);
        else resolve(friend);
      });
    }),
    deleteFriend: (root, { id }) => new Promise((resolve, reject) => {
      Friends.remove({ _id: id }, (err) => {
        if (err) reject(err);
        else resolve('Successfully deleted friend.');
      });
    }),
  },
};

export default resolvers;
