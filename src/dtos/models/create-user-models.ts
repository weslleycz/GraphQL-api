import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserModels {
    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    name: string;

    @Field()
    id: string;
}
