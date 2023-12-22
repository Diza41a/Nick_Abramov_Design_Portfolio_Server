import { Connection } from 'mongoose';
import { ProjectSchema } from '../schemas/project.schema';

export const projectsProviders = [
  {
    provide: 'PROJECTS_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Projects', ProjectSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
