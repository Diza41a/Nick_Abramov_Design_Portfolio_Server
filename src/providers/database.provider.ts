import mongoose from 'mongoose';

const { MONGODB_URI, DB_NAME } = process.env;

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(MONGODB_URI, {
        dbName: DB_NAME,
      }),
  },
];
