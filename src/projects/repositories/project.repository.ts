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
    const projectDocuments = this.projectModel.find().exec();

    return projectDocuments;
  }

  findById(id: string): Promise<ProjectDocument | undefined> {
    const projectDocument = this.projectModel.findById(id).exec();

    return projectDocument;
  }

  create(project: ProjectDocument): Promise<ProjectDocument> {
    const newProject = new this.projectModel(project);

    return newProject.save();
  }

  update(id: string, project: ProjectDocument): Promise<ProjectDocument> {
    const updatedProject = this.projectModel.findByIdAndUpdate(id, project, {
      new: true,
    });

    return updatedProject;
  }

  delete(id: string): Promise<ProjectDocument> {
    const deletedProject = this.projectModel.findByIdAndDelete(id);

    return deletedProject as unknown as Promise<ProjectDocument>;
  }
}
