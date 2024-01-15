import { Module } from '@nestjs/common';
import { ProjectModule } from '../../projects/modules/project.module';
import { AuthModule } from '../../auth/modules/auth.module';
import { MailModule } from '../../email/modules/email.module';
import { ImgurModule } from '../../upload/modules/upload.module';

@Module({
  imports: [ProjectModule, AuthModule, MailModule, ImgurModule],
})
export class AppModule {}
