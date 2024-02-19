import { HttpException, Injectable } from '@nestjs/common';
import { ProjectRepository } from '../repositories/project.repository';
import { ProjectOutputDtoMapper } from '../controllers/output/projectOutputDtoMapper';
import { ProjectOutputDto } from '../controllers/output/projectOutputDto';
import { ProjectInputDto } from '../controllers/input/projectInputDto';
import { ProjectInputDtoMapper } from '../controllers/input/projectInputDtoMapper';
import { ProjectSummaryOutputDtoMapper } from '../controllers/output/projectSummaryOutputDtoMapper';
import { ProjectSummaryOutputDto } from '../controllers/output/projectSummaryOutputDto';

@Injectable()
export class ProjectService {
  constructor(
    private readonly projectsRepository: ProjectRepository,
    private readonly projectOutputDtoMapper: ProjectOutputDtoMapper,
    private readonly projectSummaryOutputDtoMapper: ProjectSummaryOutputDtoMapper,
    private readonly projectInputDtoMapper: ProjectInputDtoMapper,
  ) {}

  async getAll(
    summary: boolean,
  ): Promise<Array<ProjectOutputDto | ProjectSummaryOutputDto>> {
    const projectDocuments = await this.projectsRepository.findAll();
    const mapper = summary
      ? this.projectSummaryOutputDtoMapper
      : this.projectOutputDtoMapper;
    const projectsOutputDto = projectDocuments.map((projectDocument) =>
      mapper.map(projectDocument),
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
    description,
    mainImagePath,
    isGallerySpaced,
    gallery = [],
  }: ProjectInputDto): Promise<ProjectOutputDto> {
    const projectInputDto = new ProjectInputDto(
      name,
      category,
      description,
      mainImagePath,
      isGallerySpaced,
      gallery,
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
    {
      name,
      category,
      description,
      mainImagePath,
      isGallerySpaced,
      gallery,
    }: ProjectInputDto,
  ): Promise<ProjectOutputDto> {
    const projectDocument = await this.projectsRepository.findById(id);
    if (!projectDocument) {
      throw new HttpException(`Project with id ${id} not found`, 404);
    }

    projectDocument.name = name || projectDocument.name;
    projectDocument.category = category || projectDocument.category;
    projectDocument.description = description || projectDocument.description;
    projectDocument.mainImagePath =
      mainImagePath || projectDocument.mainImagePath;
    projectDocument.isGallerySpaced =
      isGallerySpaced !== undefined
        ? isGallerySpaced
        : projectDocument.isGallerySpaced;
    projectDocument.gallery = gallery || projectDocument.gallery;

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
