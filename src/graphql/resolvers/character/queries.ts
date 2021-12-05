const characterQueries = {
  characters: async (_: any, args: any) => {
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
  character: async (_: any, args: any) => {},
};

export default characterQueries;
