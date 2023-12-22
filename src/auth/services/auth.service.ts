import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AdminService } from './admin.service';

@Injectable()
export class AuthService {
  constructor(private adminService: AdminService) {}

  async signInAdmin(password: string): Promise<any> {
    const admin = await this.adminService.getAdmin();
    if (admin?.password !== password) {
      throw new UnauthorizedException();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: omitPassword, ...result } = admin;

    return result;
  }
}
