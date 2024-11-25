import type { PhotoBlogProjectDocument } from '../../repositories/photoBlogProject';
import { PhotoBlogProjectSummaryOutputDto } from './photoBlogProjectSummaryOutputDto';

export class PhotoBlogProjectSummaryOutputDtoMapper {
  map(
    photoBlogProjectDocument: PhotoBlogProjectDocument,
  ): PhotoBlogProjectSummaryOutputDto {
    const photoBlogProjectSummaryOutputDto =
      new PhotoBlogProjectSummaryOutputDto(
        photoBlogProjectDocument._id,
        photoBlogProjectDocument.dateInfo,
        photoBlogProjectDocument.nameInfo,
        photoBlogProjectDocument.mainImage,
      );
    return photoBlogProjectSummaryOutputDto;
  }
}
