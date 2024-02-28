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
    const projectDocuments = this.projectModel.find().sort({ order: 1 }).exec();

    return projectDocuments;
  }

  findById(id: string): Promise<ProjectDocument | undefined> {
    const projectDocument = this.projectModel.findById(id).exec();

    return projectDocument;
  }

  async create(project: ProjectDocument): Promise<ProjectDocument> {
    const newProject = new this.projectModel(project);
    newProject.order = 0;

    // Update custom `order` tracker of projects to account for the newest item
    await this.projectModel.updateMany({}, { $inc: { order: 1 } });

    return newProject.save();
  }

  update(id: string, project: ProjectDocument): Promise<ProjectDocument> {
    const updatedProject = this.projectModel.findByIdAndUpdate(id, project, {
      new: true,
    });

    return updatedProject;
  }

  async reorder(id: string, newOrder: number): Promise<ProjectDocument> {
    const projectDocument = await this.projectModel.findById(id);
    const oldOrder = projectDocument.order;

    if (oldOrder === newOrder) {
      return;
    }

    const incAmount = newOrder < oldOrder ? 1 : -1;

    const newOrderIsLessFilter = {
      order: { $gte: newOrder, $lt: oldOrder },
    };
    const newOrderIsMoreFilter = {
      order: { $gt: oldOrder, $lte: newOrder },
    };
    const filter = {
      $and: [
        { order: { $ne: oldOrder } },
        newOrder < oldOrder ? newOrderIsLessFilter : newOrderIsMoreFilter,
      ],
    };

    const update = { $inc: { order: incAmount } };

    await this.projectModel.updateMany(filter, update);
    const reorderedProject = await this.projectModel.findByIdAndUpdate(
      id,
      {
        order: newOrder,
      },
      {
        new: true,
      },
    );

    return reorderedProject as unknown as Promise<ProjectDocument>;
  }

  async delete(id: string): Promise<ProjectDocument> {
    const deletedProject = await this.projectModel.findByIdAndDelete(id);
    const deleteProjectOrder = deletedProject.order;

    // Update custom `order` tracker of projects to account for the deleted item
    await this.projectModel.updateMany(
      { order: { $gt: deleteProjectOrder } },
      { $inc: { order: -1 } },
    );

    return deletedProject as unknown as Promise<ProjectDocument>;
  }
}
