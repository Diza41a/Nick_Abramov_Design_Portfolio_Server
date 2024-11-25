import { Connection } from 'mongoose';
import { ProjectSchema } from './repositories/project.schema';
import { ProjectInputDtoMapper } from './controllers/input/projectInputDtoMapper';
import { ProjectOutputDtoMapper } from './controllers/output/projectOutputDtoMapper';
import { ProjectRepository } from './repositories/project.repository';
import { ProjectService } from './project.service';
import { ProjectSummaryOutputDtoMapper } from './controllers/output/projectSummaryOutputDtoMapper';

const ProjectsModelProvider = {
  provide: 'PROJECTS_MODEL',
  useFactory: (connection: Connection) =>
    connection.model('projects', ProjectSchema),
  inject: ['DATABASE_CONNECTION'],
};

export const projectProviders = [
  ProjectsModelProvider,
  ProjectInputDtoMapper,
  ProjectOutputDtoMapper,
  ProjectSummaryOutputDtoMapper,
  ProjectRepository,
  ProjectService,
];
