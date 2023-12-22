import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthController } from '../controllers/auth.controller';
import { AdminModule } from './admin.module';

@Module({
  imports: [AdminModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
