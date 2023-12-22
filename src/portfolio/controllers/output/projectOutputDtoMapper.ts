import { ProjectDocument } from '../../repositories/project';
import { ProjectOutputDto } from './projectOutputDto';

export class ProjectOutputDtoMapper {
  public static map(project: ProjectDocument): ProjectOutputDto {
    const projectOutputDto = new ProjectOutputDto(
      project.id,
      project.name,
      project.category,
      project.dateCreated,
      project.descriptionBullets,
    );
    return projectOutputDto;
  }
}
