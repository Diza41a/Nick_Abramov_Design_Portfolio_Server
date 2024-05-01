import { Controller, Get } from '@nestjs/common';
import { FAQService } from '../services/faq.service';
import { FAQOutputDto } from './output/faqOutputDto';

@Controller('faqs')
export class FAQsController {
  constructor(private readonly faqService: FAQService) {}

  @Get('')
  getAll(): Promise<Array<FAQOutputDto>> {
    return this.faqService.getAll();
  }
}
