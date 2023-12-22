import { Module } from '@nestjs/common';
import { ProjectModule } from '../../portfolio/modules/project.module';

@Module({
  imports: [ProjectModule],
})
export class AppModule {}
