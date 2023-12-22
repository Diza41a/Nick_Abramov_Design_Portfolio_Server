import { Injectable } from '@nestjs/common';

export type Admin = {
  password: string;
};

const { ADMIN_PASSWORD } = process.env;

@Injectable()
export class AdminService {
  private readonly admin: Admin = {
    password: ADMIN_PASSWORD,
  };

  async getAdmin(): Promise<Admin> {
    return this.admin;
  }
}
