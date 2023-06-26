import { registerAs } from '@nestjs/config';
import { MailerOptions } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';

export default registerAs<() => MailerOptions>('mailer', (): any => {
  const host = process.env.MAIL_HOST ?? 'localhost';
  const port = Number(process.env.MAIL_PORT) || 0;
  const secure = ['true', '1', 1].includes(process.env.MAIL_SECURE);
  const user = process.env.MAIL_USERNAME || 'username';
  const pass = process.env.MAIL_PASSWORD || 'password';

  return {
    transport: {
      host,
      port,
      secure,
      ignoreTLS: !secure,
      auth: {
        user,
        pass,
        // ssl: true
      },
    },
    template: {
      dir: process.cwd() + '/templates/',
      adapter: new EjsAdapter(),
    },
  };
});
