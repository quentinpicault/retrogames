import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { Auth0Guard } from './auth.guards';

@Controller('auth')
export class AuthController {
  //GET /login
  @Get('login')
  @UseGuards(Auth0Guard)
  @ApiOperation({ summary: 'Log in' })
  login() {
    return;
  }

  //GET /callback/auth0
  @Get('callback/auth0')
  @UseGuards(Auth0Guard)
  @ApiOperation({ summary: 'Auth0 callback redirect' })
  redirect(@Res() res: any) {
    res.redirect('http://localhost:3000/');
  }
}
