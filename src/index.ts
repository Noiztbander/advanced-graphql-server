import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { initialSchema } from "./graphql";
import { port } from "./config/config";

const app = express();
app.use(cors());

async function startServer() {
  const apolloServer = new ApolloServer({
    schema: initialSchema,
    introspection: true,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
}

startServer();

app.listen(port, function () {
  console.log(`server running on port ${port}`);
});
