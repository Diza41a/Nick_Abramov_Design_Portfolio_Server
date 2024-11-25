import { PhotoBlogProjectDocument } from '../../repositories/photoBlogProject';
import { PhotoBlogProjectOutputDto } from './photoBlogProjectOutputDto';

export class PhotoBlogProjectOutputDtoMapper {
  map(photoBlogProject: PhotoBlogProjectDocument): PhotoBlogProjectOutputDto {
    const photoBlogProjectOutputDto = new PhotoBlogProjectOutputDto(
      photoBlogProject._id,
      photoBlogProject.dateInfo,
      photoBlogProject.nameInfo,
      photoBlogProject.description,
      photoBlogProject.mainImage,
      photoBlogProject.gallerySections,
    );
    return photoBlogProjectOutputDto;
  }
}
