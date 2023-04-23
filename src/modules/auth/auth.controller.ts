import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authSvc: AuthService) {}

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authSvc.login(dto);
  }

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authSvc.register(dto);
  }
}
