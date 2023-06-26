import { registerAs } from '@nestjs/config';
import { BullModuleOptions } from '@nestjs/bull';

import { EMAIL } from '../mail/mail.constant';

export default registerAs<() => BullModuleOptions>('bull', (): any => ({
  name: EMAIL,
  redis: process.env.REDIS_URL,
}));
