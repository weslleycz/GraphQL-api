import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Status {
    @Field()
    status: string;

    @Field()
    has_error: boolean;
}
