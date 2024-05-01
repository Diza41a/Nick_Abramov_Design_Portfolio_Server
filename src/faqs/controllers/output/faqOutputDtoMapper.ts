import { FAQDocument } from '../../repositories/faq';
import { FAQOutputDto } from './faqOutputDto';

export class FAQOutputDtoMapper {
  map(projectDocument: FAQDocument): FAQOutputDto {
    const faqOutputDto = new FAQOutputDto(
      projectDocument._id,
      projectDocument.question,
      projectDocument.answer,
      projectDocument.order,
    );
    return faqOutputDto;
  }
}
