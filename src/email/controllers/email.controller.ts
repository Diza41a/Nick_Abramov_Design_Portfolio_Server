import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from '../services/email.service';
import { MailInputDto } from './input/emailInputDto';

@Controller('email')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('')
  async sendEmail(@Body() emailInputDto: MailInputDto): Promise<void> {
    await this.mailService.sendEmail(emailInputDto);
  }
}
