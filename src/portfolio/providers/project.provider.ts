import { Connection } from 'mongoose';
import { ProjectSchema } from '../repositories/project.schema';

export const projectProviders = [
  {
    provide: 'PROJECTS_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Projects', ProjectSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
