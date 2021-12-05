// import { IResolvers } from "graphql-tools";
const axios = require("axios").default;

const resolvers = {
  Query: {
    getCharacters() {
      return [
        {
          id: 1,
          name: "Link",
          race: "Hylian",
          isHuman: "NO",
        },
        {
          id: 2,
          name: "Spiderman",
          race: "Human",
          isHuman: "YES",
        },
      ];
    },
    async getMovies() {
      return axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=6b4c66e024ea821a7d6c2ca0db501f0c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
        )
        .then((data: String) => data)
        .catch((err: Error) => {
          console.error(err);
        });
    },
  },
};
export default resolvers;
