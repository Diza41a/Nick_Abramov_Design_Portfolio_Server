import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../main/modules/database.module';
import { ProjectsController } from '../../portfolio/controllers/projects.controller';
import { ProjectService } from '../../portfolio/services/project.service';
import { projectProviders } from '../../portfolio/providers/project.provider';
import { ProjectRepository } from '../../portfolio/repositories/project.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [ProjectsController],
  providers: [ProjectRepository, ProjectService, ...projectProviders],
})
export class ProjectModule {}
