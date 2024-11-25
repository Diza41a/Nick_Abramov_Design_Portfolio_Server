import { Inject } from '@nestjs/common';
import { PhotoBlogProjectDocument } from '../../repositories/photoBlogProject';
import { PhotoBlogProjectInputDto } from './photoBlogProjectInputDto';
import { Model } from 'mongoose';

export class PhotoBlogProjectInputDtoMapper {
  constructor(
    @Inject('PHOTO_BLOG_PROJECTS_MODEL')
    private photoBlogProjectModel: Model<PhotoBlogProjectDocument>,
  ) {}

  map(
    photoBlogProjectInputDto: PhotoBlogProjectInputDto,
  ): PhotoBlogProjectDocument {
    const photoBlogProjectDocument = new this.photoBlogProjectModel(
      photoBlogProjectInputDto,
    );

    return photoBlogProjectDocument;
  }
}
