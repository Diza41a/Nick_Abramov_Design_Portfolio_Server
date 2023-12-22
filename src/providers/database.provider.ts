import mongoose from 'mongoose';

const MONGODB_USERNAME = 'NicAdminTest';
const MONGODB_PASSWORD = 'Password321';
const DB_NAME = 'Portfolio';

const databaseUri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@nicportfolio.us574mw.mongodb.net/?retryWrites=true&w=majority`;
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(databaseUri, {
        dbName: DB_NAME,
      }),
  },
];
