import { Module } from '@nestjs/common';
import { ProjectModule } from '../../projects/modules/project.module';
import { FAQModule } from '../../faqs/modules/faq.module';
import { AuthModule } from '../../auth/modules/auth.module';
import { MailModule } from '../../email/modules/email.module';
import { UploadModule } from '../../upload/modules/upload.module';

@Module({
  imports: [ProjectModule, FAQModule, AuthModule, MailModule, UploadModule],
})
export class AppModule {}
