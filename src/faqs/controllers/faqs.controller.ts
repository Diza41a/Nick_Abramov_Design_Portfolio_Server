import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { FAQService } from '../faq.service';
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
  @Put('/reorder')
  reorder(
    @Body() body: { id: string; newOrder: number },
  ): Promise<FAQOutputDto> {
    return this.faqService.reorder(body.id, body.newOrder);
  }

  @UseGuards(AuthGuard)
  @Put('/:id')
  update(
    @Param() params: { id: string },
    @Body() faqInputDto: FAQInputDto,
  ): Promise<FAQOutputDto> {
    return this.faqService.update(params.id, faqInputDto);
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  delete(@Param() params: { id: string }): Promise<FAQOutputDto> {
    return this.faqService.delete(params.id);
  }
}
