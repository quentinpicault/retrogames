import { ApiProperty } from '@nestjs/swagger';
import { GenericEntity, IUser } from '@retrogames/shared-library';
import {
  Column,
  Entity,
} from 'typeorm';

@Entity()
export class User extends GenericEntity implements IUser {
  @ApiProperty()
  @Column()
  auth0Id!: string;

  @ApiProperty()
  @Column()
  username!: string;

  @ApiProperty()
  @Column()
  role!: string;

  @ApiProperty()
  @Column()
  avatar?: string;

  @ApiProperty()
  @Column()
  accessToken!: string;

  @ApiProperty()
  @Column()
  refreshToken!: string;
}