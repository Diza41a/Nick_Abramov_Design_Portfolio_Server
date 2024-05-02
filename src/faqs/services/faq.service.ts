import { HttpException, Injectable } from '@nestjs/common';
import { FAQRepository } from '../repositories/faq.repository';
import { FAQOutputDtoMapper } from '../controllers/output/faqOutputDtoMapper';
import { FAQOutputDto } from '../controllers/output/faqOutputDto';
import { FAQInputDto } from '../controllers/input/faqInputDto';
import { FAQInputDtoMapper } from '../controllers/input/faqInputDtoMapper';

@Injectable()
export class FAQService {
  constructor(
    private readonly faqRepository: FAQRepository,
    private readonly faqOutputDtoMapper: FAQOutputDtoMapper,
    private readonly faqInputDtoMapper: FAQInputDtoMapper,
  ) {}

  async getAll(): Promise<Array<FAQOutputDto>> {
    const faqDocuments = await this.faqRepository.findAll();
    const faqsOutputDto = faqDocuments.map((faqDocument) =>
      this.faqOutputDtoMapper.map(faqDocument),
    );

    return faqsOutputDto;
  }

  // Admin methods
  async create({ question, answer }: FAQInputDto): Promise<FAQOutputDto> {
    const faqInputDto = new FAQInputDto(question, answer);
    const missingFields = faqInputDto.getMissingFields();
    if (missingFields.length > 0) {
      const errorMessage = `Unprocessable entity, missing fields in the DTO: [${missingFields}]`;
      throw new HttpException(errorMessage, 400);
    }
    const emptyFields = faqInputDto.getEmptyFields();
    if (emptyFields.length > 0) {
      const errorMessage = `Unprocessable entity, empty required fields in the DTO: [${emptyFields}]`;
      throw new HttpException(errorMessage, 400);
    }
    const faqDocument = this.faqInputDtoMapper.map(faqInputDto);
    const newFaqDocument = await this.faqRepository.create(faqDocument);

    const faqOutputDto = this.faqOutputDtoMapper.map(newFaqDocument);
    return faqOutputDto;
  }

  async delete(id: string): Promise<FAQOutputDto> {
    const faqDocument = await this.faqRepository.findById(id);
    if (!faqDocument) {
      throw new HttpException(`FAQ with id ${id} not found`, 404);
    }
    const deletedFaqDocument = await this.faqRepository.delete(id);
    const faqOutputDto = this.faqOutputDtoMapper.map(deletedFaqDocument);

    return faqOutputDto;
  }

  async update(
    id: string,
    { question, answer }: FAQInputDto,
  ): Promise<FAQOutputDto> {
    const faqDocument = await this.faqRepository.findById(id);
    if (!faqDocument) {
      throw new HttpException(`FAQ with id ${id} not found`, 404);
    }

    question && (faqDocument.question = question);
    answer && (faqDocument.answer = answer);

    const updatedFaqDocument = await this.faqRepository.update(id, faqDocument);
    const faqOutputDto = this.faqOutputDtoMapper.map(updatedFaqDocument);
    return faqOutputDto;
  }
}
