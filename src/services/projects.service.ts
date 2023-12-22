import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Project } from '../interfaces/project';

@Injectable()
export class ProjectsService {
  constructor(
    @Inject('PROJECTS_MODEL')
    private projectModel: Model<Project>,
  ) {}

  findAll(): Promise<Array<Project>> {
    return this.projectModel.find().exec();
  }
}
