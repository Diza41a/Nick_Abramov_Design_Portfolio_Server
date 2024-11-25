import { HttpException, Injectable } from '@nestjs/common';
import { PhotoBlogProjectRepository } from './repositories/photoBlogProject.repository';
import { PhotoBlogProjectOutputDto } from './controllers/output/photoBlogProjectOutputDto';
import { PhotoBlogProjectOutputDtoMapper } from './controllers/output/photoBlogProjectOutputDtoMapper';
import { PhotoBlogProjectSummaryOutputDto } from './controllers/output/photoBlogProjectSummaryOutputDto';
import { PhotoBlogProjectSummaryOutputDtoMapper } from './controllers/output/photoBlogProjectSummaryOutputDtoMapper';
import { PhotoBlogProjectInputDto } from './controllers/input/photoBlogProjectInputDto';
import { PhotoBlogProjectInputDtoMapper } from './controllers/input/photoBlogProjectInputDtoMapper';

@Injectable()
export class PhotoBlogProjectService {
  constructor(
    private readonly photoBlogProjectRepository: PhotoBlogProjectRepository,
    private readonly photoBlogProjectOutputDtoMapper: PhotoBlogProjectOutputDtoMapper,
    private readonly photoBlogProjectSummaryOutputDtoMapper: PhotoBlogProjectSummaryOutputDtoMapper,
    private readonly photoBlogProjectInputDtoMapper: PhotoBlogProjectInputDtoMapper,
  ) {}

  async getAll(
    summary: boolean,
  ): Promise<
    Array<PhotoBlogProjectOutputDto | PhotoBlogProjectSummaryOutputDto>
  > {
    const photoBlogProjects = await this.photoBlogProjectRepository.findAll();
    const mapper = summary
      ? this.photoBlogProjectSummaryOutputDtoMapper
      : this.photoBlogProjectOutputDtoMapper;
    const photoBlogProjectsOutputDto = photoBlogProjects.map(
      (photoBlogProject) => mapper.map(photoBlogProject),
    );

    return photoBlogProjectsOutputDto;
  }

  async getById(id: string): Promise<PhotoBlogProjectOutputDto> {
    const photoBlogProject = await this.photoBlogProjectRepository.findById(id);
    if (!photoBlogProject) {
      throw new HttpException(
        `Photo blog project with id ${id} not found`,
        404,
      );
    }
    const photoBlogProjectOutputDto =
      this.photoBlogProjectOutputDtoMapper.map(photoBlogProject);

    return photoBlogProjectOutputDto;
  }

  async create({
    dateInfo,
    nameInfo,
    description,
    mainImage,
    gallerySections = [],
  }: PhotoBlogProjectInputDto): Promise<PhotoBlogProjectOutputDto> {
    const photoBlogProjectInputDto = new PhotoBlogProjectInputDto(
      dateInfo,
      nameInfo,
      description,
      mainImage,
      gallerySections,
    );

    const missingFields = photoBlogProjectInputDto.getMissingFields();
    if (missingFields.length > 0) {
      const errorMessage = `Unprocessable entity, missing fields in the DTO: [${missingFields}]`;
      throw new HttpException(errorMessage, 400);
    }
    const emptyFields = photoBlogProjectInputDto.getEmptyFields();
    if (emptyFields.length > 0) {
      const errorMessage = `Unprocessable entity, empty required fields in the DTO: [${emptyFields}]`;
      throw new HttpException(errorMessage, 400);
    }

    const photoBlogProjectDocument = this.photoBlogProjectInputDtoMapper.map(
      photoBlogProjectInputDto,
    );
    const newPhotoBlogProject = await this.photoBlogProjectRepository.create(
      photoBlogProjectDocument,
    );

    const photoBlogProjectOutputDto =
      this.photoBlogProjectOutputDtoMapper.map(newPhotoBlogProject);
    return photoBlogProjectOutputDto;
  }

  async update(
    id: string,
    {
      dateInfo,
      nameInfo,
      description,
      mainImage,
      gallerySections,
    }: PhotoBlogProjectInputDto,
  ): Promise<PhotoBlogProjectOutputDto> {
    const photoBlogProjectDocument =
      await this.photoBlogProjectRepository.findById(id);
    if (!photoBlogProjectDocument) {
      const errorMessage = `Photo blog project with id ${id} not found`;
      throw new HttpException(errorMessage, 404);
    }

    photoBlogProjectDocument.dateInfo =
      dateInfo || photoBlogProjectDocument.dateInfo;
    photoBlogProjectDocument.nameInfo =
      nameInfo || photoBlogProjectDocument.nameInfo;
    photoBlogProjectDocument.description =
      description || photoBlogProjectDocument.description;
    photoBlogProjectDocument.mainImage =
      mainImage || photoBlogProjectDocument.mainImage;
    photoBlogProjectDocument.gallerySections =
      gallerySections || photoBlogProjectDocument.gallerySections;

    const updatedPhotoBlogProjectDocument =
      await this.photoBlogProjectRepository.update(
        id,
        photoBlogProjectDocument,
      );

    const photoBlogProjectOutputDto = this.photoBlogProjectOutputDtoMapper.map(
      updatedPhotoBlogProjectDocument,
    );
    return photoBlogProjectOutputDto;
  }

  async delete(id: string): Promise<PhotoBlogProjectOutputDto> {
    const photoBlogProjectDocument =
      await this.photoBlogProjectRepository.findById(id);
    if (!photoBlogProjectDocument) {
      const errorMessage = `Photo blog project with id ${id} not found`;
      throw new HttpException(errorMessage, 404);
    }

    const deletedPhotoBlogProjectDocument =
      await this.photoBlogProjectRepository.delete(id);

    const photoBlogProjectOutputDto = this.photoBlogProjectOutputDtoMapper.map(
      deletedPhotoBlogProjectDocument,
    );

    return photoBlogProjectOutputDto;
  }
}
