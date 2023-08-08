import {
    Model, Column, Table, CreatedAt, UpdatedAt, PrimaryKey,
} from "sequelize-typescript";
import { InferCreationAttributes } from "sequelize/types";
import { UserAttributes } from "./types";
import { UUID } from "crypto";


@Table
export class User extends Model<UserAttributes, InferCreationAttributes<User>> {

    @PrimaryKey
    @Column
    id!: UUID;

    @Column
    fullname!: string;

    @Column
    gender!: string;

    @Column
    picture!: string;

    @Column
    nat!: string;

    @Column
    email!: string;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

}
