import * as dotEnv from 'dotenv';
import path from 'path';

declare const process: {
  env: {
    NODE_ENV: string
    PORT: number
    HOST: string
    AUTH_MODE: boolean
    JWT_SECRET_KEY: string
    POSTGRES_PASSWORD: string
    POSTGRES_USER: string
    POSTGRES_PORT: number
    POSTGRES_DB: string
  };
};

dotEnv.config({
  path: path.join(__dirname, '../../.env')
});

export const {PORT, HOST, JWT_SECRET_KEY, AUTH_MODE, POSTGRES_PASSWORD, POSTGRES_USER, POSTGRES_PORT, POSTGRES_DB} = process.env;
