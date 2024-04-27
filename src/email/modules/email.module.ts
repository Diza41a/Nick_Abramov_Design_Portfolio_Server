import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailController } from '../controllers/email.controller';
import { MailService } from '../services/email.service';

const { EMAIL_FROM, EMAIL_FROM_PASSWORD } = process.env;

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: 'smtp.zoho.com',
          port: 465,
          secure: true, // ssl
          auth: {
            user: EMAIL_FROM,
            pass: EMAIL_FROM_PASSWORD,
          },
        },
      }),
    }),
  ],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
