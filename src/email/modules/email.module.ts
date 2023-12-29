import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailController } from '../controllers/email.controller';
import { MailService } from '../services/email.service';

// const { GMAIL_ADDRESS, GMAIL_PASSWORD } = process.env;

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: 'smtp.mail.com',
          port: 465,
          secure: true,
          auth: {
            user: '',
            pass: '',
          },
        },
      }),
    }),
  ],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
