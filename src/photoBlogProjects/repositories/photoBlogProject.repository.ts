import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { PhotoBlogProjectDocument } from './photoBlogProject';

@Injectable()
export class PhotoBlogProjectRepository {
  constructor(
    @Inject('PHOTO_BLOG_PROJECTS_MODEL')
    private photoBlogProjectModel: Model<PhotoBlogProjectDocument>,
  ) {}

  findAll(): Promise<Array<PhotoBlogProjectDocument>> {
    const photoBlogProjectDocuments = this.photoBlogProjectModel
      .find()
      .sort({ 'dateInfo.year': -1, 'dateInfo.monthIndex': -1 })
      .exec();

    return photoBlogProjectDocuments;
  }

  findById(id: string): Promise<PhotoBlogProjectDocument | undefined> {
    const projectDocument = this.photoBlogProjectModel.findById(id).exec();

    return projectDocument;
  }

  async create(
    photoBlogProject: PhotoBlogProjectDocument,
  ): Promise<PhotoBlogProjectDocument> {
    const newProject = new this.photoBlogProjectModel(photoBlogProject);

    return newProject.save();
  }

  update(
    id: string,
    photoBlogProject: PhotoBlogProjectDocument,
  ): Promise<PhotoBlogProjectDocument> {
    const updatedPhotoBlogProject =
      this.photoBlogProjectModel.findByIdAndUpdate(id, photoBlogProject, {
        new: true,
      });

    return updatedPhotoBlogProject;
  }

  async delete(id: string): Promise<PhotoBlogProjectDocument> {
    const deletedPhotoBlogProject =
      await this.photoBlogProjectModel.findByIdAndDelete(id);

    return deletedPhotoBlogProject as unknown as Promise<PhotoBlogProjectDocument>;
  }
}
