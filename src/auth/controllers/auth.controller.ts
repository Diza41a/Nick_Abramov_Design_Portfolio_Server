import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../services/auth.guard';

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

  @UseGuards(AuthGuard)
  @Get('validate_login_status')
  validateLoginStatus(): string {
    // Auth guard will throw an error if the user is not authenticated
    return 'The admin is authenticated!';
  }
}
