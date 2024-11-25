import { Connection } from 'mongoose';
import { PhotoBlogProjectSchema } from './repositories/photoBlogProject.schema';
// import { PhotoBlogProjectInputDtoMapper }
// import { PhotoBlogProjectOutputDtoMapper }
// import { PhotoBlogProjectRepository }
// import { PhotoBlogProjectService }
// import { PhotoBlogProjectSummaryOutputDtoMapper }

const PhotoBlogProjectsModelProvider = {
  provide: 'PHOTO_BLOG_PROJECTS_MODEL',
  useFactory: (connection: Connection) =>
    connection.model('photoBlogProjects', PhotoBlogProjectSchema),
  inject: ['DATABASE_CONNECTION'],
};

export const PhotoBlogProjectProviders = [
  PhotoBlogProjectsModelProvider,
  // PhotoBlogProjectInputDtoMapper,
  // PhotoBlogProjectOutputDtoMapper,
  // PhotoBlogProjectSummaryOutputDtoMapper,
  // PhotoBlogProjectRepository,
  // PhotoBlogProjectService,
];
