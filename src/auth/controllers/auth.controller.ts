import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signInAdmin(
    @Body() signInAdminDto: Record<'password', string>,
  ): Promise<any> {
    return this.authService.signInAdmin(signInAdminDto.password);
  }
}
