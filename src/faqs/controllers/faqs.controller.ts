import {
  Controller,
  Get,
  Post,
  UseGuards,
  Body,
  Delete,
  Param,
} from '@nestjs/common';
import { FAQService } from '../services/faq.service';
import { FAQOutputDto } from './output/faqOutputDto';
import { AuthGuard } from '../../auth/services/auth.guard';
import { FAQInputDto } from './input/faqInputDto';

@Controller('faqs')
export class FAQsController {
  constructor(private readonly faqService: FAQService) {}

  @Get('')
  getAll(): Promise<Array<FAQOutputDto>> {
    return this.faqService.getAll();
  }

  @UseGuards(AuthGuard)
  @Post('')
  create(@Body() faqInputDto: FAQInputDto): Promise<FAQOutputDto> {
    return this.faqService.create(faqInputDto);
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  delete(@Param() params: { id: string }): Promise<FAQOutputDto> {
    return this.faqService.delete(params.id);
  }
}
