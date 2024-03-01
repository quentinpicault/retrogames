import {
  Logger,
  Query,
  Req,
} from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { GamesService } from './games.service';

@ApiTags('games')
@Controller('games')
export class GamesController {
  private readonly logger: Logger;

  constructor(
    private readonly gamesService: GamesService,
  ) {
    this.logger = new Logger(GamesController.name);
  }

  //GET /games
  @Get()
  @ApiOperation({ summary: 'List games' })
  @ApiOkResponse({
    description: 'Game list',
    //type: GetGamesDto,
  })
  async findAll(@Req() r: any, @Query() q: any): Promise<any> {
    const games = [] as any
    return { games };
  }
}