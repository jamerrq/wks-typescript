import { Model, Column, Table, CreatedAt, UpdatedAt, }
    from "sequelize-typescript";
import { sequelize } from "../db";
import { DataTypes, ModelAttributes } from "sequelize";



@Table
export class User extends Model<User> {
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
};
