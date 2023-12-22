import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private adminService: AdminService,
    private jwtService: JwtService,
  ) {}

  async signInAdmin(password: string) {
    const admin = await this.adminService.getAdmin();
    if (admin?.password !== password) {
      throw new UnauthorizedException();
    }

    return {
      access_token: await this.jwtService.signAsync(
        {},
        {
          secret: process.env.JWT_SECRET,
        },
      ),
    };
  }
}
