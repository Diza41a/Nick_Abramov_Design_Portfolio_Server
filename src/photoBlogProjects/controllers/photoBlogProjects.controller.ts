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
import { AuthGuard } from '../../auth/services/auth.guard';
import { PhotoBlogProjectService } from '../photoBlogProject.service';
import { PhotoBlogProjectOutputDto } from './output/photoBlogProjectOutputDto';
import { PhotoBlogProjectSummaryOutputDto } from './output/photoBlogProjectSummaryOutputDto';
import { PhotoBlogProjectInputDto } from './input/photoBlogProjectInputDto';
import { GetAllPhotoBlogProjectsQueryDto } from './queryValidation.pipe';

@Controller('photo-blog-projects')
export class PhotoBlogProjectsController {
  constructor(
    private readonly photoBlogProjectService: PhotoBlogProjectService,
  ) {}

  @Get('')
  getAll(
    @Query() { summary }: GetAllPhotoBlogProjectsQueryDto,
  ): Promise<
    Array<PhotoBlogProjectOutputDto | PhotoBlogProjectSummaryOutputDto>
  > {
    return this.photoBlogProjectService.getAll(summary);
  }

  @Get('/:id')
  getById(@Param() params: { id: string }): Promise<PhotoBlogProjectOutputDto> {
    return this.photoBlogProjectService.getById(params.id);
  }

  @UseGuards(AuthGuard)
  @Post()
  create(
    @Body() photoBlogProjectInputDto: PhotoBlogProjectInputDto,
  ): Promise<PhotoBlogProjectOutputDto> {
    return this.photoBlogProjectService.create(photoBlogProjectInputDto);
  }

  @UseGuards(AuthGuard)
  @Put('/:id')
  update(
    @Param() params: { id: string },
    @Body() photoBlogProjectInputDto: PhotoBlogProjectInputDto,
  ): Promise<PhotoBlogProjectOutputDto> {
    return this.photoBlogProjectService.update(
      params.id,
      photoBlogProjectInputDto,
    );
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  delete(@Param() params: { id: string }): Promise<PhotoBlogProjectOutputDto> {
    return this.photoBlogProjectService.delete(params.id);
  }
}
