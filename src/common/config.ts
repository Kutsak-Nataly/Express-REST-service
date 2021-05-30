import * as dotEnv from 'dotenv';
import path from 'path';

dotEnv.config({
  path: path.join(__dirname, '../../.env')
});

export const {PORT, NODE_ENV, MONGO_CONNECTION_STRING, JWT_SECRET_KEY, AUTH_MODE} = process.env;