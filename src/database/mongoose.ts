/* eslint-disable prettier/prettier */
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  DB_MONGO_CONNECTION,
  DB_MONGO_DB,
  DB_MONGO_HOST,
  DB_MONGO_PASSWORD,
  DB_MONGO_USER,
} from 'src/config/constants';

export const mongooseDatabaseInfo = [
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => {
      const data = {
        connection: configService.get(DB_MONGO_CONNECTION),
        db: configService.get(DB_MONGO_DB),
        host: configService.get(DB_MONGO_HOST),
        password: configService.get(DB_MONGO_PASSWORD),
        user: configService.get(DB_MONGO_USER),
      };
      const { connection, db, host, password, user } = data;
      return {
        uri: `mongodb://localhost:27017/deslizaT`,
      };
      // return {
      //   uri: `${connection}://${user}:${password}@${host}/${db}`,
      // };
    },
    inject: [ConfigService],
  }),
];
