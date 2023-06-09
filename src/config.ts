import * as dotenv from 'dotenv';

dotenv.config();

export default {
  databaseurl: process.env.DATABASE_URL,
  jwtSecretKey: process.env.JWT_SECRET_KET,
};
