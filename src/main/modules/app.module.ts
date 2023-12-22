import { Module } from '@nestjs/common';
import { ProjectModule } from '../../projects/modules/project.module';
import { AuthModule } from '../../auth/modules/auth.module';

@Module({
  imports: [ProjectModule, AuthModule],
})
export class AppModule {}
