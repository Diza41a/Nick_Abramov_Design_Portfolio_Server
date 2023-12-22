import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../domains/project';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get('')
  getAll(): Promise<Array<Project>> {
    return this.projectsService.findAll();
  }

  @Get('/:id')
  getOne(id: string): string {
    return `This action returns a #${id} project`;
  }
}
