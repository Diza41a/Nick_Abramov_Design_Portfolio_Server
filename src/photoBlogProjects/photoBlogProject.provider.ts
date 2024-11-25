import { Connection } from 'mongoose';
import { PhotoBlogProjectSchema } from './repositories/photoBlogProject.schema';
import { PhotoBlogProjectOutputDtoMapper } from './controllers/output/photoBlogProjectOutputDtoMapper';
import { PhotoBlogProjectSummaryOutputDtoMapper } from './controllers/output/photoBlogProjectSummaryOutputDtoMapper';
import { PhotoBlogProjectInputDtoMapper } from './controllers/input/photoBlogProjectInputDtoMapper';
import { PhotoBlogProjectRepository } from './repositories/photoBlogProject.repository';
import { PhotoBlogProjectService } from './photoBlogProject.service';

const PhotoBlogProjectsModelProvider = {
  provide: 'PHOTO_BLOG_PROJECTS_MODEL',
  useFactory: (connection: Connection) =>
    connection.model('photoBlogProjects', PhotoBlogProjectSchema),
  inject: ['DATABASE_CONNECTION'],
};

export const photoBlogProjectProviders = [
  PhotoBlogProjectsModelProvider,
  PhotoBlogProjectOutputDtoMapper,
  PhotoBlogProjectSummaryOutputDtoMapper,
  PhotoBlogProjectInputDtoMapper,
  PhotoBlogProjectRepository,
  PhotoBlogProjectService,
];
