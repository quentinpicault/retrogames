import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { User } from '../../users/user.entity';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
// Inject User Service here
  ) {
    super();
  }

  serializeUser(user: User, done: any) {
    done(null, user);
  }

  async deserializeUser(user: User, done: any) {
    // const userDB = await this.authService.findUser(user.auth0Id);
    // return userDB ? done(null, userDB) : done(null, null);
  }
}
