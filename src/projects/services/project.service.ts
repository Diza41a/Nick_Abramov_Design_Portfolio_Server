import { HttpException, Injectable } from '@nestjs/common';
import { ProjectRepository } from '../repositories/project.repository';
import { ProjectOutputDtoMapper } from '../controllers/output/projectOutputDtoMapper';
import { ProjectOutputDto } from '../controllers/output/projectOutputDto';
import { ProjectInputDto } from '../controllers/input/projectInputDto';
import { ProjectInputDtoMapper } from '../controllers/input/projectInputDtoMapper';

@Injectable()
export class ProjectService {
  constructor(
    private readonly projectsRepository: ProjectRepository,
    private readonly projectOutputDtoMapper: ProjectOutputDtoMapper,
    private readonly projectInputDtoMapper: ProjectInputDtoMapper,
  ) {}

  async getAll(): Promise<Array<ProjectOutputDto>> {
    const projectDocuments = await this.projectsRepository.findAll();
    const projectsOutputDto = projectDocuments.map((projectDocument) =>
      this.projectOutputDtoMapper.map(projectDocument),
    );

    return projectsOutputDto;
  }

  async getById(id: string): Promise<ProjectOutputDto> {
    const projectDocument = await this.projectsRepository.findById(id);
    if (!projectDocument) {
      throw new HttpException(`Project with id ${id} not found`, 404);
    }
    const projectOutputDto = this.projectOutputDtoMapper.map(projectDocument);
    return projectOutputDto;
  }

  // !: Admin only methods <- do not expose to public in production
  async create(projectInputDto: ProjectInputDto): Promise<ProjectOutputDto> {
    const projectDocument = this.projectInputDtoMapper.map(projectInputDto);
    await this.projectsRepository.create(projectDocument);

    const projectOutputDto = this.projectOutputDtoMapper.map(projectDocument);
    return projectOutputDto;
  }
}
