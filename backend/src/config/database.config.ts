import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT) || 8000,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  db: process.env.DB_DATABASE,
}));
