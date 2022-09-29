import { Field, InputType } from "type-graphql";

@InputType()
export class createUserInput {
    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    name: string;
}
