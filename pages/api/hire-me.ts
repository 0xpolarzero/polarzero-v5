import type { NextApiRequest, NextApiResponse } from 'next';

import sendgrid from '@sendgrid/mail';

import { CONTACT_LINKS } from '@/lib/constants/site';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const formData = await req.body;
  const { name, email, subject, company, twitter, timeline, budget, message } = formData;

  if (!name || !email || !subject || !timeline || !budget || !message) {
    res.status(400).json({ message: 'Missing one or more required fields' });
    return;
  }

  try {
    await sendgrid.send({
      to: CONTACT_LINKS.email,
      from: CONTACT_LINKS.email,
      subject: `🚩 Lead from polarzero.xyz: ${subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html lang="en">
      <head>
        <meta charset="utf-8">
    
        <title>From polarzero.xyz</title>
        <meta name="description" content="polarzero.xyz contact form">
        <meta name="author" content="polarzero">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />  
      </head>
    
      <body>
        <h2>New mail from ${name}.</h2>
        <h3>Subject:</h3>
        <p>${subject}</p>
        <h3>Email:</h3>
        <p>${email}</p>
        <h3>Company:</h3>
        <p>${company}</p>
        <h3>Twitter/X:</h3>
        <p>${twitter}</p>
        <h3>Timeline:</h3>
        <p>${timeline}</p>
        <h3>Budget:</h3>
        <p>${budget}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      </body>
    </html>`,
    });

    return res.status(200).json({ message: 'Email sent' });
  } catch (err) {
    return res.status(500).json({ message: 'Error sending email' });
  }
}
