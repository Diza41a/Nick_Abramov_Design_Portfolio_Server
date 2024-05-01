import { Injectable } from '@nestjs/common';
import { FAQRepository } from '../repositories/faq.repository';
import { FAQOutputDtoMapper } from '../controllers/output/faqOutputDtoMapper';
import { FAQOutputDto } from '../controllers/output/faqOutputDto';

@Injectable()
export class FAQService {
  constructor(
    private readonly faqRepository: FAQRepository,
    private readonly faqOutputDtoMapper: FAQOutputDtoMapper,
  ) {}

  async getAll(): Promise<Array<FAQOutputDto>> {
    const faqDocuments = await this.faqRepository.findAll();
    const faqsOutputDto = faqDocuments.map((faqDocument) =>
      this.faqOutputDtoMapper.map(faqDocument),
    );

    return faqsOutputDto;
  }
}
