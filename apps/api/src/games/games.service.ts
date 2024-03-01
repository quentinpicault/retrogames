import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './entity/game.entity';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,
  ) {}

  async findAll(): Promise<any> {
    await this.gameRepository.find();
  }

  async softDelete(id: string): Promise<void> {
    const game = await this.gameRepository.findOneBy({id})
    if (!game) {
      throw new NotFoundException('Game not found');
    }
    await this.gameRepository.softDelete(id);
  }

  async restore(id: string): Promise<void> {
    const game = await this.gameRepository.findOne({ withDeleted: true, where: { id } });
    if (!game) {
      throw new NotFoundException('Game not found');
    }
    await this.gameRepository.restore(id);
  }
}
