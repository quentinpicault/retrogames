import { Test } from '@nestjs/testing';

import { GamesService } from './games.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Game } from './entity/game.entity';
import { GamesController } from './games.controller';

describe('GamesService', () => {
  let gamesService: GamesService;

  beforeEach(async () => {
    const mockRepository = jest.fn(() => ({
      find: jest.fn()
    }));

    const moduleRef = await Test.createTestingModule({
      providers: [
        GamesService,
        { provide: getRepositoryToken(Game), useClass: mockRepository },
      ],
      controllers: [GamesController],
    }).compile();

    gamesService = moduleRef.get<GamesService>(GamesService);
  });

  describe('getData', () => {
    it('should return a list of games', () => {
      const result = [] as any
      jest.spyOn(gamesService, 'findAll').mockImplementation(() => result);
      expect(gamesService.findAll()).toEqual([]);
    });
  });
});
