import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class GetAllPhotoBlogProjectsQueryDto {
  @IsOptional()
  @Transform((value) => (value as unknown as string) === 'true')
  summary: boolean;
}
