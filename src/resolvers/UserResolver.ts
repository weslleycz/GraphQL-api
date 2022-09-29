import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { createUserInput } from "../dtos/inputs/create-user-input";
import { UserModels } from "../dtos/models/create-user-models";
import { Status } from "../dtos/models/status-models";
import { prismaClient } from "../utils/prismaClient";

@Resolver()
export class UserResolver {
    @Query(() => [UserModels])
    async helloWorld() {
        const data = await prismaClient.user.findMany({
            select: {
                email: true,
                id: true,
                name: true,
                password: true,
            },
        });

        return data;
    }

    @Mutation(() => Status)
    async createUser(@Arg("data") { email, name, password }: createUserInput) {
        const data = await prismaClient.user.create({
            data: {
                email,
                name,
                password,
            },
            select: {
                email: true,
                name: true,
                password: true,
                id: true,
            },
        });
        return { status: "create", has_error: false };
    }
}
