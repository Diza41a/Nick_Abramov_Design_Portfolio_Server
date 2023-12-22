import { Inject } from '@nestjs/common';
import { ProjectDocument } from '../../repositories/project';
import { ProjectInputDto } from './projectInputDto';
import { Model } from 'mongoose';

export class ProjectInputDtoMapper {
  constructor(
    @Inject('PROJECTS_MODEL')
    private projectModel: Model<ProjectDocument>,
  ) {}

  map(projectInputDto: ProjectInputDto): ProjectDocument {
    const dateCreated = new Date().getTime();

    const projectDocument = new this.projectModel({
      ...projectInputDto,
      dateCreated,
    });

    return projectDocument;
  }
}
