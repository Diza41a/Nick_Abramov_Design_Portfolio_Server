import type { ProjectDocument } from '../../repositories/project';
import { ProjectSummaryOutputDto } from './projectSummaryOutputDto';

export class ProjectSummaryOutputDtoMapper {
  map(projectDocument: ProjectDocument): ProjectSummaryOutputDto {
    const projectSummaryOutputDto = new ProjectSummaryOutputDto(
      projectDocument._id,
      projectDocument.order,
      projectDocument.name,
      projectDocument.category,
      projectDocument.dateCreated,
      projectDocument.mainImage,
    );
    return projectSummaryOutputDto;
  }
}
