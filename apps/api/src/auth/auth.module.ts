import { Module } from '@nestjs/common';
import { Auth0Strategy } from './auth0/auth0.strategy';
import { SessionSerializer } from './sessions/session.serializer';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Session } from './sessions/session.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Session]),
    UsersModule,
    ConfigModule
  ],
  controllers: [AuthController],
  providers: [
    Auth0Strategy,
    SessionSerializer,
  ],
})
export class AuthModule {}
