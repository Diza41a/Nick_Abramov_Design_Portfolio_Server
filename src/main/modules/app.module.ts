import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { ProjectsController } from '../../projects/controllers/projects.controller';
import { ProjectsService } from '../../projects/services/projects.service';
import { projectsProviders } from '../../projects/providers/projects.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ProjectsController],
  providers: [ProjectsService, ...projectsProviders],
})
export class AppModule {}
