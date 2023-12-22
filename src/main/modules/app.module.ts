import { Module } from '@nestjs/common';
import { ProjectModule } from '../../projects/modules/project.module';

@Module({
  imports: [ProjectModule],
})
export class AppModule {}
