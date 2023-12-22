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
  async create({
    name,
    category,
    descriptionBullets,
  }: ProjectInputDto): Promise<ProjectOutputDto> {
    const projectInputDto = new ProjectInputDto(
      name,
      category,
      descriptionBullets,
    );
    const missingFields = projectInputDto.getMissingFields();
    if (missingFields.length > 0) {
      const errorMessage = `Unprocessable entity, missing fields in the DTO: [${missingFields}]`;
      throw new HttpException(errorMessage, 400);
    }
    const projectDocument = this.projectInputDtoMapper.map(projectInputDto);
    const newProjectDocument =
      await this.projectsRepository.create(projectDocument);

    const projectOutputDto =
      this.projectOutputDtoMapper.map(newProjectDocument);
    return projectOutputDto;
  }

  async update(
    id: string,
    { name, category, descriptionBullets }: ProjectInputDto,
  ): Promise<ProjectOutputDto> {
    const projectDocument = await this.projectsRepository.findById(id);
    if (!projectDocument) {
      throw new HttpException(`Project with id ${id} not found`, 404);
    }
    projectDocument.name = name || projectDocument.name;
    projectDocument.category = category || projectDocument.category;
    projectDocument.descriptionBullets =
      descriptionBullets || projectDocument.descriptionBullets;
    const updatedProjectDocument = await this.projectsRepository.update(
      id,
      projectDocument,
    );
    const projectOutputDto = this.projectOutputDtoMapper.map(
      updatedProjectDocument,
    );

    return projectOutputDto;
  }

  async delete(id: string): Promise<ProjectOutputDto> {
    const projectDocument = await this.projectsRepository.findById(id);
    if (!projectDocument) {
      throw new HttpException(`Project with id ${id} not found`, 404);
    }
    const deletedProjectDocument = await this.projectsRepository.delete(id);
    const projectOutputDto = this.projectOutputDtoMapper.map(
      deletedProjectDocument,
    );

    return projectOutputDto;
  }
}
