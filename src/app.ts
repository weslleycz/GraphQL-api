import { ApolloServer } from "apollo-server";
import path from "node:path";
import "reflect-metadata";
import { buildSchemaSync } from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver";

const main = async () => {
    const schema = buildSchemaSync({
        resolvers: [UserResolver],
        emitSchemaFile: path.resolve(__dirname, "schema.ggl"),
    });

    const server = new ApolloServer({
        schema,
    });

    const { url } = await server.listen({ port: 4000 });

    console.log(`🚀 Server started on port:${url}`);
};

main();
