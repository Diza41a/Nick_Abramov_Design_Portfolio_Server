import { Module } from '@nestjs/common';
import { ProjectModule } from '../../projects/modules/project.module';
import { AuthModule } from '../../auth/modules/auth.module';
import { MailModule } from '../../email/modules/email.module';

@Module({
  imports: [ProjectModule, AuthModule, MailModule],
})
export class AppModule {}
