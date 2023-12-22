import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { ProjectsController } from '../controllers/projects.controller';
import { ProjectsService } from '../services/projects.service';
import { projectsProviders } from '../providers/projects.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ProjectsController],
  providers: [ProjectsService, ...projectsProviders],
})
export class AppModule {}
