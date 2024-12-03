import mongoose from 'mongoose';

const { NODE_ENV, MONGODB_URI_PROD, MONGODB_URI_DEV, DB_NAME } = process.env;

const CONNECTION_STRING =
  NODE_ENV === 'production' ? MONGODB_URI_PROD : MONGODB_URI_DEV;

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(CONNECTION_STRING, {
        dbName: DB_NAME,
      }),
  },
];
