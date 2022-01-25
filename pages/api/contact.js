const mail = require('@sendgrid/mail');
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body);
  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
`;

  mail
    .send({
      to: 'sibalatanics@outlook.com',
      from: 'admin@shackdwellersnamibia.com',
      subject: 'New Message from shackdwellers site!',
      text: message,
      html: message.replace(/\r\n/g, '<br>'),
    })
    .then(() => res.status(200).json({ status: 'OK' }));
}
