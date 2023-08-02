import {
    Model, Column, Table, CreatedAt, UpdatedAt,
} from "sequelize-typescript";
import { InferCreationAttributes } from "sequelize/types";
import { UserAttributes } from "./types";


@Table
export class User extends Model<UserAttributes, InferCreationAttributes<User>> {
    @Column
    name!: string;

    @Column
    lastName!: string;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
}
