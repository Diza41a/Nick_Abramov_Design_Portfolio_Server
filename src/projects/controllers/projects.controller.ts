import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseBoolPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProjectService } from '../services/project.service';
import { ProjectOutputDto } from './output/projectOutputDto';
import { ProjectInputDto } from './input/projectInputDto';
import { ProjectSummaryOutputDto } from './output/projectSummaryOutputDto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('')
  getAll(
    @Query('summary', ParseBoolPipe) summary: boolean = false,
  ): Promise<Array<ProjectOutputDto | ProjectSummaryOutputDto>> {
    return this.projectService.getAll(summary);
  }

  @Get('/:id')
  getById(@Param() params: { id: string }): Promise<ProjectOutputDto> {
    return this.projectService.getById(params.id);
  }

  @Post('')
  create(@Body() projectInputDto: ProjectInputDto): Promise<ProjectOutputDto> {
    return this.projectService.create(projectInputDto);
  }

  @Put('/:id')
  update(
    @Param() params: { id: string },
    @Body() projectInputDto: ProjectInputDto,
  ): Promise<ProjectOutputDto> {
    return this.projectService.update(params.id, projectInputDto);
  }

  @Delete('/:id')
  delete(@Param() params: { id: string }): Promise<ProjectOutputDto> {
    return this.projectService.delete(params.id);
  }
}
