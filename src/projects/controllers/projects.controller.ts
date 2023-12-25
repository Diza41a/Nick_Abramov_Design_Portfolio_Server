import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProjectService } from '../services/project.service';
import { ProjectOutputDto } from './output/projectOutputDto';
import { ProjectInputDto } from './input/projectInputDto';
import { ProjectSummaryOutputDto } from './output/projectSummaryOutputDto';
import { AuthGuard } from '../../auth/services/auth.guard';
import { GetAllProjectsQueryDto } from './query/queryValidation.pipe';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('')
  getAll(
    @Query() { summary }: GetAllProjectsQueryDto,
  ): Promise<Array<ProjectOutputDto | ProjectSummaryOutputDto>> {
    return this.projectService.getAll(summary);
  }

  @Get('/:id')
  getById(@Param() params: { id: string }): Promise<ProjectOutputDto> {
    return this.projectService.getById(params.id);
  }

  @UseGuards(AuthGuard)
  @Post('')
  create(@Body() projectInputDto: ProjectInputDto): Promise<ProjectOutputDto> {
    return this.projectService.create(projectInputDto);
  }

  @UseGuards(AuthGuard)
  @Put('/:id')
  update(
    @Param() params: { id: string },
    @Body() projectInputDto: ProjectInputDto,
  ): Promise<ProjectOutputDto> {
    return this.projectService.update(params.id, projectInputDto);
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  delete(@Param() params: { id: string }): Promise<ProjectOutputDto> {
    return this.projectService.delete(params.id);
  }
}
