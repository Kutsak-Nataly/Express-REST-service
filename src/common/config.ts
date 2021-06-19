import * as dotEnv from 'dotenv';
import path from 'path';

declare const process: {
  env: {
    NODE_ENV: string,
    PORT: number,
    HOST: string,
    AUTH_MODE: boolean,
    JWT_SECRET_KEY: string,
    TYPEORM_CONNECTION: string
    TYPEORM_HOST: string
    TYPEORM_USERNAME: string
    TYPEORM_PASSWORD: string
    TYPEORM_DATABASE: string
    TYPEORM_PORT: number
    TYPEORM_SYNCHRONIZE: boolean
    TYPEORM_MAX_QUERY_EXECUTION_TIME: number
  };
};

dotEnv.config({
  path: path.join(__dirname, '..','..','.env')
});

export const {
  NODE_ENV,
  PORT,
  HOST,
  AUTH_MODE,
  JWT_SECRET_KEY,
  TYPEORM_CONNECTION,
  TYPEORM_HOST,
  TYPEORM_USERNAME,
  TYPEORM_PASSWORD,
  TYPEORM_DATABASE,
  TYPEORM_PORT,
  TYPEORM_SYNCHRONIZE,
  TYPEORM_MAX_QUERY_EXECUTION_TIME
} = process.env;
