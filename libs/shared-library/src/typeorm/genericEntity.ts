import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm"
import { IBaseModel } from "../common/models/baseModel"

export class GenericEntity extends BaseEntity implements IBaseModel {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  createdAt!: Date

  @Column()
  updatedAt!: Date

  @Column()
  deletedAt!: Date
}
