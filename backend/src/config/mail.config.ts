import { MailOptions } from '../mail/mail-options.interface';

export default (): { mail: MailOptions } => {
  const baseUrl = process.env.CLIENT_BASE_URL ?? 'http://localhost:3001';
  const author = (process.env.author ?? 'Author').replace(/\s*<\w+>$/, '');

  return {
    mail: {
      from: process.env.MAIL_FROM ?? 'no-reply@example.com',
      productName: process.env.PRODUCT_NAME ?? 'Natours',
      loginUrl: `${baseUrl}/auth/login`,
      fromName: author,
      companyName: process.env.COMPANY_NAME ?? 'Natours Company.',
    },
  };
};
