import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { ProjectDocument } from './project';

@Injectable()
export class ProjectRepository {
  constructor(
    @Inject('PROJECTS_MODEL')
    private projectModel: Model<ProjectDocument>,
  ) {}

  findAll(): Promise<Array<ProjectDocument>> {
    return this.projectModel.find().exec();
  }
}
