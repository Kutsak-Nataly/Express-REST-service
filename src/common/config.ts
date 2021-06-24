import * as dotEnv from 'dotenv';
import path from 'path';

declare const process: {
  env: {
    PORT: number,
    TYPEORM_HOST: string,
  };
};

dotEnv.config({
  path: path.join(__dirname, '..','..','.env')
});

export const {
  PORT,
  TYPEORM_HOST
} = process.env;
