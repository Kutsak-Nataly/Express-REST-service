import * as dotEnv from 'dotenv';
import path from 'path';

declare const process: {
  env: {
    PORT: number,
    TYPEORM_HOST: string,
    JWT_SECRET_KEY: string,
    CRYPT_SALT: number
  };
};

dotEnv.config({
  path: path.join(__dirname, '..','..','.env')
});

export const {
  PORT,
  TYPEORM_HOST,
  JWT_SECRET_KEY,
  CRYPT_SALT
} = process.env;
