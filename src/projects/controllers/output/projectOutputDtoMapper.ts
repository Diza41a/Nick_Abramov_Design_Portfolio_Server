import { ProjectDocument } from '../../repositories/project';
import { ProjectOutputDto } from './projectOutputDto';

export class ProjectOutputDtoMapper {
  map(projectDocument: ProjectDocument): ProjectOutputDto {
    const projectOutputDto = new ProjectOutputDto(
      projectDocument._id,
      projectDocument.name,
      projectDocument.category,
      projectDocument.dateCreated,
      projectDocument.descriptionBullets,
    );
    return projectOutputDto;
  }
}
