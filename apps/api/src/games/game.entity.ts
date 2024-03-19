import { ApiProperty } from '@nestjs/swagger';
import { GenericEntity, IGame } from '@retrogames/shared-library';
import {
  Column,
  Entity,
} from 'typeorm';

@Entity()
export class Game extends GenericEntity implements IGame {
  @ApiProperty()
  @Column()
  name!: string;

  @ApiProperty()
  @Column()
  description!: string;
}
