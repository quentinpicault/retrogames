import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesModule } from './games/games.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory(configService: ConfigService) {
        return Object.assign({
          type: 'postgres',
          host: configService.get<string>('PG_HOSTNAME'),
          port: configService.get<string>('PG_PORT'),
          username: configService.get<string>('PG_USERNAME'),
          password: configService.get<string>('PG_PASSWORD'),
          database: configService.get<string>('PG_DATABASE'),
          entities: ['dist/**/*.entity{.ts,.js}'],
          synchronize: true,
          autoLoadEntities: true,
        });
      },
      inject: [ConfigService],
    }),
    AuthModule,
    PassportModule.register({ session: true }),
    UsersModule,
    GamesModule,
  ]
})
export class AppModule {}
