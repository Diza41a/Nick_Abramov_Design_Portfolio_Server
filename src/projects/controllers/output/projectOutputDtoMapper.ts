import { ProjectDocument } from '../../repositories/project';
import { ProjectOutputDto } from './projectOutputDto';

export class ProjectOutputDtoMapper {
  map(projectDocument: ProjectDocument): ProjectOutputDto {
    const projectOutputDto = new ProjectOutputDto(
      projectDocument._id,
      projectDocument.name,
      projectDocument.category,
      projectDocument.dateCreated,
      projectDocument.description,
      projectDocument.mainImagePath,
      projectDocument.isGallerySpaced,
      projectDocument.gallery,
    );
    return projectOutputDto;
  }
}
