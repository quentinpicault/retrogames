import { Profile, Strategy } from 'passport-auth0';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class Auth0Strategy extends PassportStrategy(Strategy) {
  constructor(
    // Inject User Service here
    private configService: ConfigService
  ) {
    super({
      clientID: configService.get<string>('AUTH0_CLIENT_ID'),
      clientSecret: configService.get<string>('AUTH0_CLIENT_SECRET'),
      domain: configService.get<string>('AUTH0_DOMAIN'),
      callbackURL: configService.get<string>('AUTH0_CALLBACK_URL'),
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const { username, id: auth0Id } = profile;
    const dto = {
      username,
      auth0Id,
      accessToken,
      refreshToken,
    };
    // SAVE USER
  }
}
