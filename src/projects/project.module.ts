import { Module } from '@nestjs/common';
import { DatabaseModule } from '../main/modules/database.module';
import { ProjectsController } from './controllers/projects.controller';
import { projectProviders } from './project.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ProjectsController],
  providers: [...projectProviders],
})
export class ProjectModule {}
