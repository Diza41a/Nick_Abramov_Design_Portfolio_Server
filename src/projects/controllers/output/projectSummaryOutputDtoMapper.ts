import { ProjectDocument } from '../../repositories/project';
import { ProjectSummaryOutputDto } from './projectSummaryOutputDto';

export class ProjectSummaryOutputDtoMapper {
  map(projectDocument: ProjectDocument): ProjectSummaryOutputDto {
    const projectSummaryOutputDto = new ProjectSummaryOutputDto(
      projectDocument._id,
      projectDocument.name,
      projectDocument.category,
      projectDocument.dateCreated,
    );
    return projectSummaryOutputDto;
  }
}