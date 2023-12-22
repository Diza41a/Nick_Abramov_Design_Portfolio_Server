import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProjectService } from '../services/project.service';
import { ProjectOutputDto } from './output/projectOutputDto';
import { ProjectInputDto } from './input/projectInputDto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('')
  getAll(): Promise<Array<ProjectOutputDto>> {
    return this.projectService.getAll();
  }

  @Get('/:id')
  getById(@Param() params: { id: string }): Promise<ProjectOutputDto> {
    return this.projectService.getById(params.id);
  }

  @Post('')
  create(@Body() projectInputDto: ProjectInputDto): Promise<void> {
    return this.projectService.create(projectInputDto);
  }
}
