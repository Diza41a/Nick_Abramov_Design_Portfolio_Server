import { Module } from '@nestjs/common';
import { DatabaseModule } from '../main/modules/database.module';
import { PhotoBlogProjectsController } from './controllers/photoBlogProjects.controller';
import { photoBlogProjectProviders } from './photoBlogProject.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PhotoBlogProjectsController],
  providers: [...photoBlogProjectProviders],
})
export class PhotoBlogProjectModule {}
