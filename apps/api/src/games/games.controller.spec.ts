import { Test } from '@nestjs/testing';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Game } from './game.entity';

describe('GamesController', () => {
  let gamesController: GamesController;
  let gamesService: GamesService;

  beforeEach(async () => {
    const mockRepository = jest.fn();

    const moduleRef = await Test.createTestingModule({
      providers: [
        GamesService,
        { provide: getRepositoryToken(Game), useClass: mockRepository },
      ],
      controllers: [GamesController],
    }).compile();

    gamesService = moduleRef.get<GamesService>(GamesService);
    gamesController = moduleRef.get<GamesController>(GamesController);
  });

  describe('findAll', () => {
    it('should return a list of games', async () => {
      const result = [] as any
      jest.spyOn(gamesService, 'findAll').mockImplementation(() => result);
      expect(await gamesController.findAll({}, {})).toStrictEqual({ games: result })
    });
  });
});
