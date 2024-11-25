import { Module } from '@nestjs/common';
import { ProjectModule } from '../../projects/project.module';
import { FAQModule } from '../../faqs/faq.module';
import { AuthModule } from '../../auth/modules/auth.module';
import { MailModule } from '../../email/email.module';
import { UploadModule } from '../../upload/upload.module';
import { PhotoBlogProjectModule } from '../../photoBlogProjects/photoBlogProject.module';

@Module({
  imports: [
    ProjectModule,
    PhotoBlogProjectModule,
    FAQModule,
    AuthModule,
    MailModule,
    UploadModule,
  ],
})
export class AppModule {}
