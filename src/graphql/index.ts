import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { join } from "path";
import { readdirSync, readFileSync } from "fs";
import "graphql-import-node";
import resolvers from "./resolvers";

const gqlFiles = readdirSync(join(__dirname, "./schemas"));

let typeDefs = "";

gqlFiles.forEach((file) => {
  typeDefs += readFileSync(join(__dirname, "./schemas", file), {
    encoding: "utf8",
  });
});

// el schema es del typo GraphQLSchema, esto viene por typescript y te lo da graphQL
export const initialSchema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [typeDefs],
  resolvers: resolvers,
});
