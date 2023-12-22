import { Injectable } from '@nestjs/common';
import { ProjectRepository } from '../repositories/project.repository';
import { ProjectOutputDtoMapper } from '../controllers/output/projectOutputDtoMapper';
import { ProjectOutputDto } from '../controllers/output/projectOutputDto';

@Injectable()
export class ProjectService {
  constructor(private readonly projectsRepository: ProjectRepository) {}

  async getAll(): Promise<Array<ProjectOutputDto>> {
    const projectDocuments = await this.projectsRepository.findAll();
    const mapper = ProjectOutputDtoMapper;
    const projectsOutputDto = projectDocuments.map((projectDocument) =>
      mapper.map(projectDocument),
    );

    return projectsOutputDto;
  }
}
