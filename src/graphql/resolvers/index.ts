import { authorQueries, authorMutations } from "./author";
import { characterQueries, characterMutations } from "./character";
// import { bookQueries, bookMutations } from './book';
// import { publisherQueries, publisherMutations } from './publisher';

const resolvers = {
  Query: {
    ...authorQueries,
    ...characterQueries,
    // ...bookQueries,
    // ...publisherQueries,
  },
  Mutation: {
    ...authorMutations,
    ...characterMutations,
    // ...bookMutations,
    // ...publisherMutations,
  },
};

export default resolvers;
