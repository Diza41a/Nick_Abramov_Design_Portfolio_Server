import { Controller, Get } from '@nestjs/common';
import { ProjectService } from '../services/project.service';
import { ProjectDocument } from '../repositories/project';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('')
  getAll(): Promise<Array<ProjectDocument>> {
    return this.projectService.getAll();
  }

  @Get('/:id')
  getOne(id: string): string {
    return `This action returns a #${id} project`;
  }
}
